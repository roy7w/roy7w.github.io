# Stage 1 · Minimal Agent + Robot Mock

## 目标

在 Stage 0 的概念基础上，用纯 Python 把 LLM 请求逐步扩展为可观察、可校验、有边界的最小 Agent。机器人侧只使用 `MockRobot`，先看清决策闭环，不引入 ROS 2 运行时复杂度。

## Todo

- [x] <span data-task-id="s01-t000"></span>完成最小 LLM API 调用、多轮消息与 system 约束。
- [x] <span data-task-id="s01-t003"></span>加入网络错误分类、有限重试、退避和请求日志。
- [x] <span data-task-id="s01-t006"></span>用 JSON Schema 获得机器人规划的结构化输出。
- [x] <span data-task-id="s01-t007"></span>用 Pydantic 完成字段与跨字段校验，并拒绝非法规划。
- [x] <span data-task-id="s01-t012"></span>实现受约束 Tool 与 `MockRobot` 状态变化。
- [x] <span data-task-id="s01-t019"></span>拆分模型、客户端、规划器、Tool 和示例入口的职责。
- [x] <span data-task-id="s01-t016"></span>定义 `AgentDecision`，区分 Action 与最终回答。
- [x] <span data-task-id="s01-t020"></span>将 Tool 执行结果作为 Observation 回传，完成有限 Agent Loop。
- [ ] <span data-task-id="s01-t021"></span>补齐 `idle/busy`、总超时、Tool 超时、重复调用检测和统一错误协议。
- [ ] <span data-task-id="s01-t029"></span>完成固定验收任务、失败用例与可复现 trace。

## 产出

- 可运行的 v0.1 Mock Agent。
- 决策、规划、Tool 输入输出和 Observation 的数据模型。
- 从请求到终止的完整 trace，以及对应的数据流说明。
- 每个阶段性进展的 Git checkpoint。

## 完成判据

- 固定任务可以完成“查状态 → 移动到 inspection → 再查状态 → 结束”。
- 非法 Tool、参数、状态或模型输出会被确定性代码拒绝，并安全终止或修复。
- 循环受最大步数、调用次数、超时和重复动作约束，不会无限运行。
- 能逐层解释 payload、HTTP 响应、JSON、Pydantic 对象、Action 与 Observation 的变化。
- 验收全程不依赖 ROS 2 和真实机械臂。

[上一阶段](stage-00.md) · [返回总览](index.md) · [下一阶段](stage-02.md)
