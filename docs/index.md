# AI Agent 学习博客

<div class="hero" markdown>

这里专注记录 AI Agent 的学习、实现与工程化过程：从手写最小 Agent Loop 开始，逐步加入 Tool、RAG、Memory、Harness、Skills、MCP、Multi-Agent、评测、推理部署和 Computer Use，从 Stage 1 起持续建设 UR7e 具身 Agent，最终落地到可复现、可评测的机器人/机械臂完整系统。

[开始 Stage 0–10 路线](ai-agent/index.md){ .md-button .md-button--primary }
[查看项目实践方式](projects/index.md){ .md-button }

</div>

## 学习路线

路线共分为 Stage 0–10，每项 checkbox 都对应可以解释、实现或验证的能力，而不只是“看过某篇资料”。

- **Stage 0–2：核心原理**——理解 Agent，手写循环，掌握 Tool、RAG 与 Memory。
- **Stage 3–5：系统能力**——构建 Harness、后端、Skills、MCP 与 Multi-Agent。
- **Stage 6–9：模型与工程侧翼**——微调、评测、推理 Infra、Browser / Computer Use。
- **Stage 10：生产交付**——交付 UR7e Embodied Agent 真实或高保真仿真闭环。

[进入学习路线 →](ai-agent/index.md)

## 项目驱动

长期主项目明确为 **UR7e 具身 Agent**：V0 模拟工具 → V1 手册 RAG → V2 状态机 → V3 MCP → V4 按需协作 → V5 决策模型部署 → Production。Fine-tuning 与 AI Infra 是增强线，Browser / Computer Use 独立推进，VLA / RL / TensorRT / Jetson 为高级可选。

学习采用“一个长期主项目 + 少量阶段微项目”的方式：

1. 每个阶段先用最小实验理解新能力。
2. 能力验证后，再接入长期主项目。
3. 用 tag、测试、trace 和阶段复盘记录项目如何演化。
4. 与主项目关系不大的专项能力，保留为独立的小型实验。

[查看项目演化方案 →](projects/index.md)

!!! tip "完成标准"
    每完成一个 Stage，都应留下可以运行的代码、测试或评测证据。用“做出来并验证过”代替“看过和听懂了”。

!!! note "进度保存"
    checkbox 状态保存在当前浏览器的 localStorage 中；同一浏览器刷新后仍会保留，但暂不跨设备同步。
