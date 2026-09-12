# AI Agent 学习路线 · Stage 0–9

唯一长期主线是 **UR7e 具身 Agent**。以 [Agent-Learning-Hub](https://datawhalechina.github.io/Agent-Learning-Hub/) 的逐步 Todo、Minimal Loop、Tools / RAG / Memory、Harness、Skills / MCP、Eval 与 Ship 为知识骨架，按 DeepSeek 项目建议安排落地顺序：先控制链路，再受约束真机 Demo，再按条件扩展 VLA，最后以推理部署增强工程能力。

当前正在 **Stage 0**：应用形态、Agent loop、系统组件、MCP / Skills / Harness、token 基础五项已完成；Attention、FFN、Residual、LayerNorm、Decoder-only、自回归生成与其余推理基础继续学习。

## 使用方式

1. 每一步按“理解概念 → 接入项目 → 制造失败 → 保存证据”推进。
2. 每阶段在同一个项目上增加能力，按完成判据验收，不靠学过多少框架判断进展。
3. Stage 0 不碰真机；Stage 1 用 Mock；Stage 2 独立打通 ROS2 / MoveIt2 / UR7e。
4. Stage 4 做第一个可写简历的受约束 Demo，Stage 6 形成系统评测。
5. Stage 7 为 Advanced / Optional，可从 Stage 6 直接进入 Stage 8，再完成 Stage 9。

## 路线与项目里程碑

| Stage | 能力重点 | 项目版本与验收增量 |
|---|---|---|
| [Stage 0](stage-00.md) | LLM & Agent 全局认知 | 架构图：解释 LLM 与实时控制分层 |
| [Stage 1](stage-01.md) | Minimal Agent + Robot Mock | v0.1：自然语言 → Mock skill → 状态反馈 |
| [Stage 2](stage-02.md) | ROS2 / MoveIt2 / UR7e 控制基础 | v0.2：Home → Waypoint A → Waypoint B → Home |
| [Stage 3](stage-03.md) | Robot Tools + RAG + Memory | v0.3：受约束 Robot Tools、可引用手册与最小 Memory |
| [Stage 4](stage-04.md) | LangGraph + Backend + 受约束具身 Agent | v1.0：有审批与恢复的受约束真机任务 |
| [Stage 5](stage-05.md) | Skills + MCP + UR7e Agent | v1.1：ur7e-mcp-server 与可复用 Skills |
| [Stage 6](stage-06.md) | Eval + Safety + Observability | v1.5：30–50 条任务评测、安全拒绝与执行追踪 |
| [Stage 7](stage-07.md) | VLA / 模仿学习 / Post-training（Advanced / Optional） | v2.0（可选）：Classical Skill 与 VLA Skill 并存 |
| [Stage 8](stage-08.md) | Inference / AI Infra / Edge Deployment | v2.5：本地决策服务与性能基准，按需边缘部署 |
| [Stage 9](stage-09.md) | Production / Portfolio / 求职 | 作品集：可复现 Demo、指标、失败案例与 1+1 求职项目 |

## 学习骨架如何与项目结合

| Agent-Learning-Hub 知识模块 | 本路线位置 | 机器人项目落点 |
|---|---|---|
| 全局认知 / Minimal Loop | Stage 0–1 | 系统分层与 Mock skill 闭环 |
| Tool / RAG / Memory | Stage 3；Stage 2 先补控制底座 | 受约束接口、手册引用、最小任务记忆 |
| Agent Harness | Stage 4 | LangGraph 状态机、审批、恢复与 Backend |
| Skills / MCP | Stage 5 | 复用机器人技能与 ur7e-mcp-server |
| Eval / Observability / Safety | 从 Stage 1 建立，Stage 6 系统验收 | 任务集、安全拒绝、完整 trace |
| Ship | Stage 9 | 可复现作品集与求职材料 |
| Multi-Agent / Browser | Later / Optional | 有余力再补，不占主线 Stage |

## 最终系统

```text
用户自然语言 → LLM/VLM → Agent → 技能/Tool → ROS2/MoveIt2 → UR7e
                          ↑                         │
                          └──── 状态与失败反馈 ────────┘
```

执行路径始终经过 Safety Layer 与必要的人工审批，LLM 不直接执行低层运动。AI Infra 是主项目增强：让模型在实际资源约束下运行得稳定且可测量；通用 Agent 项目暂不做，后续有余力再补。

## 进度保存与迁移

新版使用稳定任务 ID，保留旧浏览器数据；Stage 0 原任务与已勾选状态可迁移，确认完成的五项作为默认值。其他旧任务只有明确匹配时才迁移，不因 Stage 编号相同就判定新知识已完成。旧版所有任务和原进度可在 [旧版存档](archive/stage-00.md) 查阅，不计入新版总进度。

总进度包含 Stage 0–9 的必做任务，排除 Stage 7 和 Stage 8 的条件性 VLA / Edge 任务；可选页面仍显示本页进度。新增任务会改变总数，但不会抹除完成记录。进度仅保存在当前浏览器，不跨设备同步。

[项目实践与仓库组织](../projects/index.md) · [Later / Optional](later.md)
