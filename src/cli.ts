#!/usr/bin/env node

import { readFileSync, writeFileSync } from "node:fs";
import { Command } from "commander";
import packageJson from "../package.json";
import path from "node:path";
import { transform } from ".";

const program = new Command();

program
  .name("markwind")
  .version(packageJson.version)
  .description("A CLI tool to generate style-rich HTML doc from markdown.")
  .argument("<file>", "input markdown file (.md) to transform")
  .option("-o, --output <output>", "specify output file")
  .action(async (file: string, options: { output: string }) => {
    try {
      const data = readFileSync(file, "utf8");
      const html = await transform(data);
      const defaultOutput = `${path.parse(file).name}.html`;
      const output = options.output || defaultOutput;
      writeFileSync(output, html);
      console.log(`output: ${output}`);
    } catch (error) {
      console.error("Error during transformation:", error);
    }
  });

program.parse();
