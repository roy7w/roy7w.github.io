# Stage 6 · Eval + Safety + Observability

## 目标与项目增量

沿用 Agent-Learning-Hub 的 Eval / Safety / Observability 骨架，将前面已有的安全措施系统化，交付 **v1.5**。安全从 Stage 1 开始，本阶段是证据化验收。

## 步骤 1 · Safety → 可测试的拒绝机制

- [ ] 检查 Motion Approval、joint / workspace / velocity / acceleration limits。 <span data-task-id="s06-t000"></span>
- [ ] 验证 collision checking、timeout、stop、e-stop、HITL 与断连行为。 <span data-task-id="s06-t001"></span>
- [ ] 在服务端测试 tool permission、无权限调用和过期审批。 <span data-task-id="s06-t002"></span>
- [ ] 在用户输入、RAG 文档和工具返回中注入 prompt injection，验证不会解除安全约束。 <span data-task-id="s06-t003"></span>
- [ ] 确认 LLM 永远不能直接执行低层运动、shell 控制代码或修改设备安全配置。 <span data-task-id="s06-t004"></span>
- [ ] 区分软件 stop、停止请求确认、实际停止与独立实体急停，记录故障条件。 <span data-task-id="s06-t005"></span>

项目同步：危险请求在 Mock / 仿真中测试拒绝；真机测试遵照实验室 SOP，不以制造碰撞来验证安全。

## 步骤 2 · Eval → 30–50 条真实任务场景

- [ ] 固定 30–50 条来自实际场景的任务，包含正常、歧义、不可达、权限、超时和恢复案例。 <span data-task-id="s06-t006"></span>
- [ ] 为每条任务记录输入、初始状态、约束、预期行为、执行环境、实际结果与人工判定。 <span data-task-id="s06-t007"></span>
- [ ] 记录 task success / planning success / execution success / tool accuracy。 <span data-task-id="s06-t008"></span>
- [ ] 记录 unsafe-command rejection / latency / token cost / recovery success。 <span data-task-id="s06-t009"></span>
- [ ] 固定模型、提示词、软件版本和测试条件；保留开发集与验收集，避免只挑成功样例。 <span data-task-id="s06-t010"></span>

| 指标 | 定义与分母 |
|---|---|
| Task success | 满足任务成功条件数 / 可执行任务尝试数；拒绝案例单独统计 |
| Planning success | 通过合法性与目标检查的计划数 / 规划尝试数 |
| Execution success / failure | 成功 / 失败执行数，各除以实际启动执行数 |
| Tool accuracy | 工具及参数均正确的调用数 / 被评审调用数 |
| Unsafe-command rejection | 正确拒绝的不安全请求数 / 不安全请求数；同时报告正常请求误拒率 |
| Latency / token cost | 按任务记录端到端耗时与 token，报告均值、P50/P95 和价格日期 |
| Recovery success | 恢复达到目标数 / 进入恢复流程的任务数 |

分母为 0 时报告 N/A；报告样本量与失败数，不能把安全拒绝当作执行成功。

## 步骤 3 · Observability → 可重放分析的证据链

- [ ] 保存 user input、plan、tool call、robot state 与 MoveIt result。 <span data-task-id="s06-t011"></span>
- [ ] 保存 failure、recovery、审批、版本、时间戳和统一 task / trace id。 <span data-task-id="s06-t012"></span>
- [ ] 能从失败任务定位到规划、检索、校验、通信或执行层。 <span data-task-id="s06-t013"></span>
- [ ] 对日志脱敏；离线 replay 用 Mock 分析，不能直接重放到真机。 <span data-task-id="s06-t014"></span>

## 产出与完成判据 · v1.5

- [ ] 发布任务集、评测脚本、指标表、失败分类和至少三条完整 trace。 <span data-task-id="s06-t015"></span>
- [ ] 安全测试全部符合预期拒绝与停止行为；未通过的用例阻止真机准入。 <span data-task-id="s06-t016"></span>
- [ ] 所有指标有分母、环境和版本，复测能解释波动及已知局限。 <span data-task-id="s06-t017"></span>

通过后可跳过 Stage 7，直接在 Stage 8 做决策模型推理部署。


[← Stage 5](stage-05.md) · [路线总览](index.md) · [Stage 7 →](stage-07.md)
