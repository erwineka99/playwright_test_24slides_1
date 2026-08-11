# UI Automation Test - Kredibel

This project contains UI automation tests for [Kredibel](https://www.kredibel.com/) using Playwright and TypeScript.

The goal is to automate several core user flows with a maintainable test structure, meaningful assertions, Page Object Model implementation, and parallel execution.

## Target Website

```text
https://www.kredibel.com/
```

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Page Object Model
- GitHub Actions

## Test Scope

The selected scenarios focus on common user interactions on Kredibel:

1. User can open the Kredibel homepage.
2. User can fill the account number search form.
3. User can fill the phone number check form.
4. User can open the fraud report page without submitting fake data.

These scenarios cover navigation, form interaction, URL validation, element visibility, input value validation, and page readiness.

## Project Structure

```text
soal1/
  .github/
    workflows/
      playwright.yml
  pages/
    KredibelHomePage.ts
  tests/
    kredibel.spec.ts
  playwright.config.ts
  package.json
  README.md
```

## Architecture

This project uses the Page Object Model pattern.

```text
pages/KredibelHomePage.ts
```

This file stores page locators and reusable page actions, such as:

- Opening the homepage.
- Opening the account search page.
- Opening the phone search page.
- Opening the fraud report page.
- Filling account and phone number fields.

```text
tests/kredibel.spec.ts
```

This file stores the test scenarios and assertions. The test file focuses on business flow validation, while locator details are kept inside the page object.

This structure makes the tests easier to maintain when UI selectors change.

## Playwright Configuration

The Playwright configuration is defined in:

```text
playwright.config.ts
```

Important settings:

- `testDir: './tests'`
- `fullyParallel: true`
- `workers: 2`
- `retries: 1`
- `reporter: 'html'`
- `trace: 'on-first-retry'`
- `screenshot: 'only-on-failure'`
- `video: 'retain-on-failure'`

Parallel execution is enabled to improve execution time.

## Installation

Install dependencies:

```bash
npm install
```

Install Playwright browsers if needed:

```bash
npx playwright install
```

## Running Tests

Run all tests:

```bash
npm test
```

Or run Playwright directly:

```bash
npx playwright test
```

Run tests with browser visible:

```bash
npm run test:headed
```

## Test Report

After running the tests, open the HTML report:

```bash
npm run report
```

The report is generated in:

```text
playwright-report/
```

The report can be used to review test status, execution duration, screenshots, videos, and traces when available.
