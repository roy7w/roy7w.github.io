# Stage 0 · LLM 与 Agent 技术地图

## 目标

在开始写 Agent 之前建立统一概念和系统边界。这个阶段不要求连接机器人；它为 Stage 1 提供消息、Tool、Observation、上下文与安全分层方面的共同语言。

## Todo

- [x] <span data-task-id="s00-t000"></span>区分 Chatbot、Workflow、Agent 与 Multi-Agent 的适用场景。
- [x] <span data-task-id="s00-t001"></span>理解 Agent Loop：决策、Action、Observation、再决策。
- [x] <span data-task-id="s00-t004"></span>梳理 Tool、State、Memory、RAG、Workflow 与 Eval 的职责。
- [x] <span data-task-id="s00-t005"></span>理解 MCP、Skill 与 Agent Harness 分别解决什么问题。
- [x] <span data-task-id="s00-t006"></span>理解 token、tokenizer、embedding 与 vocabulary 的关系。
- [ ] <span data-task-id="s00-t007"></span>理解 Transformer、训练、推理和上下文窗口的基本关系。
- [ ] <span data-task-id="s00-t008"></span>掌握 system/user/assistant/tool 消息和常用生成参数的作用。
- [ ] <span data-task-id="s00-t009"></span>识别幻觉、提示注入、上下文污染和权限越界风险。
- [ ] <span data-task-id="s00-t010"></span>写出本项目的技术选择与边界说明。

## 产出

- 一张从用户输入到机器人反馈的概念图。
- 一页技术选择说明：为什么先用纯 Python Mock，再接 ROS 2。

## 完成判据

- 能用自己的话解释 Workflow 与 Agent 的区别。
- 能说明消息、Tool 调用、Observation 在一次循环中的数据边界。
- 能解释为什么 LLM 不能承担实时控制与硬件安全职责。

[返回总览](index.md) · [下一阶段](stage-01.md)
