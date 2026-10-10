# UR7e 具身 AI Agent · 项目实践

所有学习围绕同一个项目连续演进。Stage 1 先把 Agent 逻辑放在 `MockRobot` 上验证；Stage 2 才恢复已有 ROS 2 资产；后续能力都要复用前一阶段的接口和验收证据。

## 当前代码基线

工作区已经具备两部分资产：

- **Agent 学习主线**：从 `01_llm_api.py` 到 `11_bounded_agent_loop.py`，以及拆分后的模型、LLM Client、Agent、Tools 和 Mock Robot 模块。
- **ROS 2 先期资产**：`ur7e_bringup`、Fake Hardware 启动、状态查询、joint states、controllers 和 trajectory action 验证结果。

两条线暂不提前耦合。Stage 1 完成循环保护和固定验收后，Stage 2 先独立补齐确定性机器人控制；Stage 3 再通过统一 Tool 契约连接 Agent 与 ROS 2 Adapter。

## 版本路线

| Stage | 新增能力 | 版本产出 |
| :--- | :--- | :--- |
| [Stage 0](../ai-agent/stage-00.md) | LLM、Agent 与具身系统边界 | 概念图与技术选择说明 |
| [Stage 1](../ai-agent/stage-01.md) | 结构化决策、Mock Tools、Observation 与有限循环 | v0.1 Mock Agent |
| [Stage 2](../ai-agent/stage-02.md) | ROS 2、MoveIt 2 与 UR7e 确定性执行 | v0.2 Robot Control Layer |
| [Stage 3](../ai-agent/stage-03.md) | Robot Adapter、RAG 与 Memory | v0.3 Grounded Robot Agent |
| [Stage 4](../ai-agent/stage-04.md) | 状态图、恢复、审批与 Backend | v1.0 Embodied Agent Service |
| [Stage 5](../ai-agent/stage-05.md) | 可复用 Skills 与 MCP | v1.1 Skills / MCP Server |
| [Stage 6](../ai-agent/stage-06.md) | Eval、安全矩阵与可观测性 | v1.5 Evaluation Report |
| [Stage 7](../ai-agent/stage-07.md) | VLA / 模仿学习 Skill（可选） | v2.0 VLA Skill |
| [Stage 8](../ai-agent/stage-08.md) | 本地推理、性能与资源治理 | v2.5 Deployment Benchmark |
| [Stage 9](../ai-agent/stage-09.md) | 发布、复现与项目表达 | Release、Demo 与作品集 |

## 推进方式

1. 先理解当前步骤的输入、输出、状态变化和失败语义。
2. 在最小环境中实现并主动制造错误，再接入主流程。
3. 用代码、测试、trace 或运行记录证明完成，不用“看过”替代“验证过”。
4. 更新数据流和边界说明，保存 Git checkpoint。
5. 达到当前 Stage 的完成判据后，再引入下一层复杂度。

## 不变的工程边界

- LLM 负责理解目标和选择高层 Skill，不生成底层关节角或轨迹。
- Robot Tool、ROS 2 / MoveIt 2、控制器和硬件安全各自承担确定性职责。
- Mock、仿真和真机的验证结果必须明确区分。
- 高风险动作必须有状态、权限、参数、审批和停止保护。
- 错误、拒绝和超时是正式协议的一部分，不能用自然语言掩盖。

全局架构与目标目录只在[路线总览](../ai-agent/index.md)维护；各 Stage 页面只描述该阶段相对上一阶段增加什么、做什么以及如何验收。
