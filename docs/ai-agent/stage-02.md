# Stage 2 · ROS2 / MoveIt2 / UR7e 控制基础

## 目标与项目增量

先打通独立于 LLM 的真机控制链路，交付 **v0.2**。参考 DeepSeek 的“先让代码稳定控制机器人”安排，预留约 1–2 周作初始时间盒；是否通过以验收证据为准。

## 步骤 1 · ROS2 基础 → 最小控制工作区

- [ ] 理解 Node / Topic / Service / Action 的职责与使用场景。 <span data-task-id="s02-t000"></span>
- [ ] 创建 Workspace / Package，能构建、source 环境并启动节点。 <span data-task-id="s02-t001"></span>
- [ ] 用 Topic 观察状态，用 Service 请求短操作，用 Action 跟踪长时间运动与取消。 <span data-task-id="s02-t002"></span>
- [ ] 编写 Python 节点，输出 Joint State、时间戳、连接状态与错误。 <span data-task-id="s02-t003"></span>

项目同步：建立 robot/ 适配层；先用 fake hardware 或仿真检查通信，随后在实验室条件满足后接真机。

## 步骤 2 · UR7e 连接 → 可验证的设备状态

- [ ] 记录 UR7e 型号、PolyScope 版本、控制器与网络配置。 <span data-task-id="s02-t004"></span>
- [ ] 对照官方支持表选择 Ubuntu / ROS2 / Universal Robots ROS2 Driver 组合，固定版本。 <span data-task-id="s02-t005"></span>
- [ ] 按所用 driver 的官方指南完成机器人端配置、网络连通与连接检查。 <span data-task-id="s02-t006"></span>
- [ ] 在 RViz 查看机器人模型与 Joint State，核对实际姿态、坐标系和单位。 <span data-task-id="s02-t007"></span>
- [ ] 检查末端工具、payload、TCP 与标定参数，保存实验室设置记录。 <span data-task-id="s02-t008"></span>

项目同步：提交连接 SOP 和状态截图，不能只凭“驱动进程启动”认定机器人可执行。

## 步骤 3 · MoveIt2 → 确定性运动

- [ ] 理解 Planning Scene、Joint space、Cartesian path、Collision 与 End Effector。 <span data-task-id="s02-t009"></span>
- [ ] 配置桌面、障碍物、夹爪及工作空间边界，核对碰撞模型。 <span data-task-id="s02-t010"></span>
- [ ] 完成 Joint motion 与 Cartesian motion 的规划和执行，检查返回结果与轨迹覆盖情况。 <span data-task-id="s02-t011"></span>
- [ ] 用 Python / ROS2 封装 Home、Waypoint A、Waypoint B 命名目标。 <span data-task-id="s02-t012"></span>
- [ ] 验证规划失败、目标不可达、连接中断、取消与软件停止的处理。 <span data-task-id="s02-t013"></span>

项目同步：以低速、受监督方式执行 Home → Waypoint A → Waypoint B → Home；LLM 不参与这一链路。

## 步骤 4 · 安全分层 → 真机准入

```text
LLM → Task/Skill → Safety Layer → MoveIt2 → Robot Controller → UR7e
                      ↑ 人工审批 / 限位 / 状态检查
实体急停与设备安全功能：独立于 LLM、网络和应用层运行
```

- [ ] 在应用外配置并核验 joint / workspace / velocity / acceleration limits 与设备安全功能。 <span data-task-id="s02-t014"></span>
- [ ] 确认真机周边净空、操作者、实体急停位置、恢复流程和实验室 SOP。 <span data-task-id="s02-t015"></span>
- [ ] 验证人工审批、取消、异常停机与断连后禁止自动续动。 <span data-task-id="s02-t016"></span>

## 产出与完成判据 · v0.2

- [ ] 保存版本清单、启动命令、配置、控制脚本与真实执行日志。 <span data-task-id="s02-t017"></span>
- [ ] 连续至少 5 次稳定执行 Home → A → B → Home，逐次记录规划和执行结果。 <span data-task-id="s02-t018"></span>
- [ ] 故障时不继续后续 waypoint，必须确认状态与重新准入。 <span data-task-id="s02-t019"></span>

只有仿真条件时可完成仿真里程碑，报告中明确“真机待验证”，不能把仿真成功写成真机完成。


[← Stage 1](stage-01.md) · [路线总览](index.md) · [Stage 3 →](stage-03.md)
