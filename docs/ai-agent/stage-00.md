# Stage 0 · LLM & Agent 全局认知

## 目标

把后续概念放进同一张技术地图。能解释 LLM、RAG、Agent、微调和推理基础设施各自解决什么问题，并判断一个需求是否真的需要 Agent。

## Todo

### Agent 与应用形态

- [ ] 区分 chatbot、workflow、agent 与 multi-agent。
- [ ] 理解 Agent 基本循环：`observe → decide → act → observe`。
- [ ] 能举例说明确定性 workflow 比 Agent 更合适的场景。
- [ ] 能说明 Agent 的自主决策带来的价值、成本和风险。
- [ ] 理解 Tool、State、Memory、RAG、Workflow、Eval 在 Agent 系统中的位置。
- [ ] 能解释 MCP、Skills 和 Agent Harness 分别解决什么问题。

### LLM 与 Transformer 基础

- [ ] 理解 token、tokenizer、embedding 与 vocabulary。
- [ ] 理解 Attention、FFN、Residual、LayerNorm 的作用。
- [ ] 理解 Decoder-only Transformer 如何进行自回归生成。
- [ ] 理解训练、推理、上下文窗口三者的区别。
- [ ] 理解 temperature、top-p、max tokens 与 stop sequence。
- [ ] 理解 system / user / assistant / tool message 的职责。
- [ ] 知道幻觉、上下文污染、指令冲突和 prompt injection 是什么。

### 技术地图与资料

- [ ] 能区分 Pre-training、Post-training、Inference 与 Application。
- [ ] 能区分 RAG 与 Fine-tuning。
- [ ] 能区分模型能力问题、检索问题和系统编排问题。
- [ ] 阅读一份主流机构关于有效构建 Agent 的基础指南。
- [ ] 阅读一个主流 LLM API 的 messages、structured output 与 tool calling 文档。

## 阶段产出

写一页自己的 AI 技术地图，至少覆盖：

```text
LLM
├── Pre-training
├── Post-training
│   ├── SFT
│   ├── LoRA / QLoRA
│   └── Preference Optimization / RL
├── Inference
└── Application
    ├── RAG
    ├── Tool Calling
    ├── Workflow
    └── Agent
```

再写一个 500–1000 字的决策说明：你的目标应用为什么需要或不需要 Agent。

## 暂不深入

- RoPE、GQA / MQA、MoE 与 FlashAttention 的实现细节
- Transformer 数学推导与预训练 Scaling Law
- RLHF、DPO、PPO、GRPO 的算法细节
- CUDA Kernel 与分布式训练

## 学习完成判据

- [ ] 不看资料，能用 5 分钟画出 LLM 到 Agent 的技术地图。
- [ ] 面对三个真实需求，能给出 workflow / single-agent / multi-agent 选择及理由。
- [ ] 能用自己的话解释生成参数变化会如何影响输出。
- [ ] 已提交技术地图与决策说明，并让另一位读者能够复述核心关系。

[下一阶段：Minimal Agent Loop →](stage-01.md)
