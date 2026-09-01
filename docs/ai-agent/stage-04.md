# Stage 4 · Skills + MCP

## 目标

把可复用的任务方法封装成 Skill，把外部能力通过 MCP 标准化暴露；理解 Tool、Prompt、Skill、Resource 与 Protocol 的边界。

## Todo

### Tool / Prompt / Skill

- [ ] 能分别解释 Tool、Prompt 与 Skill。
- [ ] 说明 Skill 与 Tool、Skill 与普通系统提示的区别。
- [ ] 理解 Skill 为什么需要触发条件、步骤、资源和验收标准。
- [ ] 写一个最小 `SKILL.md`。
- [ ] 定义适用场景与明确的非适用场景。
- [ ] 把复杂流程拆成可以验证的步骤。
- [ ] 为 Skill 配一个脚本、模板或参考资料。
- [ ] 定义输入、输出与失败处理。
- [ ] 编写 smoke test 与至少一个反例。
- [ ] 为 Skill 建立版本记录和变更说明。

### MCP 概念

- [ ] 理解 MCP 出现的工程动机。
- [ ] 区分 MCP Client 与 MCP Server。
- [ ] 区分 Tool、Resource 与 Prompt。
- [ ] 理解 capability discovery 与 schema negotiation。
- [ ] 理解 JSON-RPC 的请求、响应与错误结构。
- [ ] 理解 stdio transport 与 HTTP transport 的差别。
- [ ] 知道生命周期、连接、超时与取消如何处理。

### MCP 实践

- [ ] 运行一个已有 MCP Server。
- [ ] 从 Agent 连接并发现 Server 提供的能力。
- [ ] 自己实现一个 MCP Server。
- [ ] 注册多个严格 schema 的工具。
- [ ] 暴露一个只读 Resource。
- [ ] 正确返回工具错误和空结果。
- [ ] 为工具设置身份验证、权限与速率限制。
- [ ] 防止外部 Resource 中的提示注入覆盖系统指令。
- [ ] 对 Server 进行单元测试和端到端测试。

应能解释：

```text
Agent → MCP Client → Transport → MCP Server
                               ├── Tool
                               ├── Resource
                               └── Prompt
```

## 阶段产出

创建 `research-mcp`：提供 `search_papers()`、`read_document()`、`run_analysis()` 等能力，并让 Stage 3 的 Agent 通过 MCP 使用；再写一个研究流程 Skill，规定何时检索、如何引用和如何验收。

## 暂不深入

- A2A、ACP 等其他协议的实现细节
- 构建通用 MCP 网关或大型插件市场
- 在没有权限模型时暴露写文件、shell 和控制设备能力
- 把每个普通函数都包装成 MCP Server

## 学习完成判据

- [ ] 能用一个例子清楚区分 Tool、Skill 与 MCP。
- [ ] 新 Agent 无需修改 Server 代码即可发现并调用能力。
- [ ] MCP Server 的合法、非法、超时和无权限请求均有测试。
- [ ] Skill 有可重复的 smoke test 和明确验收结果。
- [ ] 断开 MCP 后，Agent 能给出清晰降级或失败信息。

[← Stage 3](stage-03.md) · [下一阶段：Multi-Agent →](stage-05.md)
