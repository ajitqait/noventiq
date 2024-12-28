
This has been created solely for submission as part of the Noventiq assignment


This framework is designed to be used as a template to start automation testing quickly for any web application. The page object model is used to structure the test.

## Built With

- [Playwright](https://playwright.dev)
- [Typescript](https://www.typescriptlang.org/)

## Installation

Prerequisites:
NodeJS 14(or above)

- Clone the repo using the below URL
https://github.com/ajitsinghqa/playwright-typescript-pom.git
- Navigate to the folder and install npm packages using:
```bash
- npm install
```

- Install Playwright browsers
```bash
- npx @playwright/test install
```

## Usage

- Run all the spec files present in the "./tests" directory by using the below command on all projects like chromium ,firefox,webkit
```bash
npm run test
```
- Run all the spec files present in the "./tests" directory by using the below command on specifc browser 
```bash
npx playwright test tests/login.spec.ts --project=chromium
```

- Run specific spec file
```bash
npx playwright test tests/{specfile_name.ts}
```






