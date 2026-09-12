# Stage 4 · LangGraph + Backend + 受约束具身 Agent

## 目标与项目增量

把 Agent-Learning-Hub 的 Harness 知识与 LangGraph / Backend 合并为 **v1.0：第一个可写简历的受约束具身 Agent**。承接 DeepSeek 的 4–6 周真机 Demo 时间盒，固定任务边界，完成比扩展场景更优先。

## 步骤 1 · 固定任务 → 可验证成功条件

- [ ] 只选一个场景：固定桌面红蓝方块搬运，或语言引导命名 waypoint。 <span data-task-id="s04-t000"></span>
- [ ] 写明物体、位置、可用技能、动作次数、工作空间与成功判据。 <span data-task-id="s04-t001"></span>
- [ ] 感知未就绪时使用人工确认或固定位置，并明确不具备通用视觉抓取能力。 <span data-task-id="s04-t002"></span>

项目同步：整理正常、歧义、缺物体、不可达与中途停止任务，后续所有图节点都服务这个场景。

## 步骤 2 · LangGraph → 显式控制流程

- [ ] 理解 State / Node / Edge / Conditional Edge，定义类型化任务状态。 <span data-task-id="s04-t003"></span>
- [ ] 实现 Checkpoint / Retry / Interrupt / HITL，区分可重试读取与有副作用运动。 <span data-task-id="s04-t004"></span>
- [ ] 实现 Understand / Plan / Validate / Human Approval / Execute / Recover / Replan 节点。 <span data-task-id="s04-t005"></span>
- [ ] 设置最大重规划次数、总预算和失败终止条件。 <span data-task-id="s04-t006"></span>
- [ ] Checkpoint 恢复后先核对设备状态与已执行动作，不重放已完成运动。 <span data-task-id="s04-t007"></span>

```text
User → Understand → Plan → Validate → Human Approval → Execute → Success?
                         ↑                              │        ├─ Yes → Finish
                         └──── Replan ← Recover ←───────┴────────└─ No
```

每次计划变更、状态失效或恢复后重新执行，都必须重新 Validate 与审批。审批绑定具体计划、目标和有效期。

## 步骤 3 · Backend → 可用的任务服务

- [ ] 使用 FastAPI / Pydantic 定义提交任务、查询状态、批准、取消等 API。 <span data-task-id="s04-t008"></span>
- [ ] 理解 async 与阻塞调用，避免等待模型或 ROS2 时阻塞服务。 <span data-task-id="s04-t009"></span>
- [ ] 用 Session / task id 隔离任务，避免并发控制同一机器人。 <span data-task-id="s04-t010"></span>
- [ ] 先用 SQLite 保存任务与审批记录，理解何时迁移 PostgreSQL。 <span data-task-id="s04-t011"></span>
- [ ] 理解 Redis 的缓存、队列与锁用途，只有明确需求时引入。 <span data-task-id="s04-t012"></span>
- [ ] 加入 logging、错误响应、配置管理与 Docker 可复现启动。 <span data-task-id="s04-t013"></span>

项目同步：从 API 提交任务，查看计划与 robot state，人工批准后再执行；服务重启仍能查询记录，但不能自动恢复运动。

## 产出与完成判据 · v1.0

- [ ] 在同一受约束场景完成自然语言 → 计划 → 校验 → 审批 → 真机执行 → 反馈 Demo。 <span data-task-id="s04-t014"></span>
- [ ] 至少演示一次成功、一次拒绝和一次失败恢复，保留视频、trace 与原因分析。 <span data-task-id="s04-t015"></span>
- [ ] 审批前不运动，重规划不绕过审批，并发请求不争抢控制权。 <span data-task-id="s04-t016"></span>
- [ ] 发布 README、架构图、启动说明与 v1.0 标签，明确真实能力与局限。 <span data-task-id="s04-t017"></span>


[← Stage 3](stage-03.md) · [路线总览](index.md) · [Stage 5 →](stage-05.md)
