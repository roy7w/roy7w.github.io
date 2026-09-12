# Agent 项目实践

项目学习不采用“每个 Stage 都重新做一个大项目”，也不强迫所有知识塞进同一个项目。更合适的方式是：

> **一个长期主项目持续演化，配合少量用于隔离概念的阶段微项目。**

## 为什么采用混合制

只做独立项目，会不断重复脚手架、接口和 README，阶段之间难以形成系统积累；只做一个项目，又容易为了展示某项技术而生硬堆功能。

因此分成两条线：

| 类型 | 作用 | 处理方式 |
|---|---|---|
| 长期主项目 | 展示架构演进、工程能力和完整交付 | 从 Stage 1 持续迭代到 Stage 10 |
| 阶段微项目 | 快速验证单一概念，隔离复杂度 | 做到可运行、可测试即可，不追求产品化 |

## 长期主项目：UR7e Embodied Agent

主项目从 Stage 1 的模拟工具闭环开始，持续迭代至 Stage 10。Agent Engineering 与 Robotics Integration 是主线；微调与 AI Infra 是增强能力，Browser / Computer Use 是独立旁支。

| Stage | 能力重点 | 长期项目增量 |
|---|---|---|
| 0 | LLM / Transformer / Agent 全局认知 | 具身架构图，仅认知 ROS2 / MoveIt2 / VLA / RL |
| 1 | 手写 Minimal Agent Loop | V0：mock/simulator robot tools 闭环 |
| 2 | Tool / RAG / Memory | V1：手册引用、故障码、任务上下文与工具联动 |
| 3 | Harness / LangGraph / FastAPI / Docker | V2：仿真状态机、审批、超时与恢复；ROS2 / MoveIt2 入门 |
| 4 | Skills / MCP | V3：Robot MCP / Tool Server 与权限分级 |
| 5 | Multi-Agent | V4：结构化计划，按需拆分与安全检查 |
| 6 | SFT / LoRA / QLoRA | 独立增强实验，不强制接入主项目 |
| 7 | Eval / Observability / Safety | 机械臂任务测试集、指标与真机准入验证 |
| 8 | Inference / vLLM / Infra Basics | V5：决策模型部署与 API/本地对照 |
| 9 | Browser / Computer Use | 独立旁支，不阻塞机器人主线 |
| 10 | Production | UR7e 完整系统、演示、评测与求职作品集 |

## 阶段微项目

以下项目用于快速理解局部机制，完成后可以保留在主仓库的 `labs/` 或 `examples/` 中：

- **Stage 1 · Calculator Agent**：专注 tool calling、消息循环和退出条件。
- **Stage 4 · Reusable Skill Pack**：专注 SKILL、触发条件、脚本和 smoke test。
- **Stage 6 · LoRA / QLoRA Experiment**：专注数据、训练、对比和误差分析。
- **Stage 8 · vLLM Benchmark**：专注吞吐、并发、显存与延迟。
- **Stage 9 · Browser Agent Sandbox**：专注观察、动作、权限和失败恢复。

微项目的代码成熟后可以被主项目吸收；不适合吸收的就作为独立实验保留。

## Stage 1 的具体学习循环

Stage 1 不直接上 LangChain 或 LangGraph。每个知识点按以下循环推进：

1. **先理解协议**：读清 messages、tool schema、tool call 和 observation 如何往返。
2. **写最小实验**：用几十行代码验证一个能力，例如结构化输出或一次工具调用。
3. **合并成 Agent Loop**：逐步组合成约 100–300 行的 Minimal Agent。
4. **主动制造失败**：测试非法参数、未知工具、超时、重复调用和最大步数。
5. **补测试与 trace**：确保能解释模型为何调用工具、工具返回了什么、为何结束。
6. **接入主项目**：把已经验证的循环作为 UR7e Embodied Agent 的第一版内核。
7. **留下阶段快照**：打 `stage-1` tag，记录架构、测试结果、限制和下一步。

因此，Stage 1 的产出既是一个独立可运行的 Minimal Agent，也是长期主项目的第一个版本；两者在这一阶段可以是同一份代码。

## 仓库组织建议

```text
ur7e-embodied-agent/
├── src/                  # 长期主项目
├── tests/                # 自动化测试
├── evals/                # 从 V0 留样例，Stage 7 系统扩充
├── labs/                 # 阶段微项目
│   ├── skill-pack/
│   ├── lora-experiment/
│   └── browser-sandbox/
├── traces/               # 脱敏后的示例执行轨迹
├── docs/                 # 架构与阶段复盘
└── README.md
```

## 每个阶段的完成证据

- 可运行代码和固定依赖；
- 至少一组自动化测试或评测结果；
- 一条脱敏 execution trace；
- 当前架构图与关键取舍；
- 已知失败模式；
- 对应的阶段 tag 或 release。

不要用代码行数判断完成度。以“是否能复现、解释、测试和比较”为准。
