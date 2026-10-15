# UR7e 具身 AI Agent · Stage 0–9

这是一条围绕同一个长期项目持续演进的学习路线：从最小 LLM 调用出发，先用纯 Python Robot Mock 看清 Agent 的数据流，再建立 ROS 2 / MoveIt 2 确定性执行层，最后加入知识、记忆、工作流、安全评测、MCP / Skills 与推理部署。

当前进度：**Stage 1 · Minimal Agent + Robot Mock 已完成并验收（2026-10-15），Stage 2 待开始**。独立硬预算、代码化状态新鲜性、Tool 生命周期、贯穿 HTTP/退避/Tool 的全局 deadline 和模块化收敛均已完成。无 API 回归全部通过，真实模型四项固定验收及 `idle_move` trace 已归档。下一步在已有 `ur7e_bringup` 和 Fake Hardware 资产上，独立建立 ROS 2 / MoveIt 2 确定性机器人能力层。

## 路线原则

1. 每一步都经历“理解概念 → 写最小示例 → 制造失败 → 本地校验 → 保存 Git checkpoint”。
2. 每个 Stage 在上一版本上增加能力，不为学习单个框架另开无关 Demo。
3. LLM 只负责高层意图和 Skill 选择，不能替代运动规划、控制器或硬件安全功能。
4. Stage 1 只用 `MockRobot`；Stage 2 才恢复 ROS 2 Fake Hardware；真机必须经过独立准入。
5. 进度由可运行代码、trace、测试和验收结果证明，而不是由阅读数量证明。
6. 先在当前 Stage 修复进入下一层前必须成立的边界；依赖真实 ROS、RAG 或服务化证据的设计放入对应后续 Stage，不以“未来可能需要”为由提前扩张实现。

## 全局架构

```text
用户自然语言
    ↓
LLM / VLM
    ↓
Agent：目标理解、单步决策、Observation 处理
    ↓
Safety / Approval：权限、状态、参数、动作边界
    ↓
Robot Tools / Skills：受约束、可校验、可追踪
    ↓
ROS 2 / MoveIt 2 / Robot Controller
    ↓
UR7e 与环境
    ↓
状态、执行结果与失败原因反馈给 Agent
```

其中：

- **LLM / Agent**：处理自然语言、选择高层能力、根据 Observation 决定下一步。
- **Robot Tools / Skills**：把开放式模型输出收敛为确定性接口。
- **Safety / Approval**：独立于提示词执行权限、限位、状态与审批检查。
- **ROS 2 / MoveIt 2**：通信、运动规划、轨迹执行与结果反馈。
- **Robot Controller / 硬件安全**：实时控制、设备安全功能和实体急停，不能依赖 LLM。

## 项目框架

```text
ur7e-embodied-agent/
├── agent/          # 决策协议、循环、状态与工作流
├── robot/          # Mock / ROS 2 适配器和确定性执行
├── safety/         # 权限、参数、状态、审批与停止策略
├── rag/            # 手册、SOP 和接口知识检索
├── memory/         # 有生命周期的任务记忆
├── skills/         # 可复用多步能力
├── mcp/            # 标准化能力暴露
├── eval/           # 任务集、指标和回归测试
├── deployment/     # 模型服务与性能基准
└── docs/           # 架构、运行、trace 与失败案例
```

当前仓库仍使用 ROS 2 工作区结构；上图是后续按职责逐步形成的目标框架，不要求在 Stage 1 一次性创建全部目录。

## Stage 总览

| Stage | 目标 | 相对上一阶段的能力增量 | 主要产出 |
| :--- | :--- | :--- | :--- |
| [Stage 0](stage-00.md) | 建立 LLM 与 Agent 技术地图 | 理解模型、消息、Tool、Observation 与系统分层 | 概念图与技术选择说明 |
| [Stage 1](stage-01.md) | Minimal Agent + Robot Mock | 从 LLM API 增加结构化决策、Mock Tool 和有限反馈闭环 | v0.1 Mock Agent |
| [Stage 2](stage-02.md) | ROS 2 / MoveIt 2 / UR7e | 将 Mock 之外的确定性机器人能力独立打通 | v0.2 Robot Control Layer |
| [Stage 3](stage-03.md) | Robot Tools + RAG + Memory | 将 Agent 接入受约束机器人接口、资料和有效上下文 | v0.3 Grounded Robot Agent |
| [Stage 4](stage-04.md) | LangGraph + Backend | 将手写循环升级为可恢复、可审批的任务服务 | v1.0 Embodied Agent Service |
| [Stage 5](stage-05.md) | Skills + MCP | 将已验证能力封装为可复用 Skill 和标准协议 | v1.1 Skills / MCP Server |
| [Stage 6](stage-06.md) | Eval + Safety + Observability | 用任务集、指标和证据链系统验收可靠性 | v1.5 Evaluation Report |
| [Stage 7](stage-07.md) | VLA / 模仿学习（可选） | 条件允许时加入学习型动作策略并保留经典回退 | v2.0 VLA Skill（可选） |
| [Stage 8](stage-08.md) | Inference / AI Infra | 优化决策模型服务、资源与延迟 | v2.5 Deployment Benchmark |
| [Stage 9](stage-09.md) | Production / Portfolio | 整理为可复现、可评测、可展示的工程作品 | Release、Demo 与求职材料 |

## 如何使用 Todo

- 勾选表示已经有实际学习或验证证据，不表示相关主题永远不再复习。
- 子任务只在确实存在独立验证边界时拆分，不为微小语法点增加 checkbox。
- Stage 7 整体为可选；未具备设备、数据或算力时可跳过，不阻塞 Stage 8–9。
- Stage 2 已有部分 ROS 2 Fake Hardware 资产会标记为完成，但仍需完成本阶段剩余验收。

进度保存在当前浏览器。任务保留稳定 ID，路线精简不会主动清除已完成记录。

[项目实践](../projects/index.md) · [Later / Optional](later.md)
