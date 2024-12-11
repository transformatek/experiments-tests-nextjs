# Experiments-tests-nextjs

Experiments different testing framework for NextJS

## Description

In this project we Experiment List of relevant testing frameworks (Unit,Integration,E2E) for NextJS that ensure high quality of the delivrables

- **Jest** : [jestjs.io](https://jestjs.io/docs/getting-started)
- **Vitest** [vitest.dev](https://vitest.dev/guide/)
- **React Testing Library (RTL)** : [testing-library.com](https://testing-library.com/docs/react-testing-library/intro/)
- **Jest (with react-test-renderer)** : [jestjs.io](https://jestjs.io/docs/tutorial-react)
- **Cypress** : [cypress.io](https://docs.cypress.io/app/get-started/why-cypress)

List all open source software tool that can help to imporve code quality

You can find more details:
[Comparison](COMPARISON.md)

## Development

First run

```bash
git clone https://github.com/transformatek/experiments-tests-nextjs.git
```

Open the project in VSCode.
You will be promted to **Open in a Container**, click on it.
Once launched, open a new terminal.

## Testing Frameworks in Separate Branches

Each framework is tested in its own branch.

- Jest + RTL : `Feature/1-jest-rtl-test`
- Vitest + RTL : `Feature/2-vitest-test`
- Jest (with react-test-renderer) : `Feature/3-Jest-with-react-test-renderer-test`
- Cypress : `Featue/4-e2e-test-with-cypress`

You can check out the desired branch using the following command:

```bash
git checkout <branch-name>
```

All projects starters are located in the `experiments-tests-nextjs` folder.

run

```bash
cd  experiments-tests-nextjs/<framework-project-name>
```

To run test :

```
npm test
```

To run project:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

For more details check `README.md` of each project.

## Getting Started with selenium

# Useful commands

**install geckodriver for firefox**

```
curl -L https://github.com/mozilla/geckodriver/releases/download/v0.35.0/geckodriver-v0.35.0-linux64.tar.gz | tar xz -C /usr/local/bin
```



**install chromedriver for chrome**

```
curl -L https://storage.googleapis.com/chrome-for-testing-public/131.0.6778.87/linux64/chromedriver-linux64.zip -o chromedriver-linux64.zip && \
unzip chromedriver-linux64.zip && cp chromedriver-linux64/chromedriver /usr/local/bin
```


https://www.zenrows.com/blog/selenium-nodejs