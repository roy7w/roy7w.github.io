# Stage 2 · ROS 2 / MoveIt 2 / UR7e

## 目标

在 Stage 1 的 Agent 协议之外建立独立、确定性的机器人执行层。新增 ROS 2 通信、MoveIt 2 规划和 UR7e 接口，但仍保持“LLM 不直接生成关节角、轨迹和控制指令”的边界。

## Todo

- [x] <span data-task-id="s02-t000"></span>建立 ROS 2 工作区、Python package 与 UR7e bringup 入口。
- [x] <span data-task-id="s02-t001"></span>在 Fake Hardware 中验证 driver、RViz、joint states、controllers 与 trajectory action。
- [x] <span data-task-id="s02-t002"></span>实现本地 bringup 和 `robot_status` 状态查询。
- [ ] <span data-task-id="s02-t003"></span>实现自定义 Action Client，并正确处理目标、反馈、结果、取消和超时。
- [ ] <span data-task-id="s02-t004"></span>接入 MoveIt 2，定义 Home、inspection 和测试 waypoint 等命名目标。
- [ ] <span data-task-id="s02-t005"></span>形成与 Stage 1 Tool 契约一致的 ROS 2 机器人适配器。
- [ ] <span data-task-id="s02-t006"></span>覆盖规划失败、控制器拒绝、通信中断和状态不一致等失败路径。
- [ ] <span data-task-id="s02-t007"></span>完成仿真重复运行验收，并整理真机准入清单。
- [ ] <span data-task-id="s02-t008"></span>把 ROS 2 Action 的 accepted、executing、succeeded、aborted、canceled 和 timeout 映射为统一 Tool 生命周期与错误语义，保留足够证据供后续结果协议演进。

## 产出

- v0.2 Robot Control Layer。
- 可重复启动的 Fake Hardware / MoveIt 2 launch 与命名目标配置。
- ROS 2 适配器、Action Client、状态接口和失败日志。
- 仿真与真机边界说明及真机准入清单。

## 完成判据

- 不依赖 LLM，也能稳定重复执行 `Home → waypoint A → waypoint B → Home`。
- 每次运动都有可追踪的目标、反馈、结果和超时，失败时不会继续盲目执行。
- trace 能区分目标未发送、已接受、执行中和已结束，不能用“调用过 executor”替代“动作已经开始”。
- Mock 与 ROS 2 实现遵循同一高层 Tool 契约，Agent 无需了解控制细节。
- 文档明确区分“代码路径已验证”“仿真已验证”和“真机已验证”。

[上一阶段](stage-01.md) · [返回总览](index.md) · [下一阶段](stage-03.md)
