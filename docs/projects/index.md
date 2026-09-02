# Agent 项目实践

项目学习不采用“每个 Stage 都重新做一个大项目”，也不强迫所有知识塞进同一个项目。更合适的方式是：

> **一个长期主项目持续演化，配合少量用于隔离概念的阶段微项目。**

## 为什么采用混合制

只做独立项目，会不断重复脚手架、接口和 README，阶段之间难以形成系统积累；只做一个项目，又容易为了展示某项技术而生硬堆功能。

因此分成两条线：

| 类型 | 作用 | 处理方式 |
|---|---|---|
| 长期主项目 | 展示架构演进、工程能力和完整交付 | 从 Stage 1 持续迭代到 Stage 10 |
| 阶段微项目 | 快速验证单一概念，隔离复杂度 | 做到可运行、可测试即可，不追求产品化 |

## 推荐主项目：Research Agent

你已有 RAG 项目经验，主项目可以选择 **Research Agent / Personal Research Assistant**。它既能复用已有基础，又能自然覆盖后续能力：

| Stage | 主项目增量 |
|---|---|
| 1 | 手写 Agent Loop，加入 calculator、read_file、get_time 等安全工具 |
| 2 | 加入网页/PDF 检索、RAG、短期状态与长期记忆 |
| 3 | 用 LangGraph 重构状态流，增加 FastAPI、任务持久化和恢复 |
| 4 | 把检索、引用、报告导出封装为 Skills，并通过 MCP 接入工具 |
| 5 | 在确有收益时拆分 planner、researcher、writer、reviewer |
| 6 | 以小型 LoRA/QLoRA 实验验证领域适配，不强行替换主模型 |
| 7 | 建立数据集、成功率、引用准确性、延迟、成本、trace 和安全测试 |
| 8 | 尝试 vLLM 或其他推理服务，记录吞吐、显存和延迟 |
| 9 | 加入受限 Browser / Computer Use，明确权限、确认与失败恢复 |
| 10 | 整理部署、CI、监控、演示、架构文档和完整复盘 |

主项目不要求一开始就确定最终全部功能。每个 Stage 只增加当前能解释和验证的一层。

## 阶段微项目

以下项目用于快速理解局部机制，完成后可以保留在主仓库的 `labs/` 或 `examples/` 中：

- **Stage 1 · Calculator Agent**：专注 tool calling、消息循环和退出条件。
- **Stage 4 · Reusable Skill Pack**：专注 SKILL、触发条件、脚本和 smoke test。
- **Stage 6 · LoRA / QLoRA Experiment**：专注数据、训练、对比和误差分析。
- **Stage 8 · vLLM Benchmark**：专注吞吐、并发、显存与延迟。
- **Stage 9 · Browser Agent Sandbox**：专注观察、动作、权限和失败恢复。

微项目的代码成熟后可以被主项目吸收；不适合吸收的就作为独立实验保留。

## Stage 1 的具体学习循环

Stage 1 不直接上 LangChain 或 LangGraph。每个知识点按以下循环推进：

1. **先理解协议**：读清 messages、tool schema、tool call 和 observation 如何往返。
2. **写最小实验**：用几十行代码验证一个能力，例如结构化输出或一次工具调用。
3. **合并成 Agent Loop**：逐步组合成约 100–300 行的 Minimal Agent。
4. **主动制造失败**：测试非法参数、未知工具、超时、重复调用和最大步数。
5. **补测试与 trace**：确保能解释模型为何调用工具、工具返回了什么、为何结束。
6. **接入主项目**：把已经验证的循环作为 Research Agent 的第一版内核。
7. **留下阶段快照**：打 `stage-1` tag，记录架构、测试结果、限制和下一步。

因此，Stage 1 的产出既是一个独立可运行的 Minimal Agent，也是长期主项目的第一个版本；两者在这一阶段可以是同一份代码。

## 仓库组织建议

```text
research-agent/
├── src/                  # 长期主项目
├── tests/                # 自动化测试
├── evals/                # 从 Stage 7 开始扩充
├── labs/                 # 阶段微项目
│   ├── skill-pack/
│   ├── lora-experiment/
│   └── browser-sandbox/
├── traces/               # 脱敏后的示例执行轨迹
├── docs/                 # 架构与阶段复盘
└── README.md
```

## 每个阶段的完成证据

- 可运行代码和固定依赖；
- 至少一组自动化测试或评测结果；
- 一条脱敏 execution trace；
- 当前架构图与关键取舍；
- 已知失败模式；
- 对应的阶段 tag 或 release。

不要用代码行数判断完成度。以“是否能复现、解释、测试和比较”为准。
