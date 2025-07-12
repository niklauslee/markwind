#!/usr/bin/env node

import { Command } from "commander";
import { Markwind, utils } from "./index";

const program = new Command();

program
  .name("markwind")
  .description("A TypeScript library with CLI functionality")
  .version("1.0.0");

// Create command
program
  .command("create")
  .description("Create a new Markwind instance")
  .option("-n, --name <name>", "specify name", "Default")
  .action((options: { name: string }) => {
    const markwind = new Markwind(options.name);
    console.log(`✨ Created Markwind instance: ${markwind.getName()}`);
  });

// Process command
program
  .command("process")
  .description("Process text with Markwind")
  .argument("<text>", "text to process")
  .option("-n, --name <name>", "specify name", "Markwind")
  .action((text: string, options: { name: string }) => {
    const markwind = new Markwind(options.name);
    const result = markwind.processText(text);
    console.log(result);
  });

// Transform command
program
  .command("transform")
  .description("Transform JSON data")
  .argument("<data>", "JSON data to transform")
  .action((data: string) => {
    try {
      const parsedData = JSON.parse(data);
      const markwind = new Markwind();
      const result = markwind.transform(parsedData);
      console.log(result);
    } catch (error) {
      console.error("❌ Invalid JSON data:", error);
      process.exit(1);
    }
  });

// Utils commands
const utilsCmd = program.command("utils").description("Utility functions");

utilsCmd
  .command("capitalize")
  .description("Capitalize text")
  .argument("<text>", "text to capitalize")
  .action((text: string) => {
    console.log(utils.capitalize(text));
  });

utilsCmd
  .command("check-empty")
  .description("Check if text is empty")
  .argument("<text>", "text to check")
  .action((text: string) => {
    const isEmpty = utils.isEmpty(text);
    console.log(`Text "${text}" is ${isEmpty ? "empty" : "not empty"}`);
  });

// Example command for interactive usage
program
  .command("example")
  .description("Show usage examples")
  .action(() => {
    console.log(`
📚 Markwind CLI Examples:

# Create a new instance
markwind create --name "MyApp"

# Process text
markwind process "Hello World" --name "MyProcessor"

# Transform JSON
markwind transform '{"name": "test", "value": 123}'

# Utility functions
markwind utils capitalize "hello world"
markwind utils check-empty ""

# Library usage in code:
import { Markwind, utils } from 'markwind';

const app = new Markwind('MyApp');
console.log(app.processText('Hello'));
console.log(utils.capitalize('hello'));
    `);
  });

program.parse();
