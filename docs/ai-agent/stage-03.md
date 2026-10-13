# Stage 3 · Robot Tools + RAG + Memory

## 目标

在 Stage 2 的确定性机器人层之上接回 Agent，并为其补充可靠资料和受控记忆。新增的是 grounded context 与真实 Robot Tool 适配，不改变底层运动规划和安全职责。

## Todo

- [ ] <span data-task-id="s03-t000"></span>让 Mock 与 ROS 2 Adapter 共用同一 Robot Tool 接口和错误协议。
- [ ] <span data-task-id="s03-t001"></span>将状态查询、命名位姿、夹爪和安全停止封装为最小 Tool 集。
- [ ] <span data-task-id="s03-t002"></span>在 Tool 执行前后校验权限、机器人状态、参数与结果。
- [ ] <span data-task-id="s03-t003"></span>整理 UR 手册、ROS 2 接口、SOP 和项目配置的可追溯知识库。
- [ ] <span data-task-id="s03-t004"></span>实现检索、引用和“无证据则不回答”的 RAG 链路。
- [ ] <span data-task-id="s03-t005"></span>定义会话、任务和长期记忆的写入、读取、压缩与过期规则。
- [ ] <span data-task-id="s03-t006"></span>验证知识冲突、过期资料、错误记忆和 Tool 失败时的行为。
- [ ] <span data-task-id="s03-t007"></span>完成 Agent + RAG + Memory + Robot Adapter 的端到端验收。
- [ ] <span data-task-id="s03-t008"></span>在引入手册检索、视觉描述等不可信外部文本前建立 Provider Adapter 与 Observation 信任边界：归一化不同模型协议，标记数据来源，支持时优先使用原生 Tool 消息，但不把供应商特性当成跨模型前提。
- [ ] <span data-task-id="s03-t009"></span>建立单一 Tool Registry，统一 Tool 名称、Schema、权限、是否有副作用、状态前置条件和执行路由，消除 prompt、Pydantic 与 executor 的重复定义。
- [ ] <span data-task-id="s03-t010"></span>实现消息、Observation、RAG 结果和任务记忆的上下文预算、裁剪与摘要策略，确保被裁剪内容可追踪且关键安全事实不会丢失。

## 产出

- v0.3 Grounded Robot Agent。
- 受约束 Robot Tools、ROS 2 Adapter 与统一错误协议。
- 带来源元数据的知识库、检索日志和记忆生命周期说明。
- 成功与失败任务的端到端 trace。

## 完成判据

- Agent 可以在 Mock 与 ROS 2 Adapter 间切换，决策协议保持不变。
- 与手册和接口有关的回答能回溯到来源；资料不足时明确拒答或请求确认。
- 记忆只保存必要事实，具备来源、作用域、更新时间和清理方式。
- 外部文本、模型消息和程序产生的可信 Observation 有明确边界；切换模型供应商不会改变机器人安全语义。
- Tool 失败、知识冲突或状态异常不会被自然语言“解释成成功”。

[上一阶段](stage-02.md) · [返回总览](index.md) · [下一阶段](stage-04.md)
