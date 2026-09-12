# Stage 9 · Production / Portfolio / 求职

## 目标与项目组合

沿用 Agent-Learning-Hub 的 Ship 思路，完成 **1+1 求职项目组合**：核心 **UR7e Embodied AI Agent**，增强 **Embodied AI Inference Optimization**。第二个可作为主项目性能优化子项目，不要求新建独立仓库。

## 步骤 1 · 整理工程 → 可复现交付

- [ ] 建议核心项目命名 ur7e-embodied-agent，按职责组织现有代码。 <span data-task-id="s09-t000"></span>
- [ ] 固定依赖、环境变量示例、模型与硬件版本，提供 Mock 和真机启动路径。 <span data-task-id="s09-t001"></span>
- [ ] 提供测试、评测、部署与日志说明，移除凭证和私人数据。 <span data-task-id="s09-t002"></span>
- [ ] 按 v0.1 → v0.2 → v0.3 → v1.0 → v1.1 → v1.5 → 可选 v2.0 → v2.5 整理 tag 和演进记录。 <span data-task-id="s09-t003"></span>

```text
ur7e-embodied-agent/
├── agent/
├── robot/
├── mcp/
├── skills/
├── rag/
├── safety/
├── eval/
├── deployment/
└── docs/
```

这是机器人项目的建议结构；当前个人技术博客继续使用既有仓库，不因路线重构另建博客。

## 步骤 2 · README → 面向陌生读者说明能力

- [ ] 写明 Problem / Architecture / Demo / Safety / Agent Design。 <span data-task-id="s09-t004"></span>
- [ ] 写明 ROS2 / MCP / Evaluation / Failure Cases / Latency / Deployment / Known Limitations。 <span data-task-id="s09-t005"></span>
- [ ] 提供成功任务、安全拒绝与失败恢复视频，注明真机或仿真条件。 <span data-task-id="s09-t006"></span>
- [ ] 展示 Task success、Planning success、Execution failure、Average latency、Unsafe-command rejection 与 Recovery success。 <span data-task-id="s09-t007"></span>
- [ ] 复用 Stage 6 指标定义，附样本量、版本、环境、原始结果与复现入口。 <span data-task-id="s09-t008"></span>

项目同步：让读者从一个任务输入追到高层计划、审批、MoveIt2 执行与反馈，并看到失败是如何发现和处理的。

## 步骤 3 · Portfolio → 1+1 项目叙事

- [ ] 核心项目说明 LLM/Agent 与真实物理系统的工程连接、约束、规划和失败恢复。 <span data-task-id="s09-t009"></span>
- [ ] 优化子项目说明部署约束、测量方法、优化前后差异与质量损失。 <span data-task-id="s09-t010"></span>
- [ ] 用真实指标写简历，不把预期收益、仿真结果或未完成 VLA 写成真机成果。 <span data-task-id="s09-t011"></span>
- [ ] 准备架构取舍、为什么不用 Multi-Agent、何时用 VLA、如何防止危险动作等面试回答。 <span data-task-id="s09-t012"></span>
- [ ] 由另一位读者按 README 从干净环境跑通 Mock Demo，并记录真机所需条件。 <span data-task-id="s09-t013"></span>

## 完成判据

- [ ] 项目可演示、可复现、可评测；失败案例与已知局限公开可查。 <span data-task-id="s09-t014"></span>
- [ ] 博客路线、项目 README、Demo 和简历指标一致，并链接到实际发布的版本。 <span data-task-id="s09-t015"></span>
- [ ] 核心具身 Agent + 推理优化形成完整作品组合，再评估是否进入 Later。 <span data-task-id="s09-t016"></span>

通用 Agent 项目暂不做，后续有余力再补；Multi-Agent / Browser 也保持 Later，不阻塞当前交付。


[← Stage 8](stage-08.md) · [路线总览](index.md) · [Later / Optional →](later.md)
