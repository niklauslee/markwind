import Mustache from "mustache";
import { generateCSS } from "./css";
import { htmlWrapper } from "./strings";
import { parse } from "./parser";
import { frontmatter } from "./frontmatter";

function generateCustomCSS(css: { [key: string]: string }): string {
  return Object.entries(css)
    .map(([selector, styles]) => `${selector} { ${styles} }`)
    .join("\n");
}

export async function transform(data: string): Promise<string> {
  const { meta, content } = frontmatter(data);
  const html = parse(content, meta);
  const css = await generateCSS(html);
  const customCss = generateCustomCSS(meta.css);
  const renderedHtml = await Mustache.render(htmlWrapper, {
    title: meta.title,
    content: html,
    customCss: `<style>${customCss}</style>`,
    css: `<style>${css}</style>`,
  });
  return renderedHtml;
}
