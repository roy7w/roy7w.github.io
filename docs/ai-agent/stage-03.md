# Stage 3 · Agent Harness + LangGraph + Backend

## 目标

理解现代 Agent Harness 如何管理状态、工具、上下文、权限和追踪；选一个主框架把前两阶段的 demo 升级成可维护的后端服务。

## Todo

### Agent Harness

- [ ] 能解释 Harness 与 Stage 1 裸 while-loop 的区别。
- [ ] 在一个真实 Agent 项目中找到 Agent Loop 与 Tool Registry。
- [ ] 找到 Session Store 与 Context Management。
- [ ] 找到 Permission Gate、Retry、Trace 与 Logging。
- [ ] 观察并解释一次完整 execution trace。
- [ ] 理解 checkpoint、resume、interrupt 与 human approval。
- [ ] 理解模型、工具、存储和运行时之间的接口边界。

### LangGraph

- [ ] 理解 State、Node、Edge 与 Conditional Edge。
- [ ] 理解 reducer 以及并发更新 state 的规则。
- [ ] 实现 checkpoint 并从中断处恢复。
- [ ] 实现 interrupt 与 human-in-the-loop。
- [ ] 实现有限 retry、fallback 与错误节点。
- [ ] 把 Stage 1 的裸 Agent Loop 改写成 Graph。
- [ ] 把 Stage 2 的检索、分析与回答拆成可追踪节点。
- [ ] 为关键节点编写单元测试和集成测试。

示例：

```text
START → Planner → Search → Enough evidence?
                      ↙ No          Yes ↘
                  Search again       Answer → END
```

### Backend Engineering

- [ ] 使用 FastAPI 创建 REST API。
- [ ] 用 Pydantic 定义 request / response schema。
- [ ] 理解 async / await，避免阻塞事件循环。
- [ ] 实现 SSE 或等价 streaming response。
- [ ] 统一处理异常、错误码和日志字段。
- [ ] 保存 Agent session 与历史任务。
- [ ] 掌握 SQLite；用 PostgreSQL 完成基本 CRUD。
- [ ] 知道 Redis 在缓存、锁、队列和短期状态中的用途。
- [ ] 使用 `.env` 或安全配置系统管理环境变量。
- [ ] 使用 uv / pip / poetry 中的一种管理依赖。
- [ ] 用 pytest 完成核心路径测试。
- [ ] 编写 Dockerfile 与健康检查。
- [ ] 加入 `.gitignore`、README 和最小 CI。

## 阶段产出

把 Research Agent 升级为 Docker 化服务：

```text
Client → FastAPI → Agent Harness / LangGraph
                      ├── RAG
                      ├── Search
                      ├── Python
                      └── Session Database
```

支持流式响应、任务恢复、持久化会话、错误追踪和最小权限配置。

## 暂不深入

- 同时学习多个 Agent 编排框架
- Kubernetes、Service Mesh 与复杂微服务拆分
- 过早引入消息队列和多套数据库
- 为所有节点设计抽象层而没有真实需求

## 学习完成判据

- [ ] 能从源码指出 loop、state、tool registry、checkpoint 与 permission gate。
- [ ] 服务重启后可以恢复至少一类中断任务。
- [ ] API schema、失败响应、流式输出与会话隔离均有测试。
- [ ] 新环境能用一个明确命令启动完整服务。
- [ ] 能从 trace 定位一次真实失败并写出复盘。

[← Stage 2](stage-02.md) · [下一阶段：Skills / MCP →](stage-04.md)
