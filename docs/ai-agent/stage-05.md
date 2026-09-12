# Stage 5 · Skills + MCP + UR7e Agent

## 目标与项目增量

沿用 Agent-Learning-Hub 的 Skills / MCP 骨架，把已验证能力封装为 **ur7e-mcp-server**，交付 **v1.1**。协议封装复用 v1.0 的 Safety Layer，不另做通用 MCP Demo。

## 步骤 1 · MCP → 标准化机器人能力发现

- [ ] 理解 MCP Client / Server / Tool / Resource / Prompt 的职责。 <span data-task-id="s05-t000"></span>
- [ ] 理解 stdio / HTTP 传输、JSON-RPC 和 Discovery。 <span data-task-id="s05-t001"></span>
- [ ] 为 go_home / move_to_pose / pick / place / get_robot_state 定义服务端 schema。 <span data-task-id="s05-t002"></span>
- [ ] 用 Resource 暴露只读接口说明与设备配置摘要，用 Prompt 提供任务模板。 <span data-task-id="s05-t003"></span>
- [ ] 测试 Client 能发现工具、读取 schema、调用查询，并解释协议错误。 <span data-task-id="s05-t004"></span>
- [ ] 将查询、运动、配置权限分开，服务端独立校验，客户端提示不能替代权限控制。 <span data-task-id="s05-t005"></span>

项目同步：同一任务由原 API 与 MCP Client 发起，比较结果契约与 trace；只有传输改变，机器人动作语义保持一致。

## 步骤 2 · Skills → 复用多步流程

- [ ] 定义 Pick / Place / Inspection / Home / Recovery 的触发条件、输入、步骤与结束条件。 <span data-task-id="s05-t006"></span>
- [ ] 每个 skill 写明所需工具、设备状态、前置条件、失败分支和停止策略。 <span data-task-id="s05-t007"></span>
- [ ] skill 使用命名目标与受控配置，不允许模型临时生成底层控制脚本。 <span data-task-id="s05-t008"></span>
- [ ] 为成功、夹爪失败、目标缺失和路径不可达编写 skill 契约案例。 <span data-task-id="s05-t009"></span>

```text
Pick skill
读取状态 → 校验目标/夹爪 → 生成确定性计划 → Motion Approval Gate
→ 移到预抓取位 → 接近 → 闭合夹爪 → 验证抓取 → 抬升 → 返回结果
失败 → 停止后核对状态 → 提议 Recovery → 重新校验与审批
```

项目同步：展示 skill 内部多步流程；“调用一个工具”不代表它内部只有一个动作。

## 步骤 3 · Motion Approval Gate → 绑定具体动作

- [ ] 将审批绑定计划摘要、目标、约束、当前状态和到期时间。 <span data-task-id="s05-t010"></span>
- [ ] 计划改变、审批过期、设备状态改变或权限不足时拒绝执行。 <span data-task-id="s05-t011"></span>
- [ ] 取消优先于继续执行，服务端不能接受提示词来绕过审批。 <span data-task-id="s05-t012"></span>

## 产出与完成判据 · v1.1

- [ ] 发布 ur7e-mcp-server、Skills 文档、Client 示例与接口测试。 <span data-task-id="s05-t013"></span>
- [ ] 用两个入口复现同一受约束任务，保持安全校验与审批一致。 <span data-task-id="s05-t014"></span>
- [ ] 展示 Pick / Place 的内部步骤与至少一次 Recovery；审批失败时没有运动副作用。 <span data-task-id="s05-t015"></span>


[← Stage 4](stage-04.md) · [路线总览](index.md) · [Stage 6 →](stage-06.md)
