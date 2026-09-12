# AI Agent 求职增强版 Learning Todo List

这是一条以求职作品为导向的学习路线。它借鉴分 Stage、明确目标与 checkbox 的组织方式，但内容围绕个人能力补齐重新设计：先理解并手写核心循环，再逐步加入工程化、协议、训练、评测、推理与交互能力。

## 怎么使用

1. 按依赖顺序推进，不横向收集框架。
2. 每个 Stage 只深入一个主工具，其余先知道定位。
3. checkbox 代表可验证的能力，不代表“看过文章”。
4. 完成阶段产出并满足完成判据后再进入下一阶段。
5. 已有 LLM 应用基础时，可从 Stage 2 或 Stage 3 开始，但先用完成判据自测。

## Roadmap

- [ ] [Stage 0 · LLM & Agent 全局认知](stage-00.md)
- [ ] [Stage 1 · Minimal Agent Loop](stage-01.md)
- [ ] [Stage 2 · Tool / RAG / Memory](stage-02.md)
- [ ] [Stage 3 · Agent Harness + LangGraph + Backend](stage-03.md)
- [ ] [Stage 4 · Skills + MCP](stage-04.md)
- [ ] [Stage 5 · Multi-Agent](stage-05.md)
- [ ] [Stage 6 · SFT + LoRA + QLoRA](stage-06.md)
- [ ] [Stage 7 · Eval + Observability + Safety](stage-07.md)
- [ ] [Stage 8 · Inference + vLLM + Infra Basics](stage-08.md)
- [ ] [Stage 9 · Browser / Computer Use](stage-09.md)
- [ ] [Stage 10 · Production Project](stage-10.md)

## 长期主项目：UR7e 具身 Agent

沿用 Agent-Learning-Hub 式分 Stage TodoList，以 **UR7e Embodied Agent / 具身智能机械臂 Agent** 贯穿学习全过程。Agent 学习服务于具身场景，运动控制背景用于机器人集成，AI Infra 作为第二技能栈。从 Stage 1 开始逐步增加能力，Stage 10 完成交付。

```text
Stage 0：架构认知
  ↓
V0 (Stage 1)：自然语言 → 模拟工具 → observation
  ↓
V1 (Stage 2)：机械臂手册 RAG + 控制 Tool + Memory
  ↓
V2 (Stage 3)：plan → validate → execute → observe → recover
  ↓
V3 (Stage 4)：Skills + Robot MCP / Tool Server
  ↓
V4 (Stage 5)：按需协作 + 结构化计划 + 安全检查
  ↓
Stage 7：Eval / Observability / Safety 质量门槛
  ↓
V5 (Stage 8)：本地/服务器决策模型 + 延迟/成本对照
  ↓
Production (Stage 10)：UR7e 真实或高保真仿真闭环

Stage 6：独立微调实验 ── 满足数据与效果条件后按需接入
Stage 9：Browser / Computer Use ── 独立旁支
```

## 主线 vs 增强线

- **主线：Agent Engineering + Robotics Integration**。Stage 0–3 先掌握工具调用、状态查询、模拟控制与任务规划，随后补协议、评测和部署；安全边界从最小工具阶段建立。
- **增强线：Fine-tuning + AI Infra**。小型微调实验独立完成；推理部署服务于主项目，避免一开始投入复杂分布式训练。
- **旁支：Browser / Computer Use**。保留通用 Agent 能力，可用于设备文档检索和网页流程自动化，与 UR7e 执行链解耦。
- **高级可选：VLA / RL / TensorRT / Jetson**。以及 VLM 感知、Whisper 语音、行为克隆、ONNX Runtime；第一轮不要求完成，不纳入新增 checkbox。

## Roadmap 总览表

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

## 进度与完成方式

旧 Todo 文字、顺序和浏览器存储标识保留；新增里程碑放在各页原完成判据之后，避免旧进度失配。通用工具示例仍可作为微实验，阶段主产出以 UR7e 里程碑为准。新增任务初始未勾选，因此完成数量不丢失，但总任务数增加后百分比可能下降。

阶段是否完成以可复现产出与证据为准；对照实验允许负结果，不为勾选而宣称微调或 Multi-Agent 一定更好。每阶段新增 1–3 项聚合 Todo，扩展内容暂不计入必做。

[查看项目实践与仓库组织](../projects/index.md)

!!! tip "学习边界"
    第一轮只选一个主要框架和一套机器人接口。Stage 1–3 优先模拟/仿真；真机接入取决于实验室条件与安全验证，不能用模型输出替代底层控制和设备安全措施。
