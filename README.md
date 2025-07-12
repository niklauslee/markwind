# Markwind

A TypeScript library with CLI functionality that provides text processing and utility functions.

## Features

- 🚀 TypeScript library with full type definitions
- ⚡ CLI interface for command-line usage
- 🛠️ Utility functions for common operations
- 📦 Published as both library and CLI tool
- ✅ Comprehensive test coverage

## Installation

### As a Library

```bash
npm install markwind
```

### As a CLI Tool

```bash
npm install -g markwind
```

## Usage

### Library Usage

```typescript
import { Markwind, utils } from "markwind";

// Create an instance
const app = new Markwind("MyApp");

// Process text
const result = app.processText("Hello World");
console.log(result); // [MyApp] Processing: Hello World

// Transform data
const data = { name: "test", value: 123 };
const json = app.transform(data);
console.log(json);

// Use utility functions
console.log(utils.capitalize("hello")); // Hello
console.log(utils.isEmpty("")); // true
```

### CLI Usage

```bash
# Create a new instance
markwind create --name "MyApp"

# Process text
markwind process "Hello World" --name "MyProcessor"

# Transform JSON data
markwind transform '{"name": "test", "value": 123}'

# Utility functions
markwind utils capitalize "hello world"
markwind utils check-empty ""

# Show examples
markwind example
```

## API Reference

### Markwind Class

#### Constructor

- `new Markwind(name?: string)` - Create a new Markwind instance

#### Methods

- `getName(): string` - Get the current name
- `setName(name: string): void` - Set a new name
- `processText(text: string): string` - Process text with name prefix
- `transform(data: unknown): string` - Transform data to JSON string

### Utils

- `utils.isEmpty(str: string): boolean` - Check if string is empty
- `utils.capitalize(str: string): string` - Capitalize first letter

## Development

### Setup

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix
```

### Scripts

- `npm run build` - Build TypeScript to JavaScript
- `npm run build:watch` - Build in watch mode
- `npm run dev` - Run CLI in development mode
- `npm start` - Run built CLI
- `npm test` - Run tests
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
