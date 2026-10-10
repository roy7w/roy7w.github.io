# AI Agent 学习博客

<div class="hero" markdown>

以 **UR7e 具身 AI Agent** 为唯一长期主项目：先用纯 Python Robot Mock 学清 Agent 闭环，再接入 ROS 2 / MoveIt 2，逐步加入知识、记忆、工作流、Skills / MCP、安全评测与推理部署。

[查看 Stage 0–9 路线](ai-agent/index.md){ .md-button .md-button--primary }
[进入项目实践](projects/index.md){ .md-button }

</div>

## 当前进度

当前位于 **Stage 1 · Minimal Agent + Robot Mock**。

已经完成：

- LLM API、多轮消息、system 约束；
- 网络异常、有限重试、退避和请求日志；
- JSON Schema 结构化输出与 Pydantic 校验；
- Mock Robot Tools、计划执行和模块重构；
- Action / Observation 回传与有限 Agent Loop。

接下来补齐循环保护和固定验收任务，再进入 Stage 2 的 ROS 2 / MoveIt 2 确定性执行层。

[查看 Stage 1 详情 →](ai-agent/stage-01.md)

## 路线主轴

- **Stage 0–1：认知与最小闭环**——理解 Agent 的数据流，并在 Mock 环境中证明它可控、可校验、可终止。
- **Stage 2–3：具身执行与可靠上下文**——打通 UR7e 控制层，再接入受约束 Robot Tools、RAG 与 Memory。
- **Stage 4–6：服务化与质量体系**——状态图、Backend、Skills / MCP、Eval、安全和可观测性。
- **Stage 7：学习型策略（可选）**——条件允许时加入 VLA / 模仿学习，并保留经典方法回退。
- **Stage 8–9：推理部署与交付**——比较模型服务性能，最终整理为可复现作品。

这条路线不以框架数量衡量进度。每一步都要留下代码、失败用例、trace 或测试证据，以及对应的 Git checkpoint。

!!! note "进度记录"
    Checkbox 由页面自动保存在当前浏览器。路线使用稳定任务 ID，内容精简后仍尽量保留已经完成的阶段性记录。
