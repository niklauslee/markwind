import Mustache from "mustache";
import { generateCSS } from "./css";
import { htmlWrapper } from "./strings";
import { parse } from "./parser";

export async function transform(data: string): Promise<string> {
  const html = parse(data, "article", "prose prose-truegray font-sans mx-auto");
  const css = await generateCSS(html);

  // render the HTML
  const renderedHtml = await Mustache.render(htmlWrapper, {
    content: html,
    css: `<style>${css}</style>`,
  });
  return renderedHtml;
}
