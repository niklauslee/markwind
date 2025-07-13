import { createGenerator } from "@unocss/core";
import presetTypography from "@unocss/preset-typography";
import presetWind3 from "@unocss/preset-wind3";
import presetWebFonts from "@unocss/preset-web-fonts";

export async function generateCSS(htmlContent: string): Promise<string> {
  const uno = await createGenerator({
    presets: [
      presetWind3(),
      presetTypography(),
      presetWebFonts({
        provider: "google", // default provider
        fonts: {
          sans: "Geist",
          mono: "JetBrains Mono",
        },
      }),
    ],
    rules: [
      [".prose table", { width: "100%" }],
      ["thead", { width: "100%" }],
      ["tbody", { width: "100%" }],
    ],
  });
  const { css } = await uno.generate(htmlContent);
  return css;
}
