# Stage 2 · Tool / RAG / Memory

## 目标

让 Agent 能可靠使用外部知识和更丰富的工具，并建立 Context、Retrieval 与 Memory 的清晰边界。

## Todo

### RAG 基础

- [ ] 解释 RAG 为什么出现，以及它不能解决什么。
- [ ] 区分 RAG、Fine-tuning 与 Agent。
- [ ] 读取 PDF、Markdown 与 TXT，并保留来源元数据。
- [ ] 实现 document chunking，比较 chunk size 与 overlap。
- [ ] 理解 embedding 与 cosine similarity。
- [ ] 使用 FAISS 或 Chroma 中的一个建立向量索引。
- [ ] 实现 Top-K retrieval 并把证据加入上下文。
- [ ] 让回答提供可点击或可定位的 citation。
- [ ] 当证据不足时拒绝编造答案。

### 检索增强

- [ ] 区分 Dense Retrieval 与 BM25 / Sparse Retrieval。
- [ ] 知道 Hybrid Search 的适用场景。
- [ ] 理解 reranker 在召回之后解决什么问题。
- [ ] 用 Recall@K 或命中率评估检索。
- [ ] 建立一组包含同义表达、长问题和无答案问题的检索测试集。
- [ ] 区分“没有检索到”“证据有歧义”和“模型不会回答”。

### Tool Engineering

- [ ] 把文件读取、Web 搜索、数据库查询、代码执行和 RAG 检索设计成独立工具。
- [ ] 为工具定义严格输入输出 schema。
- [ ] 处理空结果、分页、超时、异常和重复调用。
- [ ] 把外部内容标记为不可信数据，避免把网页文本当系统指令。
- [ ] 对写操作、代码执行和网络访问设置最小权限。
- [ ] 记录工具成功率、延迟与失败类型。

### Memory

- [ ] 区分 Context 与 Memory。
- [ ] 区分 short-term、session 与 long-term memory。
- [ ] 设计哪些信息允许写入长期记忆，哪些禁止写入。
- [ ] 在上下文变长时生成可追溯摘要。
- [ ] 为记忆加入用户/会话隔离和删除机制。
- [ ] 验证旧记忆、错误记忆和冲突记忆对结果的影响。
- [ ] 理解“把所有历史全塞回上下文”为何不可扩展。

## 阶段产出

完成一个 Research / PDF Agent：

```text
Documents → Chunk → Embed → Retrieve → Agent → Citation
                                      ├── read_file()
                                      ├── search_document()
                                      └── run_analysis()
```

同时提交 20–30 个问题的检索与回答评测表，包含引用正确性、无答案处理和失败原因。

## 暂不深入

- GraphRAG、HyDE、ColBERT 与多跳检索优化
- 十种向量数据库横向比较
- 大规模分布式索引和在线特征平台
- 让模型自由写入永久记忆

## 学习完成判据

- [ ] 任何事实性回答都能回到具体文档片段。
- [ ] 能分别测量 retrieval quality 与 answer quality。
- [ ] 对无答案问题不会伪造 citation。
- [ ] 能解释每类 Memory 的生命周期、权限和清理方式。
- [ ] 项目可由 README 中的步骤从零复现。

[← Stage 1](stage-01.md) · [下一阶段：Harness / LangGraph / Backend →](stage-03.md)
