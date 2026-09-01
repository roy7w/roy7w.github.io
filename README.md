# roy7w.github.io

个人技术博客、知识库与求职作品集，使用 MkDocs Material 构建。首个专题是「AI Agent 求职增强版 Learning Todo List」，按 Stage 0–10 组织学习目标、任务、阶段产出与验收标准。

## 本地运行

需要 Python 3.10 或更高版本。

### 使用 uv

```bash
uv venv
uv pip install -r requirements.txt
uv run mkdocs serve
```

### 使用 pip

```bash
python -m venv .venv
# Windows: .venv\Scripts\activate
# macOS / Linux: source .venv/bin/activate
python -m pip install -r requirements.txt
mkdocs serve
```

浏览器打开 `http://127.0.0.1:8000/`。提交前建议执行：

```bash
mkdocs build --strict
```

## 自动部署到 GitHub Pages

推送到 `main` 后，`.github/workflows/deploy.yml` 会构建站点并部署到 GitHub Pages。

首次使用时，如果 Actions 提示 Pages 尚未启用：

1. 打开仓库 `Settings → Pages`。
2. 在 `Build and deployment` 中把 `Source` 设为 `GitHub Actions`。
3. 回到 `Actions`，重新运行失败的工作流。

用户主页仓库部署成功后，站点地址为：<https://roy7w.github.io/>

## 内容结构

```text
docs/
├── index.md
├── ai-agent/
│   ├── index.md
│   └── stage-00.md ... stage-10.md
├── accelerator/
├── robotics/
├── coding/
├── projects/
└── notes/
```

## 日常更新

1. 在 `docs/` 中编辑 Markdown，完成任务后把 `- [ ]` 改为 `- [x]`。
2. 本地运行 `mkdocs serve` 预览。
3. 提交并推送到 `main`，网站会自动更新。
