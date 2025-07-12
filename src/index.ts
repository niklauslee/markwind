import { Marked } from "marked";
import { createDirectives, presetDirectiveConfigs } from "marked-directive";
import { access, constants, readFile } from "node:fs/promises";
import Mustache from "mustache";
import path from "node:path";
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

// async function loadTemplate(templateName: string): Promise<string> {
//   let filePath = path.join(__dirname, `../res/templates/${templateName}.html`);
//   let template;

//   // check if template file is built-in or custom
//   try {
//     await access(filePath, constants.F_OK);
//   } catch (err) {
//     filePath = templateName;
//   }

//   // read the template file
//   try {
//     template = await readFile(filePath, "utf8");
//   } catch (err) {
//     throw new Error(`Template file not found: ${filePath}`);
//   }

//   return template;
// }

async function loadTheme(themeName: string): Promise<string> {
  let filePath = path.join(__dirname, `../res/themes/${themeName}.css`);
  let theme;

  // check if theme file is built-in or custom
  try {
    await access(filePath, constants.F_OK);
  } catch (err) {
    filePath = themeName;
  }

  // read the theme file
  try {
    theme = await readFile(filePath, "utf8");
  } catch (err) {
    throw new Error(`Theme file not found: ${filePath}`);
  }

  return theme;
}

export async function transform(
  data: string,
  template: string = "default",
  theme: string = "default"
): Promise<string> {
  // prepare marked with directives
  const marked = new Marked().use(
    createDirectives([
      ...presetDirectiveConfigs,
      // custom directives
      { level: "container", marker: ":::::" },
      { level: "container", marker: "::::" },
    ])
  );

  // parse and render the markdown data
  const html = marked.parse(data);

  // get the CSS from the config
  const css = getCss(config as Config);

  // load template and theme
  // const templateHtml = await loadTemplate(template);
  // const themeCss = await loadTheme(theme);

  // render the HTML
  const renderedHtml = await Mustache.render(htmlWrapper, {
    content: html,
    preflight: `<style>${modernNormalizeCss}</style>`,
    css: `<style>${css}</style>`,
  });
  return renderedHtml;
}
