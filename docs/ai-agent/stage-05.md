# Stage 5 · Skills + MCP

## 目标

在 Stage 4 的稳定服务上，将已验证能力封装为可复用 Skill，并通过 MCP 暴露标准化 Tool、Resource 与 Prompt。新增的是复用与互操作，不把尚未验证的底层接口包装成“智能能力”。

## Todo

- [ ] <span data-task-id="s05-t000"></span>明确 Skill、Tool、Resource、Prompt、Client 与 Server 的边界。
- [ ] <span data-task-id="s05-t001"></span>挑选已通过验收的任务，定义 Skill 输入、输出、前置条件和失败语义。
- [ ] <span data-task-id="s05-t002"></span>实现最小 MCP Server，暴露只读状态 Resource 和低风险 Tool。
- [ ] <span data-task-id="s05-t003"></span>逐步接入需要审批的动作 Tool，并保留权限与安全检查。
- [ ] <span data-task-id="s05-t004"></span>为 Skill 和 MCP 接口加入版本、超时、取消、幂等与审计字段。
- [ ] <span data-task-id="s05-t005"></span>用至少两个 Client 验证发现、调用、错误处理和兼容性。
- [ ] <span data-task-id="s05-t006"></span>完成断连、越权、错误参数和重复请求测试。

## 产出

- v1.1 Skills / MCP Server。
- 一组有清晰契约的机器人 Skills。
- MCP Tool / Resource / Prompt 清单、权限模型和调用示例。

## 完成判据

- Client 可以发现并调用能力，但无法绕过原有安全与审批边界。
- 每个 Skill 的成功、失败、超时和取消语义清晰且可测试。
- 更换 Client 不需要重写机器人控制层。
- MCP 断连或重复请求不会造成不可控的重复运动。

[上一阶段](stage-04.md) · [返回总览](index.md) · [下一阶段](stage-06.md)
