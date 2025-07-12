import { Marked } from "marked";
import { createDirectives, presetDirectiveConfigs } from "marked-directive";
import Mustache from "mustache";
import { modernNormalizeCss, htmlWrapper } from "./strings";
import config from "./config.json";

type Config = {
  css: Record<string, string>;
};

function getCss(config: Config) {
  // convert config CSS object to a string
  return Object.entries(config.css)
    .map(([key, value]) => `.${key} { ${value} }`)
    .join("\n");
}

export async function transform(data: string): Promise<string> {
  // prepare marked with directives
  const marked = new Marked().use(
    createDirectives([
      ...presetDirectiveConfigs,
      // for nested containers
      { level: "container", marker: ":::::" },
      { level: "container", marker: "::::" },
    ])
  );

  // parse and render the markdown data
  const html = marked.parse(data);

  // get the CSS from the config
  const css = getCss(config as Config);

  // render the HTML
  const renderedHtml = await Mustache.render(htmlWrapper, {
    content: html,
    preflight: `<style>${modernNormalizeCss}</style>`,
    css: `<style>${css}</style>`,
  });
  return renderedHtml;
}
