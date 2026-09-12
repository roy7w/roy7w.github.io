# Stage 1 · Minimal Agent + Robot Mock

## 目标与项目增量

沿用 Agent-Learning-Hub 的 Minimal Agent Loop 骨架，不依赖 LangChain / LangGraph。把每个 API 与协议练习立即接入同一个 Robot Mock，交付 **Embodied Agent v0.1**。

## 步骤 1 · LLM API 与 Messages → 建立任务入口

- [ ] 使用一个主流 LLM API 完成多轮对话。 <span data-task-id="s01-t000"></span>
- [ ] 正确维护 system、user、assistant 与 tool 消息。 <span data-task-id="s01-t001"></span>
- [ ] 控制 temperature、max tokens 与超时。 <span data-task-id="s01-t002"></span>
- [ ] 处理认证错误、网络错误、rate limit 与服务端错误。 <span data-task-id="s01-t003"></span>
- [ ] 为瞬时错误加入带退避的有限重试。 <span data-task-id="s01-t004"></span>
- [ ] 记录 request id、token usage、延迟与错误类型。 <span data-task-id="s01-t005"></span>

项目同步：输入“回到 Home 后打开夹爪”，保存 messages，区分模型回复与实际执行事实。

## 步骤 2 · Structured Output → 可校验的高层计划

- [ ] 让模型按 JSON Schema 输出结构化数据。 <span data-task-id="s01-t006"></span>
- [ ] 使用 Pydantic 或等价方案校验输出。 <span data-task-id="s01-t007"></span>
- [ ] 处理缺字段、类型错误和额外字段。 <span data-task-id="s01-t008"></span>
- [ ] 对可修复的非法结构实现一次有限修复。 <span data-task-id="s01-t009"></span>
- [ ] 对不可修复结果明确失败，不静默猜测。 <span data-task-id="s01-t010"></span>
- [ ] 定义包含 skill、命名目标、约束与结束条件的计划 schema。 <span data-task-id="s01-t011"></span>

项目同步：计划只允许选择高层 skill 与白名单目标。LLM 不直接生成底层关节角、伺服命令或未经验证的轨迹。

## 步骤 3 · Robot Mock → 工具执行与状态反馈

- [ ] 实现 Mock get_robot_state / move_joint / move_linear / open_gripper / close_gripper / stop_robot。 <span data-task-id="s01-t012"></span>
- [ ] 为每个工具写清 name、description、parameters 与返回值。 <span data-task-id="s01-t013"></span>
- [ ] 理解工具描述和 schema 如何影响模型选择。 <span data-task-id="s01-t014"></span>
- [ ] 解析模型产生的 tool call 与参数。 <span data-task-id="s01-t015"></span>
- [ ] 执行工具并把 observation 放回消息历史。 <span data-task-id="s01-t016"></span>
- [ ] 处理未知工具、非法参数、空结果与工具异常。 <span data-task-id="s01-t017"></span>
- [ ] 让最终答案明确区分工具事实与模型推断。 <span data-task-id="s01-t018"></span>
- [ ] 用 go_home / move_to_named_pose 高层 skill 封装 Mock move_joint / move_linear，仅向 LLM 暴露前者。 <span data-task-id="s01-t019"></span>

项目同步：低层 Mock 方法仅由确定性适配器调用；记录执行前后状态、单位、目标名称和结果。stop_robot 是软件停止模拟，不代表实体急停。

## 步骤 4 · Agent Loop → 有限、可追踪的闭环

- [ ] 不使用 LangChain / LangGraph，实现完整 while-loop。 <span data-task-id="s01-t020"></span>
- [ ] 加入最大执行步数和总超时。 <span data-task-id="s01-t021"></span>
- [ ] 给每个工具加入独立超时。 <span data-task-id="s01-t022"></span>
- [ ] 捕获异常并返回机器可读错误。 <span data-task-id="s01-t023"></span>
- [ ] 检测完全相同的重复调用。 <span data-task-id="s01-t024"></span>
- [ ] 支持正常完成、失败结束与达到预算结束。 <span data-task-id="s01-t025"></span>
- [ ] 打印或保存完整 execution trace。 <span data-task-id="s01-t026"></span>
- [ ] 对状态不明的运动调用先查询状态，不盲目 retry，以免重复执行。 <span data-task-id="s01-t027"></span>

项目同步：实现 observe → decide → validate → act → observe；注入未知目标、非法参数、异常、timeout 与重复调用。

## 产出与完成判据 · v0.1

- [ ] 发布可运行 Mock Demo、固定依赖、示例 messages、schema 和 trace。 <span data-task-id="s01-t028"></span>
- [ ] 在至少 10 条基础任务中完成至少 8 条，并记录失败而不伪造成功。 <span data-task-id="s01-t029"></span>
- [ ] max steps、timeout、非法参数和未知工具均能稳定结束，且无低层运动接口暴露给 LLM。 <span data-task-id="s01-t030"></span>
- [ ] 能从一次 trace 解释模型决策、参数校验、执行前后状态与退出原因。 <span data-task-id="s01-t031"></span>

下一阶段替换执行适配层，保留高层 schema 与测试用例；本阶段不操作真机。


[← Stage 0](stage-00.md) · [路线总览](index.md) · [Stage 2 →](stage-02.md)
