
## Getting Started

**jest**: This is the core Jest library, a popular JavaScript testing framework developed by Facebook. It provides the test runner and assertion library.


1- **Create you project** : `npx create-next-app@latest`


2- **Version requirements**: (to avoid compatibility problem)
   - `"next": "14.0.3"`
   - `"react": "^18"`


3- **Install jest and required libraries**: 

  `npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/dom @testing-library/jest-dom ts-node`

  `@types/jest`: This package provides TypeScript type definitions for Jest. It enables better autocomplete and type-checking when writing tests in TypeScript.

  `@testing-library/react`: This is a set of helpers that allow you to test React components without relying on their implementation details, it encourages better testing practices.

  `@testing-library/jest-dom`: This package extends Jest with custom matchers for asserting on DOM nodes, making it easier to test the state of the DOM in your tests.

  `jest-environment-jsdom`: This package provides a simulated DOM environment for Jest tests. It's necessary when testing React components that interact with the DOM, as Next.js components often do

4- **Init jest**:

  `npm init jest@latest`

5- **Update** `jest.config.ts` file:
 
   ```
    import type { Config } from 'jest'
import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
 
// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}
 
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)

```
Add `jest.setup.ts` file with this content:

```
    "types": ["@testing-library/jest-dom"],
```

6- **Update tsconfig.json file** :

Add this ` "types": ["@testing-library/jest-dom"] `to  `compilerOptions` 

7-**@types/jest**

Check if @types/jest is already installed

`npm ls @types/jest`

If not installed, add it to devDependencies

`npm install --save-dev @types/jest@^29.5.0`
