# Stage 1 · Minimal Agent + Robot Mock

## 目标

完成状态：**已完成并验收（2026-10-15）**。模块化后的 `qwen3.8-flash-next` 四项固定验收全部通过，已归档完整 JSON trace。

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
- [x] <span data-task-id="s01-t030"></span>把 `max_llm_requests`、`max_decision_rounds`、`max_tool_calls`、任务 deadline 和有限输出修复设为彼此独立的硬预算，并向模型提供剩余 Tool 预算；预算值按固定任务复杂度校准，不凭经验直接放宽。
- [x] <span data-task-id="s01-t031"></span>把状态新鲜性写成执行前置条件：会改变机器人状态的 Tool 只能在成功且足够新的 `get_robot_state` Observation 之后执行，不能只依赖 system prompt。
- [x] <span data-task-id="s01-t032"></span>修正 Tool 生命周期和 timeout 语义，区分“未分发、已进入 executor、Tool 已开始、Tool 已完成”以及动作开始前超时和 Tool 返回后任务超时；定义执行中超时契约，真实 ROS 2 Action 映射在 Stage 2 实现。
- [x] <span data-task-id="s01-t033"></span>让全局 deadline 贯穿 LLM 请求、重试退避和 Tool 调用；注入可控时钟，确定性验证请求前、HTTP 返回后、退避前后、Tool 开始前及返回后的超时检查。
- [x] <span data-task-id="s01-t034"></span>补充 skill-target-Schema-执行路由一致性测试，并让 `MockRobot` 通过构造参数设置合法初始状态，避免测试直接改内部字段。
- [x] <span data-task-id="s01-t035"></span>将新循环收敛进可复用 Agent 模块，运行无 API 回归与固定真实模型验收，并补齐 `idle_move` trace 归档。
- [x] <span data-task-id="s01-t036"></span>在模块化时将 `ToolCall` 作为单步调用的规范名称；如暂时保留 `PlanStep`，只把它作为兼容别名，避免两个名称长期并列演化。

## 产出

- 可运行的 v0.1 Mock Agent：`ur7e_agent/agent_loop.py` 为核心，`11` 为终端入口，`16` 与 `17` 直接复用同一循环。
- 正式单步调用模型 `ToolCall`，以及旧架构兼容别名 `PlanStep = ToolCall`。
- 决策、规划、Tool 输入输出和 Observation 的数据模型。
- 从请求到终止的完整 trace，以及对应的数据流说明。
- 无 API 回归：`16` 的 18 条循环场景、`21` 的 6 条 HTTP deadline 场景、`22` 的 5 组契约一致性测试、`23` 的 6 组 Mock 初始化测试。
- 2026-10-15 真实模型验收：`idle_move`、`status_only`、`busy_no_move`、`reject_joint_control` 全部通过；`idle_move` 为 4 次决策、3 次 Tool 调用。JSON 保存在项目的 `test/stage1_traces/`。
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
    同步 Mock 不提供异步 Action 执行状态；`during_execution` 在本阶段完成数据契约和示例验证，实际执行中超时、取消和恢复在 Stage 2 实现。`requests` timeout 为协作式限制，不是严格的整次请求墙钟上限；客户端收缩 connect/read timeout，并在返回后检查 deadline。

    本阶段冻结当前 `AgentRunResult`，不提前实现完整 `TaskSpec`、结果协议 v2、通用 claims/evidence、Tool Registry 或完整 SafetyGate。这些设计需要 ROS 2 Adapter、RAG 和真实失败样本提供证据，已分别排入 Stage 3、Stage 4 和 Stage 6。

[上一阶段](stage-00.md) · [返回总览](index.md) · [下一阶段](stage-02.md)
