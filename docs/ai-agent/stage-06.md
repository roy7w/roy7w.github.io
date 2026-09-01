# Stage 6 · SFT + LoRA + QLoRA

## 目标

理解微调在 Agent 应用中的正确位置，亲手完成一次小模型 PEFT 训练、评测与部署；用数据证明它是否比 prompt 或 RAG 更适合当前问题。

## Todo

### 问题判断

- [ ] 区分知识缺失、行为不稳定、格式错误和工具能力缺失。
- [ ] 能判断何时优先使用 prompt、RAG、tool 或 fine-tuning。
- [ ] 为训练目标定义可测量指标和 baseline。
- [ ] 明确数据许可证、隐私和允许使用范围。

### 数据与 SFT

- [ ] 理解 instruction、input、output 与 chat template。
- [ ] 构造、清洗并版本化 instruction dataset。
- [ ] 去重并检查训练集/验证集泄漏。
- [ ] 设计训练、验证与测试划分。
- [ ] 检查输出长度、类别分布和异常样本。
- [ ] 理解 teacher forcing、cross-entropy loss 与 masking。
- [ ] 使用 Hugging Face Transformers 或等价工具完成一次 SFT。
- [ ] 保存训练配置、随机种子和数据版本。

### LoRA / QLoRA

- [ ] 理解全量微调与 PEFT 的资源差异。
- [ ] 理解 LoRA 的 rank、alpha、dropout 与 target modules。
- [ ] 理解 QLoRA 的量化基座、计算精度与 adapter 训练。
- [ ] 理解 learning rate、batch size、gradient accumulation、warmup 与 epochs。
- [ ] 监控 train / eval loss、显存、吞吐与训练时间。
- [ ] 保存、加载并合并 adapter。
- [ ] 验证训练后 chat template 与推理参数一致。

### 评测与部署

- [ ] 在训练前固定测试集。
- [ ] 比较 base、prompt baseline、LoRA 与 QLoRA。
- [ ] 检查过拟合、灾难性遗忘和格式退化。
- [ ] 做人工盲评或基于 rubric 的成对比较。
- [ ] 导出 adapter 和最小推理服务。
- [ ] 编写 model card / data card，记录限制和风险。

## 阶段产出

选择 Qwen、Llama 或 Gemma 等可用小模型，完成：

```text
Task Definition → Dataset → SFT with LoRA / QLoRA
     → Evaluation → Adapter → Inference Demo
```

提交数据处理脚本、配置、学习曲线、对照评测、adapter 使用说明与失败样例。

## 暂不深入

- DPO、Reward Model、PPO、GRPO 与完整 RLHF
- 多机多卡训练、DeepSpeed 与 FSDP 深入
- 从头预训练大模型
- 没有合规检查的线上对话数据训练

## 学习完成判据

- [ ] 能解释为什么当前任务需要微调而非 RAG。
- [ ] 同一配置可以复现近似训练曲线和指标。
- [ ] 微调模型在固定测试集上优于强 prompt baseline，而不是只展示好例子。
- [ ] 能从显存和质量角度说明 LoRA 与 QLoRA 的取舍。
- [ ] model card 明确训练数据、适用范围、限制和已知失败模式。

[← Stage 5](stage-05.md) · [下一阶段：Eval / Observability / Safety →](stage-07.md)
