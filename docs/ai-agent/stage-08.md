# Stage 8 · Inference / AI Infra

## 目标

在已有 Agent、评测和安全基线之上优化模型服务。新增本地推理、性能基准与资源治理，同时保证接口兼容和任务质量不退化。

## Todo

- [ ] <span data-task-id="s08-t000"></span>定义端到端延迟、首 token 延迟、吞吐、显存、成本和任务质量指标。
- [ ] <span data-task-id="s08-t001"></span>记录当前远程 API 的基线、限流、故障和兼容性表现。
- [ ] <span data-task-id="s08-t002"></span>用 vLLM 或等价方案部署一个本地 OpenAI-compatible 模型服务。
- [ ] <span data-task-id="s08-t003"></span>验证结构化输出、Tool calling、并发、取消、超时和错误协议兼容性。
- [ ] <span data-task-id="s08-t004"></span>比较模型、量化、上下文长度、batch 与并发配置的性能和质量。
- [ ] <span data-task-id="s08-t005"></span>用 Stage 6 回归任务证明服务切换没有破坏 Agent 行为。
- [ ] <span data-task-id="s08-t006"></span>整理启动、监控、容量、故障切换和资源预算文档。
- [ ] <span data-task-id="s08-t013"></span>可选：为 Stage 7 策略评估边缘设备推理、ROS 2 集成与实时性。

## 产出

- v2.5 Deployment Benchmark。
- 可复现的本地模型服务配置、性能仪表和远程/本地切换策略。
- 一份同时报告性能、质量、资源与失败模式的基准报告。

## 完成判据

- Agent Client 可在远程与本地服务间切换，核心协议和错误语义保持一致。
- 基准结果可以复现，并同时覆盖性能与任务质量。
- 超载、服务中断或模型不兼容时有明确降级和恢复路径。
- 若部署 VLA，机器人侧延迟和安全约束也通过独立验收。

[上一阶段](stage-07.md) · [返回总览](index.md) · [下一阶段](stage-09.md)
