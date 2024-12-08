# Experiments-tests-nextjs

Experiments different testing framework for NextJS

## User stories

- [ ] As a software tests developper, I should be to implement tests in a NextJS project, in order to ensure high quality of the delivrables,
- [ ] As a software tests developper, I should be have automated hooks that improve the quality of my code (on commit or push) , in order to ensure high quality of the delivrables,
- [ ] As a software tests developper, I should get quick feedback of the quality of my code, in order to ensure high quality of the delivrables,
- [ ] As a project maintainer, I should be able to check the code code quality on CI pipelines, in order to ensure high quality of the delivrables,

## Steps

- [ ] List all relevant testing frameworks for NextJS in a nd MD file,
- [ ] List all open source software tool that can help to imporve code quality (SonarQube, Selenium...),
- [ ] Create a starter NextJS application,
- [ ] Create fake Page/... for testing,
- [ ] Create a test for the UI/...,
- [ ] Update the README fie,
- [ ] Add comparison (Pros, Cons) of the frameworks and tools to the above MD file.

## Requirements

- [ ] Test each Framework in a separate branch,
- [ ] Use devContainer extension to hanlde developement environement.

# Useful Urls

- NextJs officiel documentation : [nextjs.org](https://nextjs.org/docs/pages/building-your-application/testing)

# Unit and Integration Testing Frameworks

- **Jest** : [jestjs.io](https://jestjs.io/docs/getting-started)

  - _Description_ : Testing JavaScript logic, components, and API calls. Jest is the default for unit/integration testing in Next.js apps.

- **Vitest** [vitest.dev](https://vitest.dev/guide/)

  - _Description_ : A fast unit testing framework that works well with modern frontend tooling, ideal for testing JavaScript logic and React components.Often considered a faster alternative to Jest with similar functionality, suitable for Next.js apps.

- **Comparison** : Jest is still the most widely used testing framework for Next.js

# Component Testing

- **React Testing Library (RTL)** : [testing-library.com](https://testing-library.com/docs/react-testing-library/intro/)
  - _Description_ : For testing React components, simulating user interactions, and ensuring UI behavior is correct. RTL is the go-to choice for Next.js component testing.
- **Jest (with react-test-renderer)** : [jestjs.io](https://jestjs.io/docs/tutorial-react)
  - _Description_ : Jest can work with react-test-renderer, but RTL is more aligned with testing user behavior rather than internal component structures.

# End-to-End (E2E) Testing

- **Cypress** : [cypress.io](https://docs.cypress.io/app/get-started/why-cypress)
  - _Description_ : For running end-to-end tests, simulating real user scenarios, testing entire user flows in Next.js apps.
- **Playwright** : [playwright.dev](https://playwright.dev/docs/intro)
  - _Description_ : Similar to Cypress, Playwright supports multiple browsers and is ideal for E2E testing. Both are widely used in Next.js.
- **Selenium** : [selenium.dev](https://www.selenium.dev/)
  - _Description_ : Selenium is a popular E2E testing tool, but it’s slower than Playwright or Cypress and typically has more complex setup.

# Mocking API Calls

- **MSW (Mock Service Worker)** : [mswjs.io](https://v1.mswjs.io/)
  - _Description_ : MSW is used for mocking network requests during tests, both in development and testing environments. It's ideal for mocking REST and GraphQL APIs in Next.js.
- **Axios Mock Adapter** : [axios-mock-adapter](https://www.npmjs.com/package/axios-mock-adapter)
  - _Description_ : Axios Mock Adapter is used to mock API calls made with Axios, but MSW works for any HTTP client and is more powerful for network mocking.

### **Conclusion**

In **Next.js** projects, you'll often use a **combination** of testing frameworks to handle different layers of testing (unit, integration, end-to-end, etc.):

- **Jest** + **React Testing Library (RTL)**: For unit and integration tests.

- **Cypress** or **Playwright**: For end-to-end tests.

- **MSW**: For mocking network requests.”

# Open Source Tools to Improve Code Quality in Next.js

## **SonarQube** : [sonarqube-server](https://docs.sonarsource.com/sonarqube-server/latest/)

- **Purpose**: Continuous inspection of code quality with automatic reviews.
- **Features**:
  - Analyzes code for bugs, vulnerabilities, and code smells.
  - Supports a wide range of languages including JavaScript.
  - Provides detailed code reports and metrics.
  - Integrates with CI/CD pipelines.
- **Pros**:
  - Provides actionable insights into code quality.
  - Supports security vulnerabilities detection.
  - Good integration with CI tools.
- **Cons**:
  - Can be complex to set up and configure.
  - Requires a SonarQube server (can be self-hosted or use cloud services).

## **Husky**: [husky-docs](https://typicode.github.io/husky/)

- **Purpose**: Git hooks manager to automate tasks (e.g., linting and testing before commits).
- **Features**:
  - Automates checks like linting, tests, and Prettier formatting before commit.
  - Can run commands on `git commit`, `git push`, and other Git lifecycle events.
- **Pros**:
  - Enforces code quality checks before code gets into version control.
  - Simple to set up and integrate with other tools like ESLint and Prettier.
- **Cons**:
  - Doesn't directly check code quality; it only automates the process.
  - Can slow down Git operations if not configured properly.

---

# Conclusion

- **SonarQube** can be used for continuous inspection and security checks.
- **Husky** can enforce quality checks at the commit level, preventing low-quality code from entering the repository.

By integrating these tools into your Next.js development workflow, you can maintain high code quality and minimize errors and bugs in production.
