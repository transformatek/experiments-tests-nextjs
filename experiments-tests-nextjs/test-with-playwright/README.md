
## Getting Started

**Playwright**:   [playwright.dev](https://playwright.dev/)


1- **Create you project** :
 
run 
```
cd test-with-playwright
```
run 
```
npx create-next-app@latest
```


3- **Install playwright**: 

  `npm init playwright@latest`



4- **Start testing**:

run 
```
cd test-with-playwright
```

  `npx playwright test`
    Runs the end-to-end tests.

  `npx playwright test --ui`
    Starts the interactive UI mode.


We suggest that you begin by typing:

    `npx playwright test`

And check out the following files:
  - ./tests/example.spec.ts - Example end-to-end test
  - ./tests-examples/demo-todo-app.spec.ts - Demo Todo App end-to-end tests
  - ./playwright.config.ts - Playwright Test configuration

Visit https://playwright.dev/docs/intro for more information. ✨



If run test failed run :
`npx playwright install-deps `


# UI mode testing did not run successfully when executing:

```
npx playwright test --ui
```


# Useful Urls

- NextJs officiel documentation : [nextjs.org](https://nextjs.org/docs/pages/building-your-application/testing)