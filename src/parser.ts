import { Marked } from "marked";
import { createDirectives, presetDirectiveConfigs } from "marked-directive";

export function parse(
  content: string,
  wrapperTag: string = "article",
  wrapperClass: string = "prose "
): string {
  const marked = new Marked().use(
    createDirectives([
      ...presetDirectiveConfigs,
      // for nested containers
      { level: "container", marker: ":::::" },
      { level: "container", marker: "::::" },
    ])
  );
  const html = marked.parse(content);
  return `<${wrapperTag} class="${wrapperClass}">${html}</${wrapperTag}>`;
}
