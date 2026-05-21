# Playwright Tests

A TypeScript-based Playwright testing project for automated end-to-end testing.

## Setup

### Prerequisites
- Node.js v20.19.6 or higher
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/PavanAnabathula/PlaywrightTests.git
cd PlaywrightTests
```

2. Install dependencies:
```bash
npm install
```

## Project Structure

```
.
├── tests/              # Test files (*.spec.ts)
├── src/                # Example scripts
├── playwright.config.ts # Playwright configuration
├── tsconfig.json       # TypeScript configuration
├── package.json        # Project dependencies
└── .gitignore         # Git ignore rules
```

## Available Scripts

- **`npm test`** - Run all tests
- **`npm run dev`** - Run example script
- **`npm start`** - Run example script

## Running Tests

```bash
npm test
```

Tests will run on:
- Chromium
- Firefox
- WebKit

## Configuration

Edit `playwright.config.ts` to customize:
- Test timeout
- Retry policy
- Browser options
- Reporter settings
- Web server configuration

## Technologies

- **Playwright** v1.60.0 - Browser automation
- **TypeScript** v6.0.3 - Type-safe JavaScript
- **@playwright/test** v1.60.0 - Testing framework

## License

ISC
