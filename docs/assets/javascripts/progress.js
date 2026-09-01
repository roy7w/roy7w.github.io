(function () {
  "use strict";

  const STORAGE_PREFIX = "roy7w-agent-roadmap:v1:";
  const STAGE_TOTALS = {
    "stage-00": 22,
    "stage-01": 31,
    "stage-02": 33,
    "stage-03": 33,
    "stage-04": 31,
    "stage-05": 26,
    "stage-06": 30,
    "stage-07": 33,
    "stage-08": 34,
    "stage-09": 32,
    "stage-10": 43
  };
  const OVERALL_TOTAL = Object.values(STAGE_TOTALS).reduce((sum, value) => sum + value, 0);

  function currentPageId() {
    const match = window.location.pathname.match(/\/ai-agent\/(stage-\d{2})\/?$/);
    if (match) return match[1];
    if (/\/ai-agent\/?$/.test(window.location.pathname)) return "roadmap-index";
    return null;
  }

  function hashText(value) {
    let hash = 2166136261;
    for (let index = 0; index < value.length; index += 1) {
      hash ^= value.charCodeAt(index);
      hash = Math.imul(hash, 16777619);
    }
    return (hash >>> 0).toString(36);
  }

  function readState(pageId) {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_PREFIX + pageId) || "{}");
    } catch (_error) {
      return {};
    }
  }

  function writeState(pageId, state) {
    try {
      localStorage.setItem(STORAGE_PREFIX + pageId, JSON.stringify(state));
    } catch (_error) {
      // The checklist remains usable for this visit if storage is unavailable.
    }
  }

  function completedFor(pageId) {
    return Object.values(readState(pageId)).filter(Boolean).length;
  }

  function overallCompleted() {
    return Object.keys(STAGE_TOTALS).reduce((sum, stageId) => {
      return sum + Math.min(completedFor(stageId), STAGE_TOTALS[stageId]);
    }, 0);
  }

  function progressRow(label, className) {
    const row = document.createElement("div");
    row.className = "roadmap-progress-row " + className;
    row.innerHTML = [
      '<div class="roadmap-progress-heading">',
      '<span class="roadmap-progress-label"></span>',
      '<span class="roadmap-progress-value"><strong>0</strong> / 0 (0%)</span>',
      "</div>",
      '<div class="roadmap-progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="0" aria-valuenow="0">',
      '<div class="roadmap-progress-fill"></div>',
      "</div>"
    ].join("");
    row.querySelector(".roadmap-progress-label").textContent = label;
    return row;
  }

  function setProgress(row, completed, total) {
    const safeTotal = Math.max(total, 0);
    const safeCompleted = Math.min(Math.max(completed, 0), safeTotal);
    const percent = safeTotal ? Math.round((safeCompleted / safeTotal) * 100) : 0;
    row.querySelector(".roadmap-progress-value").innerHTML =
      "<strong>" + safeCompleted + "</strong> / " + safeTotal + " (" + percent + "%)";
    const track = row.querySelector(".roadmap-progress-track");
    track.setAttribute("aria-valuemax", String(safeTotal));
    track.setAttribute("aria-valuenow", String(safeCompleted));
    row.querySelector(".roadmap-progress-fill").style.width = percent + "%";
  }

  function initialiseChecklist() {
    const article = document.querySelector(".md-content__inner.md-typeset");
    const pageId = currentPageId();
    if (!article || !pageId || article.dataset.progressReady === "true") return;
    article.dataset.progressReady = "true";

    const inputs = Array.from(article.querySelectorAll('.task-list-item input[type="checkbox"]'));
    const state = readState(pageId);

    inputs.forEach((input, index) => {
      const item = input.closest(".task-list-item");
      const text = (item ? item.textContent : "task-" + index).replace(/\s+/g, " ").trim();
      const taskId = hashText(text + "|" + index);
      input.disabled = false;
      input.removeAttribute("disabled");
      input.checked = Object.prototype.hasOwnProperty.call(state, taskId)
        ? Boolean(state[taskId])
        : input.checked;
      if (item) item.classList.toggle("is-complete", input.checked);

      input.addEventListener("change", function () {
        state[taskId] = input.checked;
        writeState(pageId, state);
        if (item) item.classList.toggle("is-complete", input.checked);
        updateProgress();
      });
    });

    const heading = article.querySelector("h1");
    if (!heading) return;

    const panel = document.createElement("section");
    panel.className = "roadmap-progress-panel";
    panel.setAttribute("aria-label", "学习进度");
    panel.appendChild(progressRow("总进度", "roadmap-progress-overall"));
    if (Object.prototype.hasOwnProperty.call(STAGE_TOTALS, pageId)) {
      panel.appendChild(progressRow("本阶段", "roadmap-progress-current"));
    }
    const note = document.createElement("p");
    note.className = "roadmap-progress-note";
    note.textContent = "进度自动保存在当前浏览器，可随时勾选或取消。";
    panel.appendChild(note);
    heading.insertAdjacentElement("afterend", panel);

    function updateProgress() {
      const overallRow = panel.querySelector(".roadmap-progress-overall");
      setProgress(overallRow, overallCompleted(), OVERALL_TOTAL);
      const currentRow = panel.querySelector(".roadmap-progress-current");
      if (currentRow) {
        setProgress(currentRow, inputs.filter((input) => input.checked).length, inputs.length);
      }
    }

    updateProgress();
  }

  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(initialiseChecklist);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialiseChecklist, { once: true });
  } else {
    initialiseChecklist();
  }
})();
