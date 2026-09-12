# Stage 0 · LLM & Agent 全局认知

## 目标

围绕 UR7e 具身 Agent 推进本阶段能力。

把后续概念放进同一张技术地图。能解释 LLM、RAG、Agent、微调和推理基础设施各自解决什么问题，并判断一个需求是否真的需要 Agent。

## Todo

### Agent 与应用形态

- [x] 区分 chatbot、workflow、agent 与 multi-agent。 <span data-task-id="s00-t000"></span>
- [x] 理解 Agent 基本循环：`observe → decide → act → observe`。 <span data-task-id="s00-t001"></span>
- [ ] 能举例说明确定性 workflow 比 Agent 更合适的场景。 <span data-task-id="s00-t002"></span>
- [ ] 能说明 Agent 的自主决策带来的价值、成本和风险。 <span data-task-id="s00-t003"></span>
- [x] 理解 Tool、State、Memory、RAG、Workflow、Eval 在 Agent 系统中的位置。 <span data-task-id="s00-t004"></span>
- [x] 能解释 MCP、Skills 和 Agent Harness 分别解决什么问题。 <span data-task-id="s00-t005"></span>

### LLM 与 Transformer 基础

- [x] 理解 token、tokenizer、embedding 与 vocabulary。 <span data-task-id="s00-t006"></span>
- [ ] 理解 Attention、FFN、Residual、LayerNorm 的作用。 <span data-task-id="s00-t007"></span>
- [ ] 理解 Decoder-only Transformer 如何进行自回归生成。 <span data-task-id="s00-t008"></span>
- [ ] 理解训练、推理、上下文窗口三者的区别。 <span data-task-id="s00-t009"></span>
- [ ] 理解 temperature、top-p、max tokens 与 stop sequence。 <span data-task-id="s00-t010"></span>
- [ ] 理解 system / user / assistant / tool message 的职责。 <span data-task-id="s00-t011"></span>
- [ ] 知道幻觉、上下文污染、指令冲突和 prompt injection 是什么。 <span data-task-id="s00-t012"></span>

### 技术地图与资料

- [ ] 能区分 Pre-training、Post-training、Inference 与 Application。 <span data-task-id="s00-t013"></span>
- [ ] 能区分 RAG 与 Fine-tuning。 <span data-task-id="s00-t014"></span>
- [ ] 能区分模型能力问题、检索问题和系统编排问题。 <span data-task-id="s00-t015"></span>
- [ ] 阅读一份主流机构关于有效构建 Agent 的基础指南。 <span data-task-id="s00-t016"></span>
- [ ] 阅读一个主流 LLM API 的 messages、structured output 与 tool calling 文档。 <span data-task-id="s00-t017"></span>

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

- [ ] 不看资料，能用 5 分钟画出 LLM 到 Agent 的技术地图。 <span data-task-id="s00-t018"></span>
- [ ] 面对三个真实需求，能给出 workflow / single-agent / multi-agent 选择及理由。 <span data-task-id="s00-t019"></span>
- [ ] 能用自己的话解释生成参数变化会如何影响输出。 <span data-task-id="s00-t020"></span>
- [ ] 已提交技术地图与决策说明，并让另一位读者能够复述核心关系。 <span data-task-id="s00-t021"></span>

## 长期项目演进 · 架构认知（Stage 0）

先理解 LLM/VLM 大脑负责理解与任务规划，机器人控制/规划/执行小脑负责可验证的运动执行。ROS2、MoveIt2、VLA、RL 第一轮仅认知，不安装整套机器人栈。

### 当前必做：只画架构，暂不碰真机

- [ ] 画出 Natural Language → Agent Planner → Robot Tools/ROS2/UR API → Motion Planning/Execution → Observation/Feedback 的架构，并解释反馈如何回到 Planner。 <span data-task-id="s00-t022"></span>
- [ ] 能区分语义任务计划与运动轨迹；说明 LLM 不能替代底层控制器和安全约束。 <span data-task-id="s00-t023"></span>

### 阶段产出 / 完成判据

产出一张具身 Agent 架构图及模块职责说明，补充到原技术地图。


## 当前进度与逐项补齐

当前正在 Stage 0：已完成应用形态、Agent loop、系统组件、MCP / Skills / Harness 和 token 基础五项。保留上方原有 Todo 的文字与顺序；Attention 等聚合项仍未完成，下面拆开便于逐项学习。

- [ ] 理解 Attention 如何利用上下文建立 token 之间的关系。 <span data-task-id="s00-t024"></span>
- [ ] 理解 FFN 如何对每个位置的表示进行变换。 <span data-task-id="s00-t025"></span>
- [ ] 理解 Residual 如何保留信息并支持深层网络训练。 <span data-task-id="s00-t026"></span>
- [ ] 理解 LayerNorm 的作用。 <span data-task-id="s00-t027"></span>
- [ ] 理解 Decoder-only Transformer 的结构与因果掩码。 <span data-task-id="s00-t028"></span>
- [ ] 能解释自回归生成：每次预测下一个 token，更新上下文后继续。 <span data-task-id="s00-t029"></span>

## 最终架构与项目同步

```text
用户自然语言 → LLM/VLM → Agent → 技能/Tool → ROS2/MoveIt2 → UR7e
                          ↑                              │
                          └──── 状态 / 执行结果 / 失败反馈 ─┘
```

这张图描述职责；执行路径中的 Safety Layer 和人工审批从 Stage 1 开始建立，在 Stage 2 画成完整分层。LLM 负责高层意图和技能选择，MoveIt2 负责运动规划，Robot Controller 负责实时控制。不能依赖逐 token 生成满足控制周期、轨迹约束或设备安全要求。

- [ ] 不看教程解释：为什么机械臂 Agent 必须把 LLM 与实时控制分层？ <span data-task-id="s00-t030"></span>
- [ ] 在架构图标出安全校验、人工审批、反馈与失败终止位置。 <span data-task-id="s00-t031"></span>

项目证据：提交架构图与模块职责说明；完成判据是能清楚回答分层问题。下一步只实现 Mock，不因学完理论就直接连接真机。

[下一阶段：Minimal Agent + Robot Mock →](stage-01.md)
