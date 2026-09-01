# Stage 5 · Multi-Agent

## 目标

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

完成一个 Research Team：

```text
Supervisor
├── Researcher → Search / RAG
├── Analyst    → Python / Data
└── Reviewer   → Evidence Rubric
        ↓
     Final Report
```

同时提交 single-agent 对照版本和一份量化实验报告。

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

[← Stage 4](stage-04.md) · [下一阶段：SFT / LoRA / QLoRA →](stage-06.md)
