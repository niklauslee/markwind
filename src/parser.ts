import { Marked } from "marked";
import { createDirectives, presetDirectiveConfigs } from "marked-directive";

export function parse(content: string, meta: { [key: string]: any }): string {
  const marked = new Marked().use(
    createDirectives([
      ...presetDirectiveConfigs,
      // for nested containers
      { level: "container", marker: ":::::" },
      { level: "container", marker: "::::" },
    ])
  );
  const html = marked.parse(content);
  return `<body class="${meta.bodyClass}"><${meta.wrapperTag} class="${meta.wrapperClass}">${html}</${meta.wrapperTag}></body>`;
}
