
## Getting Started

**vitest**: testing framework powered by Vite , it supports a range of testing needs, including unit tests, integration tests, and end-to-end tests


1- **Create you project** : `npx create-next-app@latest`


2- **Install vitest and required libraries**: 


3- **Update** `vitest.config.ts` file:
 
   ```
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
  },
});

```
4-Change `next.config.ts` file extension to `.js`.


5- **Update tsconfig.json file** :

- Add this ` "typeRoots": ["./node_modules/@types", "./node_modules/@vitejs/plugin-react"] `
to  `compilerOptions`


- Add this line `"vite": ["./node_modules/vite"]`
to paths object.

6-**Update package.json scripts object**:

- Add this line to scrpits `"test": "vitest"`


7-**Install** `@vitejs/plugin-react`:
 
- Ensure the plugin is installed if not run: 
   `npm install @vitejs/plugin-react --save-dev`



**To run test : `npm test`**


# Useful URLs :

[nextjs.org](https://nextjs.org/docs/app/building-your-application/testing/vitest)

[vitest.dev](https://vitest.dev/guide/)

[next-js-application-testing-with-vitest-and-testing-library-part1](https://medium.com/@rational_cardinal_ant_861/next-js-application-testing-with-vitest-and-testing-library-592948bb039c)

[next-js-application-testing-with-vitest-and-testing-library-part2](https://medium.com/@rational_cardinal_ant_861/next-js-application-testing-with-vitest-and-testing-library-b29f32e0c8c7)

[Vitest UI](https://vitest.dev/guide/ui.html)

--- 
**The link below provides a comparison between Vitest and other frameworks, particularly Jest, which can be helpful in making an informed decision:**

  - [Vitest Comparisons](https://vitest.dev/guide/comparisons.html)

