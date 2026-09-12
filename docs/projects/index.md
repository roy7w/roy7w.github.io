# UR7e 具身 Agent · 项目实践

一个长期主项目持续演进，每个 Stage 的学习步骤直接贡献下一版能力。核心项目建议命名 **ur7e-embodied-agent**；博客继续使用现有个人站点仓库。

## 项目版本与学习进展

| Stage | 能力重点 | 项目版本与验收增量 |
|---|---|---|
| [Stage 0](../ai-agent/stage-00.md) | LLM & Agent 全局认知 | 架构图：解释 LLM 与实时控制分层 |
| [Stage 1](../ai-agent/stage-01.md) | Minimal Agent + Robot Mock | v0.1：自然语言 → Mock skill → 状态反馈 |
| [Stage 2](../ai-agent/stage-02.md) | ROS2 / MoveIt2 / UR7e 控制基础 | v0.2：Home → Waypoint A → Waypoint B → Home |
| [Stage 3](../ai-agent/stage-03.md) | Robot Tools + RAG + Memory | v0.3：受约束 Robot Tools、可引用手册与最小 Memory |
| [Stage 4](../ai-agent/stage-04.md) | LangGraph + Backend + 受约束具身 Agent | v1.0：有审批与恢复的受约束真机任务 |
| [Stage 5](../ai-agent/stage-05.md) | Skills + MCP + UR7e Agent | v1.1：ur7e-mcp-server 与可复用 Skills |
| [Stage 6](../ai-agent/stage-06.md) | Eval + Safety + Observability | v1.5：30–50 条任务评测、安全拒绝与执行追踪 |
| [Stage 7](../ai-agent/stage-07.md) | VLA / 模仿学习 / Post-training（Advanced / Optional） | v2.0（可选）：Classical Skill 与 VLA Skill 并存 |
| [Stage 8](../ai-agent/stage-08.md) | Inference / AI Infra / Edge Deployment | v2.5：本地决策服务与性能基准，按需边缘部署 |
| [Stage 9](../ai-agent/stage-09.md) | Production / Portfolio / 求职 | 作品集：可复现 Demo、指标、失败案例与 1+1 求职项目 |

## 每一步怎么推进

1. 读当前 Stage 对应的一项概念或接口文档。
2. 在 Mock 或最小环境验证，再接入当前项目版本。
3. 同时验证正常路径、参数错误、超时与恢复。
4. 保存代码、固定依赖、脱敏 trace、结果和已知限制。
5. 通过完成判据后打版本标签，再进入下一步。

Stage 2 的初始时间盒约 1–2 周，Stage 4 的受约束真机 Demo 约 4–6 周；它们是规划参考，设备适配与完成证据决定实际进度。Stage 0 暂不碰真机，Stage 1 使用 Mock；安全校验与审批贯穿后续阶段。

## 核心项目目录建议

```text
ur7e-embodied-agent/
├── agent/
├── robot/
├── mcp/
├── skills/
├── rag/
├── safety/
├── eval/
├── deployment/
└── docs/
```

## 1+1 求职组合

- **UR7e Embodied AI Agent**：证明自然语言、受约束计划、运动控制与真实反馈的工程闭环。
- **Embodied AI Inference Optimization**：复用同一任务与评测，展示模型部署、性能瓶颈、优化收益与质量权衡；可以是主仓库 deployment/ 下的性能子项目。

README、Demo、指标与失败案例按 [Stage 9](../ai-agent/stage-09.md) 验收。VLA / LeRobot / SmolVLA 属于 [Stage 7 高级可选](../ai-agent/stage-07.md)；通用 Agent、Multi-Agent、Browser 和独立 LoRA 实验均在 [Later / Optional](../ai-agent/later.md)，当前不另开项目。
