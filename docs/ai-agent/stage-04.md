# Stage 4 · LangGraph + Backend

## 目标

在 Stage 3 的端到端能力上，将手写循环升级为显式状态图和可调用服务。新增检查点、恢复、人工审批与会话 API，使长任务的状态变化可见、可暂停、可恢复。

## Todo

- [ ] <span data-task-id="s04-t000"></span>选择一个固定多步机器人任务并定义状态、节点、边和终止条件。
- [ ] <span data-task-id="s04-t001"></span>用 LangGraph 表达决策、检索、审批、执行、Observation 与失败分支。
- [ ] <span data-task-id="s04-t002"></span>加入 checkpoint、幂等性和中断后的恢复策略。
- [ ] <span data-task-id="s04-t003"></span>为高风险动作加入 human-in-the-loop 审批与超时处理。
- [ ] <span data-task-id="s04-t004"></span>提供任务创建、状态查询、继续、取消和 trace 查询 API。
- [ ] <span data-task-id="s04-t005"></span>整理配置、密钥、持久化、依赖与容器化运行方式。
- [ ] <span data-task-id="s04-t006"></span>完成正常、拒绝、失败恢复和服务重启后的端到端测试。

## 产出

- v1.0 Embodied Agent Service。
- 可视化状态图、checkpoint 数据和任务 API。
- 审批界面或最小审批入口，以及容器化运行说明。

## 完成判据

- 任一任务都能回答“当前在哪个节点、为什么、下一步是什么”。
- 服务中断后能从安全检查点恢复，不重复执行有副作用的动作。
- 高风险动作未经审批无法进入执行节点，取消和超时能正确终止。
- API 返回的状态、错误与 trace 能和实际机器人执行结果对应。

[上一阶段](stage-03.md) · [返回总览](index.md) · [下一阶段](stage-05.md)
