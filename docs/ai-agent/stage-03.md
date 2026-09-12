# Stage 3 · Robot Tools + RAG + Memory

## 目标与项目增量

把 Agent-Learning-Hub 的 Tool / RAG / Memory 知识落在同一套机器人接口和资料上，交付 **v0.3**。沿用 v0.2 的控制程序，不另做通用 RAG Agent。

## 步骤 1 · Robot Tools → 受约束接口

- [ ] 封装 get_robot_state / go_home / move_to_pose / execute_waypoints / open_gripper / close_gripper / emergency_stop。 <span data-task-id="s03-t000"></span>
- [ ] 为每个工具定义 schema、单位、坐标系、前置条件、timeout、error code 和结果状态。 <span data-task-id="s03-t001"></span>
- [ ] 在确定性 Safety Layer 校验 workspace / joint / velocity limits，拒绝不可达或越界目标。 <span data-task-id="s03-t002"></span>
- [ ] 将 move_to_pose / execute_waypoints 的模型输入限制为批准的目标或路线 ID，具体轨迹由代码与 MoveIt2 生成。 <span data-task-id="s03-t003"></span>
- [ ] 将执行前后 robot state、MoveIt2 result 与错误码写入结构化 observation。 <span data-task-id="s03-t004"></span>
- [ ] 验证重复请求、超时、部分执行和断连，禁止未知状态下自动重发运动。 <span data-task-id="s03-t005"></span>

项目同步：实现 Mock / ROS2 两个适配器共享的接口契约。名为 emergency_stop 的软件接口只能请求停止，不能替代独立硬件急停；在文档中明确语义与失效条件。

## 步骤 2 · RAG → 有出处的机器人知识

- [ ] 收集 UR7e manual、ROS2 driver docs、MoveIt2 docs、实验室 SOP、安全规范和接口文档。 <span data-task-id="s03-t006"></span>
- [ ] 给资料记录版本、来源、页码或章节、适用设备与更新时间。 <span data-task-id="s03-t007"></span>
- [ ] 学习 chunking，并比较按章节与固定长度切分对故障码和 SOP 检索的影响。 <span data-task-id="s03-t008"></span>
- [ ] 学习 embedding / vector search / top-k，建立最小索引与检索 API。 <span data-task-id="s03-t009"></span>
- [ ] 按错误案例评估 reranker 是否改善检索，保留无需它的基线。 <span data-task-id="s03-t010"></span>
- [ ] 为回答附 citation，资料不足或版本冲突时明确拒答或要求核验。 <span data-task-id="s03-t011"></span>
- [ ] 建 retrieval eval，记录问题、期望资料、检索结果与引用正确性。 <span data-task-id="s03-t012"></span>

项目同步：完成“故障码解释”“动作前 SOP 查询”“接口参数查询”三类问答。检索文本是不可信资料，不能修改权限、解除限位或直接触发动作。

## 步骤 3 · 最小 Memory → 有效上下文

- [ ] 只保留任务、当前状态、最近动作、失败原因和用户约束。 <span data-task-id="s03-t013"></span>
- [ ] 区分真实 robot state、模型推断和历史状态；运动前重新读取真实状态。 <span data-task-id="s03-t014"></span>
- [ ] 给任务记忆设置生命周期、大小限制与清理条件。 <span data-task-id="s03-t015"></span>
- [ ] 将安全约束保存在受控配置中，禁止对话或 RAG 覆盖。 <span data-task-id="s03-t016"></span>

项目同步：让“刚才失败了，先回 Home”能引用失败原因，同时重新校验当前位置与路径。

## 产出与完成判据 · v0.3

- [ ] 发布接口文档、手册问答示例、索引构建脚本、最小 Memory 与 trace。 <span data-task-id="s03-t017"></span>
- [ ] 至少 10 个资料问题和 10 个接口边界案例都有预期结果及实际结果。 <span data-task-id="s03-t018"></span>
- [ ] 引用可追溯，越界请求被确定性拒绝，过期 Memory 不被当作实时状态。 <span data-task-id="s03-t019"></span>


[← Stage 2](stage-02.md) · [路线总览](index.md) · [Stage 4 →](stage-04.md)
