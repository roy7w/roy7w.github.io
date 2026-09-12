(function () {
  "use strict";
  const PREFIX = "roy7w-agent-roadmap:v2:";
  const LEGACY = "roy7w-agent-roadmap:v1:";
  const TASKS = window.ROADMAP_TASKS || {};
  const has = (object, key) => Object.prototype.hasOwnProperty.call(object, key);

  function read(key) {
    try {
      const state = JSON.parse(localStorage.getItem(key) || "{}");
      return state && typeof state === "object" && !Array.isArray(state) ? state : {};
    } catch (_) { return {}; }
  }
  function write(key, state) {
    try { localStorage.setItem(key, JSON.stringify(state)); } catch (_) { /* Session remains usable. */ }
  }
  function hashText(value) {
    let hash = 2166136261;
    for (let i = 0; i < value.length; i += 1) {
      hash ^= value.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }
    return (hash >>> 0).toString(36);
  }
  // Migrate identical meanings, never stage numbers. Preserve all legacy data.
  function initialiseState(page) {
    const state = read(PREFIX + page);
    (TASKS[page] || []).forEach(task => {
      if (has(state, task.id) && typeof state[task.id] === "boolean") return;
      const previous = task.legacy.map(source => {
        const old = read(LEGACY + source.page);
        return has(old, source.key) && typeof old[source.key] === "boolean" ? old[source.key] : null;
      }).filter(value => value !== null);
      // Confirmed completed Stage 0 items seed migration; later user choices win.
      state[task.id] = task.default || (previous.length ? previous.some(Boolean) : false);
    });
    write(PREFIX + page, state);
    return state;
  }
  function initialiseChecklist() {
    const article = document.querySelector(".md-content__inner.md-typeset");
    const path = window.location.pathname.replace(/\/index\.html$/, "/").replace(/\.html$/, "");
    const match = path.match(/\/ai-agent\/(archive\/)?(stage-\d{2})\/?$/);
    const overview = /\/ai-agent\/?$/.test(path);
    if (!article || (!match && !overview) || article.dataset.progressReady === "true") return;
    article.dataset.progressReady = "true";
    const archive = Boolean(match && match[1]);
    const page = match ? match[2] : null;
    if (page && !archive && !TASKS[page]) return;
    const states = {};
    Object.keys(TASKS).forEach(id => { states[id] = initialiseState(id); });
    const state = archive ? read(LEGACY + page) : (states[page] || {});
    const inputs = Array.from(article.querySelectorAll('.task-list-item input[type="checkbox"]'));
    inputs.forEach((input, index) => {
      const item = input.closest(".task-list-item");
      const marker = item.querySelector("[data-task-id]");
      const text = item.textContent.replace(/\s+/g, " ").trim();
      const id = archive ? hashText(text + "|" + index) : marker && marker.dataset.taskId;
      if (!id) return;
      input.disabled = false;
      input.checked = has(state, id) ? state[id] === true : input.checked;
      item.classList.toggle("is-complete", input.checked);
      input.addEventListener("change", () => {
        state[id] = input.checked;
        write((archive ? LEGACY : PREFIX) + page, state);
        item.classList.toggle("is-complete", input.checked);
        update();
      });
    });
    const heading = article.querySelector("h1");
    if (!heading) return;
    const panel = document.createElement("section");
    panel.className = "roadmap-progress-panel";
    panel.setAttribute("aria-label", "学习进度");
    function row(label) {
      const element = document.createElement("div");
      element.className = "roadmap-progress-row";
      element.innerHTML = '<div class="roadmap-progress-heading"><span class="roadmap-progress-label"></span><span class="roadmap-progress-value"></span></div><div class="roadmap-progress-track" role="progressbar" aria-valuemin="0"><div class="roadmap-progress-fill"></div></div>';
      element.querySelector(".roadmap-progress-label").textContent = label;
      element.querySelector("[role=progressbar]").setAttribute("aria-label", label);
      panel.appendChild(element);
      return element;
    }
    const overall = archive ? null : row("主线总进度（不含可选任务）");
    const current = page ? row(archive ? "旧版本页进度（不计入主线）" : "本阶段（含本页可选任务）") : null;
    const note = document.createElement("p");
    note.className = "roadmap-progress-note";
    note.textContent = "进度保存在当前浏览器，可随时勾选或取消；旧版数据保留，不跨设备同步。";
    panel.appendChild(note);
    heading.insertAdjacentElement("afterend", panel);
    function set(row, done, total) {
      const percent = total ? Math.round(done / total * 100) : 0;
      row.querySelector(".roadmap-progress-value").textContent = `${done} / ${total} (${percent}%)`;
      const track = row.querySelector("[role=progressbar]");
      track.setAttribute("aria-valuemax", String(total));
      track.setAttribute("aria-valuenow", String(done));
      row.querySelector(".roadmap-progress-fill").style.width = percent + "%";
    }
    function update() {
      if (overall) {
        let total = 0, done = 0;
        Object.entries(TASKS).forEach(([id, tasks]) => tasks.forEach(task => {
          if (!task.optional) { total += 1; if (states[id][task.id] === true) done += 1; }
        }));
        set(overall, done, total);
      }
      if (current) set(current, inputs.filter(input => input.checked).length, inputs.length);
    }
    update();
  }
  if (typeof document$ !== "undefined" && document$.subscribe) document$.subscribe(initialiseChecklist);
  else if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initialiseChecklist, { once: true });
  else initialiseChecklist();
})();
