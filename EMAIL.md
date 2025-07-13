---
title: Email
wrapperClass: max-w-[500px] mx-auto bg-white my-0 font-mono
---

We are so glad to announce StarUML V7 release. The key changes in V7 are as follows.

## Device-based licensing model

Starting from V7, the licensing model is changing from a user-based model to a device-based model. There have been concerns about the legal ambiguity and management difficulties of the user-based licensing model. The device-based licensing model is much clearer since it only manages the number of devices on which the software can be installed and used, eliminating legal ambiguity. Additionally, it provides convenience for license administrators, as they can easily check and manage the installed devices through a separate web-based [license manager](https:/v7.staruml-io-astro.pages.dev/license-manager).

---

## Mermaid Support

StarUML is highly suitable for creating professional and sophisticated software models. However, sometimes there is a need to quickly and easily generate initial diagrams. In such cases, text-based diagramming languages like [Mermaid](https://mermaid.js.org/) are very efficient. In V7, a feature is provided that instantly generates the corresponding diagram with the **Tools > Generate Diagram by Mermaid...** menu. It supports seven types of Mermaid diagrams: class diagram, sequence diagram, state diagram, flowchart, entity-relationship diagram, requirement diagram, and mindmap.

![Mermaid Support](https:/v7.staruml-io-astro.pages.dev/images/blog/mermaid.png) Mermaid Support

---

## Azure Architecture Diagram (Pro)

Until now, architecture support has been provided for AWS and GCP to design cloud-based systems. In the Professional edition of V7, support for designing [Microsoft Azure](https://azure.microsoft.com/) architecture is also included.

![Azure Architecture](https:/v7.staruml-io-astro.pages.dev/images/blog/azure-architecture.png) Azure Architecture Diagram

---

## AI integration via MCP

Artificial intelligence is currently the hottest and most important topic. With AI being integrated into all products and services, productivity is significantly increasing. Starting from StarUML V7, an [MCP (Model Context Protocol)](https://modelcontextprotocol.io) server is provided to enable integration with AI. By adding the [StarUML MCP server](https://github.com/staruml/staruml-mcp-server) to existing AI services such as Claude and Cursor, users can easily generate diagrams or create source code, database schemas, etc., from existing diagrams. Here are some example prompts:

- _"Create a class diagram for book store in StarUML"_
- _"Create a sequence diagram for OAuth authentication in StarUML"_
- _"Generate SQL DDL from the current ERD diagram in StarUML"_

![AI integration via MCP](https:/v7.staruml-io-astro.pages.dev/images/blog/mcp-server.png) AI integration via MCP

---

There are more features and resolved issues except for the described in this article. You can find them in the [changelog](https:/v7.staruml-io-astro.pages.dev/changelog). Hope you enjoy and satisfies with the new StarUML V7. Thank you.

:::div{.bg-sky-200 .p-6}
MKLabs Co., Ltd.
:::
