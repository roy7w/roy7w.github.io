# Stage 8 · Inference + vLLM + Infra Basics

## 目标

理解 LLM 推理的资源与性能约束，使用 vLLM 部署一个兼容 API 的模型服务，并能用数据解释吞吐、延迟、显存、质量和成本之间的取舍。

## Todo

### 推理基础

- [ ] 区分 prefill 与 decode 阶段。
- [ ] 理解 TTFT、TPOT、end-to-end latency 与 throughput。
- [ ] 理解 KV cache 为什么占用显存。
- [ ] 理解 context length、batch size 与并发的关系。
- [ ] 区分模型权重精度、KV cache 精度与计算精度。
- [ ] 理解量化带来的显存、速度与质量取舍。
- [ ] 知道 continuous batching 与 paged attention 的作用。
- [ ] 理解 streaming、stop、sampling 和 chat template。

### vLLM 实践

- [ ] 安装并启动一个 vLLM OpenAI-compatible server。
- [ ] 正确加载 tokenizer、chat template 与模型权重。
- [ ] 调用 chat / completion API 并流式输出。
- [ ] 设置最大上下文、显存利用率与并发限制。
- [ ] 运行单请求与多并发 benchmark。
- [ ] 观察 OOM、排队、超时和取消行为。
- [ ] 部署 Stage 6 的 adapter 或合并模型。
- [ ] 为服务加入 health check、日志与基本指标。

### Infra Basics

- [ ] 理解 GPU memory、compute、memory bandwidth 的基本关系。
- [ ] 能使用系统工具观察 GPU 利用率、显存和功耗。
- [ ] 理解 tensor parallel、pipeline parallel 与 data parallel 的用途。
- [ ] 知道模型加载、冷启动与权重缓存的成本。
- [ ] 使用 Docker 固化运行环境。
- [ ] 理解 API gateway、鉴权、rate limit 和 autoscaling 的位置。
- [ ] 估算一次请求的 token 成本和服务容量。
- [ ] 为模型不可用设计超时、fallback 与降级。

### 性能实验

- [ ] 固定模型、硬件、数据集与推理参数。
- [ ] 比较不同并发、上下文长度与输出长度。
- [ ] 比较至少一种量化与未量化结果。
- [ ] 同时报告 P50/P95、TTFT、tokens/s、显存与质量变化。
- [ ] 避免只报告峰值吞吐而忽略尾延迟。

## 阶段产出

提交一套可复现的本地模型服务与 benchmark 报告：

```text
Client → API Gateway → vLLM → Model / Adapter
                    ↘ Metrics / Logs
```

报告说明硬件、模型、参数、负载、性能曲线、成本估算、瓶颈与推荐配置。

## 暂不深入

- CUDA Kernel、Triton 与 FlashAttention 实现
- TensorRT-LLM / SGLang 的全面横向比较
- 大规模 Kubernetes 与多地域调度
- 分布式训练、RDMA 与 NCCL 调优

## 学习完成判据

- [ ] 另一个人可以用 README 启动兼容 API 的推理服务。
- [ ] 能解释一次请求的 prefill、decode 与 KV cache 开销。
- [ ] benchmark 可重复，并同时报告延迟、吞吐、显存和质量。
- [ ] 面对 OOM 或高尾延迟，能提出有依据的调参顺序。
- [ ] Agent 可切换远程 API 与本地 vLLM，而不改核心业务逻辑。

[← Stage 7](stage-07.md) · [下一阶段：Browser / Computer Use →](stage-09.md)
