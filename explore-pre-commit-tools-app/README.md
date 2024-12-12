This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[text](https://medium.com/yavar/setting-up-a-eslint-prettier-husky-and-lint-staged-integration-with-typescript-in-next-js-13-14-68044dfae920)

# Install Dependencies

Inside your developement project ,
Install the necessary dependencies for ESLint, Prettier, Husky, and lint-staged:

```
npm add --dev eslint prettier husky lint-staged eslint-config-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-prettier prettier-plugin-tailwindcss eslint-config-next
```

Create and update `prettier`,`eslint` files.

Add this line to `eslint.config.mjs` :

```
 {
    ignores: ["node_modules/", "dist/", "coverage/"],
  },

```

Update package.json scripts :

```
    "lint": "eslint \"apps/**/*.ts\" \"libs/**/*.ts\" \"tests/**/*.ts\"",
    "lint:staged": "lint-staged",
    "lint:fix": "eslint --fix \"apps/**/*.ts\" \"libs/**/*.ts\" \"tests/**/*.ts\"",
    "pre-commit": "npm run lint:staged",
    "prepare": "cd .. && husky",
    "eslint": "eslint .",
    "format": "prettier --write .",
    "check": "prettier --check \"**/*.{ts,tsx,js,jsx,md,mdx,css,yaml,yml}\""

```

Add this code to package.json object:

```
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*": "prettier --write"
  }

```

Navigate to project's root and run :

```
npm install husky
npx husky init
```

Folder .husky will initialized.

Update .husky/pre-commit:

```
cd explore-pre-commit-tools-app
npm run pre-commit
```
