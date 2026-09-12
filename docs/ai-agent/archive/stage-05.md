---
search:
  exclude: true
---

> 旧版路线存档：保留原任务与浏览器勾选，仅供查阅，不计入新版主线进度。
> [返回新版路线](../index.md) · [Later / Optional](../later.md)

# Stage 5 · Multi-Agent

## 目标

围绕 UR7e 具身 Agent 推进本阶段能力。

把 Multi-Agent 当成 coordination problem：只有在职责、上下文、权限或并行性确实需要隔离时才拆分，并能度量拆分是否比单 Agent 更好。

## Todo

### 角色与模式

- [ ] 理解 Planner、Executor、Reviewer、Critic、Router 与 Supervisor。
- [ ] 理解 handoff、delegation、shared state 与 message passing。
- [ ] 区分顺序协作、并行协作和层级协作。
- [ ] 能指出一个“伪 Multi-Agent”设计中可被普通函数替代的部分。
- [ ] 为每个 Agent 定义唯一职责和允许使用的工具。

### 协作工程

- [ ] 定义每个 Agent 的输入与输出 schema。
- [ ] 定义任务分解、所有权和结果合并规则。
- [ ] 定义停止条件、最大循环次数、时间和 token 预算。
- [ ] 限制 Agent 之间无意义的来回对话。
- [ ] 隔离不需要共享的上下文与敏感信息。
- [ ] 对共享状态定义写入者和冲突解决规则。
- [ ] 为高风险 handoff 加入人工确认。
- [ ] 追踪每个 Agent 的调用、成本、延迟和失败。
- [ ] 处理子任务超时、部分失败与重试。
- [ ] 让 Reviewer 基于可检查 rubric，而非泛泛“再改进”。

### 设计比较

- [ ] 先实现 single-agent baseline。
- [ ] 再实现 planner–executor 或 researcher–writer–reviewer 版本。
- [ ] 使用同一测试集比较两种架构。
- [ ] 比较成功率、延迟、token、工具调用次数与可解释性。
- [ ] 记录 Multi-Agent 改善和恶化的任务类型。
- [ ] 能在收益不足时删掉一个 Agent。

## 阶段产出

完成 UR7e V4：Planner → Robot Executor → Observation，按需加入 Safety/Reviewer。提交 single-agent 对照版本与量化报告；可依据实验结果保留单 Agent，不能为角色数量牺牲可靠性。

## 暂不深入

- 为了“像团队”而创建大量角色
- 没有边界的群聊式协作
- 同时学习 CrewAI、AutoGen、Swarm 等多个框架
- 在没有 baseline 与 eval 的情况下声称 Multi-Agent 更强

## 学习完成判据

- [ ] 每个 Agent 都有不可被普通函数轻易替代的职责或隔离需求。
- [ ] 任意任务都能追踪到所有者、输入、输出与结束原因。
- [ ] Multi-Agent 在预先定义的至少一类任务上显著优于 baseline。
- [ ] 对失败任务能判断问题来自分解、路由、通信还是合并。
- [ ] 能明确说出何时应退回 single-agent。

## 长期项目演进 · V4 · 按需协作与安全检查

当前必做：先保留 single-agent baseline。仅在职责或权限隔离有收益时拆为 Planner Agent + Robot Executor + Safety/Reviewer；Executor 可以是确定性模块，安全检查不能仅依赖 LLM Reviewer。

### 当前必做（旁支阶段在独立实验中完成）

- [ ] 用结构化任务计划描述步骤、前置条件、工具参数、预期 observation 和失败处理；执行前做确定性安全检查。
- [ ] 在同一机械臂模拟任务集比较单 Agent 与按需拆分版本；若收益不足，记录结论并保留单 Agent。

### 阶段产出 / 完成判据

交付 V4 及对照报告。原“显著优于 baseline”条目作为效果目标；无收益但实验完整、能够解释回退，也满足本阶段验收，不强行勾选该条。


[← Stage 4](stage-04.md) · [下一阶段：SFT / LoRA / QLoRA →](stage-06.md)
