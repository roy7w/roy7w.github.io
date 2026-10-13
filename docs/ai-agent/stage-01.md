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
- [x] <span data-task-id="s01-t021"></span>补齐 `idle/busy`、总超时、Tool 超时、重复调用检测和统一错误协议。
- [x] <span data-task-id="s01-t029"></span>完成固定验收任务、失败用例与可复现 trace。
- [ ] <span data-task-id="s01-t030"></span>把 `max_llm_requests`、`max_decision_rounds`、`max_tool_calls`、任务 deadline 和有限输出修复设为彼此独立的硬预算，并向模型提供剩余 Tool 预算；预算值按固定任务复杂度校准，不凭经验直接放宽。
- [ ] <span data-task-id="s01-t031"></span>把状态新鲜性写成执行前置条件：会改变机器人状态的 Tool 只能在成功且足够新的 `get_robot_state` Observation 之后执行，不能只依赖 system prompt。
- [ ] <span data-task-id="s01-t032"></span>修正 Tool 生命周期和 timeout 语义，区分“未分发、已进入 executor、Tool 已开始、Tool 已完成”以及执行前超时、执行中超时和 Tool 返回后任务超时。
- [ ] <span data-task-id="s01-t033"></span>让全局 deadline 贯穿 LLM 请求、重试退避和 Tool 调用；注入可控时钟，确定性测试 LLM 前、Tool 分发前和 Tool 执行中的超时路径。
- [ ] <span data-task-id="s01-t034"></span>补充 skill-target-Schema-执行路由一致性测试，并让 `MockRobot` 通过构造参数设置合法初始状态，避免测试直接改内部字段。
- [ ] <span data-task-id="s01-t035"></span>将新循环收敛进可复用 Agent 模块，运行无 API 回归与固定真实模型验收，并补齐 `idle_move` trace 归档。
- [ ] <span data-task-id="s01-t036"></span>在模块化时将 `ToolCall` 作为单步调用的规范名称；如暂时保留 `PlanStep`，只把它作为兼容别名，避免两个名称长期并列演化。

## 产出

- 可运行的 v0.1 Mock Agent。
- 决策、规划、Tool 输入输出和 Observation 的数据模型。
- 从请求到终止的完整 trace，以及对应的数据流说明。
- 每个阶段性进展的 Git checkpoint。

## 完成判据

- 固定任务可以完成“查状态 → 移动到 inspection → 再查状态 → 结束”。
- 非法 Tool、参数、状态或模型输出会被确定性代码拒绝，并安全终止或修复。
- 循环受最大步数、调用次数、超时和重复动作约束，不会无限运行。
- 运行 trace 能准确说明 Tool 是否进入 executor、是否真正开始和如何结束；预分发超时不能被记录成已经执行。
- 改变状态的 Tool 无法绕过代码中的状态新鲜性检查，且所有修复、重试和退避都受同一任务 deadline 与独立预算约束。
- 能逐层解释 payload、HTTP 响应、JSON、Pydantic 对象、Action 与 Observation 的变化。
- 验收全程不依赖 ROS 2 和真实机械臂。

!!! note "Stage 1 范围边界"
    本阶段冻结当前 `AgentRunResult`，不提前实现完整 `TaskSpec`、结果协议 v2、通用 claims/evidence、Tool Registry 或完整 SafetyGate。这些设计需要 ROS 2 Adapter、RAG 和真实失败样本提供证据，已分别排入 Stage 3、Stage 4 和 Stage 6。

[上一阶段](stage-00.md) · [返回总览](index.md) · [下一阶段](stage-02.md)
