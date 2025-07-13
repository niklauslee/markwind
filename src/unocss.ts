import { createGenerator } from "@unocss/core";
import presetTypography from "@unocss/preset-typography";
import presetWind3 from "@unocss/preset-wind3";
// import presetWind4 from "@unocss/preset-wind4";

export async function generateUnoCSS(htmlContent: string): Promise<string> {
  const uno = await createGenerator({
    presets: [presetWind3(), presetTypography()],
    // user rules
  });
  const { css } = await uno.generate(htmlContent);
  return css;
}
