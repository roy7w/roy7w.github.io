# Stage 1 · Minimal Agent Loop

## 目标

不依赖高级 Agent 框架，从零实现一个可观察、可限制、可恢复的最小 Agent Loop，真正理解模型如何选择并调用工具。

## Todo

### LLM API

- [ ] 使用一个主流 LLM API 完成多轮对话。
- [ ] 正确维护 system、user、assistant 与 tool 消息。
- [ ] 控制 temperature、max tokens 与超时。
- [ ] 处理认证错误、网络错误、rate limit 与服务端错误。
- [ ] 为瞬时错误加入带退避的有限重试。
- [ ] 记录 request id、token usage、延迟与错误类型。

### Structured Output

- [ ] 让模型按 JSON Schema 输出结构化数据。
- [ ] 使用 Pydantic 或等价方案校验输出。
- [ ] 处理缺字段、类型错误和额外字段。
- [ ] 对可修复的非法结构实现一次有限修复。
- [ ] 对不可修复结果明确失败，不静默猜测。

### Tool Calling

- [ ] 自己定义 `calculator()`、`read_file()`、`get_time()` 等至少三个工具。
- [ ] 为每个工具写清 name、description、parameters 与返回值。
- [ ] 理解工具描述和 schema 如何影响模型选择。
- [ ] 解析模型产生的 tool call 与参数。
- [ ] 执行工具并把 observation 放回消息历史。
- [ ] 处理未知工具、非法参数、空结果与工具异常。
- [ ] 让最终答案明确区分工具事实与模型推断。

### Agent Loop 与边界

- [ ] 不使用 LangChain / LangGraph，实现完整 while-loop。
- [ ] 加入最大执行步数和总超时。
- [ ] 给每个工具加入独立超时。
- [ ] 捕获异常并返回机器可读错误。
- [ ] 检测完全相同的重复调用。
- [ ] 支持正常完成、失败结束与达到预算结束。
- [ ] 打印或保存完整 execution trace。
- [ ] 对读文件等工具限制允许访问的目录。
- [ ] 为至少五类任务编写自动化测试。

核心循环应能独立解释：

```python
while step < max_steps:
    response = llm(messages, tools)
    if response.tool_call:
        result = execute_tool(response.tool_call)
        messages.append(result)
    else:
        return response.answer
```

## 阶段产出

一个约 100–300 行的 Minimal Agent：

```text
User → LLM → Tool Selection → Tool Execution
  ↑                                  ↓
  └──────── Final Answer ← Observation
```

仓库包含代码、测试、示例 trace、架构图和 README。示例任务应能读取本地数据、计算统计量并总结结果。

## 暂不深入

- LangChain、LangGraph 等框架封装
- 长期记忆、向量数据库和复杂 RAG
- 多 Agent 协作
- 自动执行 shell、写文件或网络副作用

## 学习完成判据

- [ ] 能在白板上从消息序列解释一次完整 tool call。
- [ ] Agent 在测试集中能够正确完成至少 8/10 个基础任务。
- [ ] 超时、未知工具、非法参数和死循环都有可复现测试。
- [ ] 任意一次执行都能从 trace 中定位模型决策、工具输入输出和结束原因。

[← Stage 0](stage-00.md) · [下一阶段：Tool / RAG / Memory →](stage-02.md)
