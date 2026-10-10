# Stage 6 · Eval + Safety + Observability

## 目标

在 Stage 5 的可复用系统上建立持续评测、安全矩阵和完整证据链。新增的是可量化的可靠性结论，而不是继续堆叠功能。

## Todo

- [ ] <span data-task-id="s06-t000"></span>建立覆盖正常、歧义、非法、超时和恢复场景的版本化任务集。
- [ ] <span data-task-id="s06-t001"></span>定义任务成功率、规划合法率、Tool 成功率、延迟、token 与恢复率等指标。
- [ ] <span data-task-id="s06-t002"></span>建立权限、状态、动作边界、审批、停止与真机准入的安全矩阵。
- [ ] <span data-task-id="s06-t003"></span>测试提示注入、恶意资料、越权调用和上下文污染。
- [ ] <span data-task-id="s06-t004"></span>统一 request、decision、tool、robot 与 task 的 trace id 和结构化日志。
- [ ] <span data-task-id="s06-t005"></span>实现 trace 回放、敏感信息处理和失败样本归档。
- [ ] <span data-task-id="s06-t006"></span>将关键用例加入自动回归并生成版本对比报告。

## 产出

- v1.5 Evaluation Report。
- 版本化任务集、自动回归脚本、安全矩阵与可查询 trace。
- 一份包含基线、失败分类、改进前后对比和剩余风险的报告。

## 完成判据

- 每个核心结论都有任务、指标、日志或视频证据支持。
- 任一次 Agent 决策都能追溯到输入、模型输出、校验、Tool 和机器人结果。
- 安全测试证明越权或恶意输入不能绕过确定性控制边界。
- 新版本可以和基线自动比较，并明确发现退化。

[上一阶段](stage-05.md) · [返回总览](index.md) · [下一阶段](stage-07.md)
