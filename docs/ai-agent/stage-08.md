# Stage 8 · Inference / AI Infra / Edge Deployment

## 目标与项目增量

把 AI Infra 作为主项目性能增强，交付 **v2.5**。Stage 7 跳过时，本阶段仍可完成 LLM 决策服务；无需先学 K8s、复杂集群调度或分布式训练。

## 步骤 1 · 推理原理 → 拆分延迟来源

- [ ] 理解 prefill / decode / KV cache / batch / continuous batching。 <span data-task-id="s08-t000"></span>
- [ ] 理解 TTFT / TPOT / throughput / latency，并区分服务耗时与机器人执行耗时。 <span data-task-id="s08-t001"></span>
- [ ] 理解 FP32 / FP16 / BF16 / INT8 / INT4 的精度、显存和性能权衡。 <span data-task-id="s08-t002"></span>
- [ ] 测量现有远程 API 基线：输入输出长度、并发、token、延迟和任务结果。 <span data-task-id="s08-t003"></span>

项目同步：先查清瓶颈是 LLM、检索、通信、规划还是机械动作，不把机器人耗时算作模型推理优化收益。

## 步骤 2 · vLLM 服务 → 替换决策后端

- [ ] 选择硬件支持的模型与精度，固定模型、vLLM 和 GPU 软件版本。 <span data-task-id="s08-t004"></span>
- [ ] 启动 vLLM OpenAI-compatible API，用 Docker 记录可复现配置。 <span data-task-id="s08-t005"></span>
- [ ] 接入现有 Agent Planner，验证 messages、structured output 与 tool calling 的实际兼容性。 <span data-task-id="s08-t006"></span>
- [ ] 用 GPU monitoring 记录显存、利用率与错误，设置服务 timeout 与并发限制。 <span data-task-id="s08-t007"></span>
- [ ] 对比远程 API 与本地模型的正确率、工具格式、安全拒绝率与资源成本。 <span data-task-id="s08-t008"></span>

## 步骤 3 · Benchmark → 可解释的优化

- [ ] 固定任务、prompt、输出长度、硬件与并发，区分冷启动和预热结果。 <span data-task-id="s08-t009"></span>
- [ ] 比较 batch、精度或量化配置，报告 TTFT、TPOT、吞吐、P50/P95 latency 与显存。 <span data-task-id="s08-t010"></span>
- [ ] 复用 Stage 6 任务集，确认优化没有破坏任务质量与安全门。 <span data-task-id="s08-t011"></span>
- [ ] 给出瓶颈、收益、质量损失和默认部署配置；效果不好也保留负结果。 <span data-task-id="s08-t012"></span>

## 步骤 4 · VLA / Edge（仅 Stage 7 完成后按需做）

- [ ] 评估 VLA 导出到 ONNX Runtime / TensorRT 的算子、形状和模型兼容性。 <span data-task-id="s08-t013"></span>
- [ ] 比较原始与优化后策略的数值误差、quantization 效果和任务成功率。 <span data-task-id="s08-t014"></span>
- [ ] 有 Jetson 时验证 edge inference 的功耗、内存、热稳定性与控制频率。 <span data-task-id="s08-t015"></span>
- [ ] 检查延迟超限、策略异常与连接丢失时的停止和回退行为。 <span data-task-id="s08-t016"></span>

## 最终架构

```text
Local LLM/VLM（按服务实际支持选择） → vLLM → Agent Planner → MCP/Skills
                                                             ↓
                                                  Safety / Motion Approval
                                                             ↓
                                                  ROS2/MoveIt2 或 VLA → UR7e
```

VLA 策略按模型支持使用独立推理运行时，不能假设所有 VLA 都能交给 vLLM 执行动作推理。

## 产出与完成判据 · v2.5

- [ ] 发布部署配置、benchmark 脚本、硬件清单、性能表和质量回归结果。 <span data-task-id="s08-t017"></span>
- [ ] 相同任务可以切换决策后端，安全边界与审批行为一致。 <span data-task-id="s08-t018"></span>
- [ ] 明确实测收益与局限；未做 VLA / Jetson 时标记可选未完成，不影响 LLM 部署验收。 <span data-task-id="s08-t019"></span>


[← Stage 7](stage-07.md) · [路线总览](index.md) · [Stage 9 →](stage-09.md)
