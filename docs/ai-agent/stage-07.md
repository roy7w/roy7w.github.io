# Stage 7 · VLA / 模仿学习 / Post-training（Advanced / Optional）

## 定位与进入条件 · Advanced / Optional

本阶段不阻塞 Stage 8–9。只有 v1.5 稳定、具备相机与示教采集条件、训练算力和时间时，才交付 **v2.0**。项目采用 Classical Skill 与 VLA Skill 并存；VLA 失败能退回已验证的经典技能。

## 步骤 1 · Post-training 基础 → 理解训练闭环

- [ ] 理解 SFT / Instruction Dataset / PEFT / LoRA / QLoRA / Quantization。 <span data-task-id="s07-t000"></span>
- [ ] 理解 train-val 划分、LR、batch、grad accumulation、overfitting 与 eval。 <span data-task-id="s07-t001"></span>
- [ ] 能解释量化推理与 QLoRA 训练的区别，估算显存与数据需求。 <span data-task-id="s07-t002"></span>
- [ ] 对 DPO / RLHF / PPO / GRPO 只建立概念地图，暂不实现算法。 <span data-task-id="s07-t003"></span>

项目同步：为机器人任务准备小型数据样例与训练配置说明，普通独立 LoRA Demo 放在 Later；此处学习服务后续策略数据与训练。

## 步骤 2 · 模仿学习 → 任务数据定义

- [ ] 理解 imitation learning / demonstration / episode / observation / action / policy / behavior cloning。 <span data-task-id="s07-t004"></span>
- [ ] 理解 VLM 与 VLA 的输入输出差异，以及动作表示、频率与坐标系。 <span data-task-id="s07-t005"></span>
- [ ] 定义一个固定抓取任务的 observation、action、成功条件与重置流程。 <span data-task-id="s07-t006"></span>

项目同步：先确认所选策略、机器人接口、夹爪和相机能兼容，不假设 UR7e 与某模型即插即用。

## 步骤 3 · LeRobot 数据 → 采集、同步与清洗

- [ ] 阅读并实现所固定版本的 LeRobot 数据格式与元数据。 <span data-task-id="s07-t007"></span>
- [ ] 采集 camera + joint state + action + task instruction，并记录时间戳和 episode 边界。 <span data-task-id="s07-t008"></span>
- [ ] 检查相机、关节状态与动作同步，处理丢帧、单位与控制频率差异。 <span data-task-id="s07-t009"></span>
- [ ] 清洗失败示教、错误标注和重置片段，记录质量标准。 <span data-task-id="s07-t010"></span>
- [ ] 按 episode / 采集条件划分训练与验证集，避免相邻帧泄漏。 <span data-task-id="s07-t011"></span>
- [ ] 离线 replay，核对图像、动作、轨迹与任务标签后再训练。 <span data-task-id="s07-t012"></span>

## 步骤 4 · 策略训练与部署 → VLA Skill

- [ ] 条件允许时验证 UR7e + RealSense + LeRobot + SmolVLA 适配，固定版本与动作转换。 <span data-task-id="s07-t013"></span>
- [ ] 跑通 train / validation / inference，比较未训练基线与微调结果。 <span data-task-id="s07-t014"></span>
- [ ] 在仿真或受控环境验证动作范围、频率、延迟与停止策略，再做受监督真机测试。 <span data-task-id="s07-t015"></span>
- [ ] 将策略封装为 VLA Skill，保留 Safety Layer、Motion Approval 与 Classical Skill fallback。 <span data-task-id="s07-t016"></span>

## 产出与完成判据 · v2.0（可选）

- [ ] 发布数据卡、同步检查、训练配置、模型版本、评测与失败案例。 <span data-task-id="s07-t017"></span>
- [ ] 同一任务对比 Classical Skill 与 VLA Skill 的成功率、延迟和适用边界。 <span data-task-id="s07-t018"></span>
- [ ] 演示数据 → 策略 → 真机闭环；若只完成推理，则明确未做微调，不能宣称训练完成。 <span data-task-id="s07-t019"></span>

数据质量优先于模型复杂度。条件不足时记录跳过原因，带着 v1.5 进入 Stage 8。


[← Stage 6](stage-06.md) · [路线总览](index.md) · [Stage 8 →](stage-08.md)
