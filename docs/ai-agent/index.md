# AI Agent 求职增强版 Learning Todo List

这是一条以求职作品为导向的学习路线。它借鉴分 Stage、明确目标与 checkbox 的组织方式，但内容围绕个人能力补齐重新设计：先理解并手写核心循环，再逐步加入工程化、协议、训练、评测、推理与交互能力。

## 怎么使用

1. 按依赖顺序推进，不横向收集框架。
2. 每个 Stage 只深入一个主工具，其余先知道定位。
3. checkbox 代表可验证的能力，不代表“看过文章”。
4. 完成阶段产出并满足完成判据后再进入下一阶段。
5. 已有 LLM 应用基础时，可从 Stage 2 或 Stage 3 开始，但先用完成判据自测。

## Roadmap

- [ ] [Stage 0 · LLM & Agent 全局认知](stage-00.md)
- [ ] [Stage 1 · Minimal Agent Loop](stage-01.md)
- [ ] [Stage 2 · Tool / RAG / Memory](stage-02.md)
- [ ] [Stage 3 · Agent Harness + LangGraph + Backend](stage-03.md)
- [ ] [Stage 4 · Skills + MCP](stage-04.md)
- [ ] [Stage 5 · Multi-Agent](stage-05.md)
- [ ] [Stage 6 · SFT + LoRA + QLoRA](stage-06.md)
- [ ] [Stage 7 · Eval + Observability + Safety](stage-07.md)
- [ ] [Stage 8 · Inference + vLLM + Infra Basics](stage-08.md)
- [ ] [Stage 9 · Browser / Computer Use](stage-09.md)
- [ ] [Stage 10 · Production Project](stage-10.md)

## 主线关系

```text
LLM 基础
  ↓
Minimal Agent Loop
  ↓
Tool / RAG / Memory
  ↓
Harness / LangGraph / Backend
  ↓
Skills / MCP
  ↓
Multi-Agent
  ↓
Fine-tuning ──→ Inference / Infra
  ↓                   ↓
Eval / Safety ←───────┘
  ↓
Browser / Computer Use
  ↓
Production Project
```

!!! warning "不要把产品名当知识地图"
    LangChain、LangGraph、CrewAI、AutoGen、Dify、Coze、Agents SDK 都是实现手段。第一轮学习的主线是 Agent Loop、Tool、State、Memory、Workflow、Protocol、Eval 与 Safety。
