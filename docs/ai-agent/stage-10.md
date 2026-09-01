# Stage 10 · Production Project

## 目标

交付一个能真实解决问题、可复现、可评测、可部署、可安全运维的完整项目，并把它整理成求职作品而不是课程作业。

## Todo

### 问题与产品

- [ ] 选择一个与你的专业背景或目标岗位强相关的问题。
- [ ] 访谈或模拟真实用户，写清使用场景和痛点。
- [ ] 定义非目标，避免项目无限膨胀。
- [ ] 证明为什么需要 Agent，而不是简单脚本或 workflow。
- [ ] 定义核心任务、用户旅程和成功指标。
- [ ] 先做最小 baseline，再逐步增加复杂度。

### 系统设计

- [ ] 画出组件、数据流、信任边界与部署图。
- [ ] 选择 single-agent 或 multi-agent，并写出理由。
- [ ] 设计 Tool / RAG / Memory 的职责和接口。
- [ ] 通过 Skill 封装一项可复用流程。
- [ ] 通过 MCP 暴露或接入至少一组外部能力。
- [ ] 使用 Harness / LangGraph 管理状态、重试和中断。
- [ ] 设计模型路由、fallback 与本地/云端推理选择。
- [ ] 设计数据库 schema、会话隔离与数据保留策略。
- [ ] 为高风险工具设置权限、确认和审计。

### 工程与交付

- [ ] 提供后端 API 与清晰的交互界面或 CLI。
- [ ] 使用 Docker 运行核心服务。
- [ ] 建立 lint、test、build 与 deploy CI。
- [ ] 管理配置、secret、migration 与版本。
- [ ] 加入健康检查、结构化日志、trace、metrics 与告警。
- [ ] 为超时、限流、依赖失败和预算耗尽设计降级。
- [ ] 编写单元、集成、端到端与安全测试。
- [ ] 准备一键启动或最少步骤部署方案。

### Eval 与迭代

- [ ] 建立至少 50–100 条代表性任务。
- [ ] 记录成功率、引用、工具错误、延迟、成本和人工接管率。
- [ ] 与 non-agent baseline 比较。
- [ ] 做 ablation：去掉 Memory、Reviewer 或某个工具后比较结果。
- [ ] 选择三类最常见失败，修复并加入回归测试。
- [ ] 进行 prompt injection、越权、数据泄漏和危险动作测试。
- [ ] 写清已知限制、风险和后续路线。

### 求职作品集

- [ ] README 首屏说明问题、价值、Demo 和核心指标。
- [ ] 提供架构图、执行 trace、截图或短视频。
- [ ] 提供可复现安装与示例数据。
- [ ] 记录关键技术取舍，而不是罗列技术名词。
- [ ] 写一篇项目复盘：最难问题、失败、权衡与结果。
- [ ] 把量化结果整理成 2–3 条可验证的简历 bullet。
- [ ] 准备 5 分钟 Demo 和 15 分钟技术讲解。

## 推荐选题

### Accelerator Operation Agent

```text
User / Operator
      ↓
Agent / Planner
├── search_manual()  → RAG / Manuals
├── read_pv()        → EPICS read-only gateway
├── query_alarm()    → Alarm service
├── plot_history()   → Historical database
└── diagnose_device()→ Evidence-based report
```

第一版保持设备控制只读；任何写 PV 或执行设备动作都必须经过严格权限、仿真验证与人工确认。

其他候选：Robotics Task Planning Assistant、Research Intelligence Agent、实验数据分析 Agent。

## 阶段产出

一个公开作品仓库、在线或本地 Demo、架构与安全说明、固定评测集、量化报告、项目复盘文章和简历描述。项目应覆盖从需求到部署的完整闭环。

## 暂不深入

- 为追求“技术栈丰富”加入没有价值的组件
- 在没有只读 baseline 与安全审批时控制真实设备
- 只展示 happy path，不公开失败模式
- 把云资源费用、隐私与运维责任留到最后

## 学习完成判据

- [ ] 新用户按 README 能在 30 分钟内运行核心流程。
- [ ] 项目在固定测试集上有明确结果，并优于合理 baseline。
- [ ] 一次任务可从用户请求追踪到每个工具调用、证据和最终结果。
- [ ] 高风险动作默认禁止或要求明确确认，且有审计记录。
- [ ] 能用 5 分钟讲清问题、架构、指标、取舍和失败复盘。
- [ ] 招聘者可以从仓库直接验证简历中的核心结论。

[← Stage 9](stage-09.md) · [回到 Roadmap](index.md)
