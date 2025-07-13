import Mustache from "mustache";
import { generateUnoCSS } from "./unocss";
import { htmlWrapper } from "./strings";
import { parse } from "./parser";

export async function transform(data: string): Promise<string> {
  const html = parse(data);
  const css = await generateUnoCSS(html);

  // render the HTML
  const renderedHtml = await Mustache.render(htmlWrapper, {
    content: html,
    css: `<style>${css}</style>`,
  });
  return renderedHtml;
}
