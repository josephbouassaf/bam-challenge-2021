# BAM Challenge 2021

Welcome to the Blockchain At McGill Developer Challenge 2021.

https://user-images.githubusercontent.com/43356588/132113683-c23a7087-3ed8-4f13-a00f-e60060a65186.mp4

The goals of this challenge are to introduce you to the tech tools we use in our projects and to test your ability to learn on your own.

Please ensure that you read this entire step-by-step guide as you will be expected to know its content in your interview.

## Overview

The main components when building a web application are the persistence layer, business logic layer, and user interface.

- The persistence layer corresponds to the layer that provides users the ability to store information for a long period. Technologies that are used here are databases and/or blockchains. Common database engines include PostgreSQL, MySQL, MongoDB, Neo4j. The most popular general-purpose blockchain is Ethereum.
- The business logic layer consists of the backend logic that determines how your application responds to incoming requests. Conceptually, it is located on the server-side (i.e. a server hosting your application). Popular tools here are Django, NodeJS, Flask. In blockchain applications developed on Ethereum, known as decentralized applications (DApps), the business logic is encoded in smart contracts.
- The user interface is what the user sees and interacts with. Conceptually, it is located on the client-side (i.e. web browser). Popular frontend technologies include Angular, React, and Vue.

In this challenge, we are building a static website (in contrast to a dynamic website). This means that we don't need a persistence layer or a business logic layer.
The main technology we are using in this project is [Next.js](https://nextjs.org/). It was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Our projects also use Next.js in combination with writing and deploying smart contracts on Ethereum.

## Complete list of technologies used

- Next.js - React framework
- Git - version control system
- Husky - enables the creation of Git Hooks. The pre-commit hook we are using ensures the linter is run and succeeds before a git commit occurs.
- Jest - testing framework: provides the ability to write unit tests.
- ES-Lint - linter: validates that the code follows a proper styling convention according to a set of rules.
- Prettier: validates the proper formatting of the code.
- Babel - transpiler: converts ES6 syntax to JavaScript syntax understood by all browsers (ES5).
- Webpack - bundler: bundles all assets (e.g. JS, CSS, HTML, SVG, PNG, JPEG files) together.
- Bootstrap - frontend library: facilitates the development of the frontend by providing reusable components.

## File structure

In this section, we will go over the structure of files and folders and see how they interact.

### `package.json`

All JavaScript projects contain a `package.json` file. The `scripts` section contains executable scripts that you can run with `npm run <script_name>`.

For instance, to run the development server, run `npm run dev`.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file. Undo any changes you do.

Next.js also provides support for API routes. We do not use them in this project. You can read more about them [here](https://nextjs.org/docs/api-routes/introduction).

If you are curious API routes can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

Run `npm run test` and observe at the output. Do all of the tests pass?

The `package.json` file will also contain the dependencies installed and (optionally) configuration settings of other tools used in the project.

If you are curious, you can read more about `package.json` [here](https://docs.npmjs.com/cli/v7/configuring-npm/package-json).

### `pages`

The pages folder contains the different pages of the user interfaces. Next.js provides routing out-of-the-box. You can read more about it here.

### `__tests__`

The test folder contains all test files for the application. It is detected by `jest` automatically.

### `styles`

The styles folder contains the CSS styling for a page or module. You can read more here.

### `public`

The `public` folder contains the assets used in the applications like images and videos.

### `.gitignore`

Files are folder to ignore by Git. `node_modules` is a popular folder included in the `.gitignore` file. `node_modules` contains the source code of the dependencies used in the project. The evolution of this folder doesn't need to be tracked as other developers can run `npm install` to download all the dependencies mentioned in the `package.json` file.

### Other configuration files

- `jest.setup.js` provides additional configuration for the Jest framework.
- `.eslintrc` provides configuration settings for the ES-lint tool.
- `.babelrc` provides configuration settings for the Babel transpiler.
- `next.config.js` and the `.next` folder contain NextJS settings.
- `.prettierignore` and `.prettierrc.json` contains configuration settings for Prettier.
- `.husky` contain configuration for Husky tool.

## Learn More [Optional]

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Complete the challenge

### Setup

1. Fork the repository to your account.
   In the Github repo, click on the `Fork` button on the top right.
   Then, select your account.
2. Clone the repository to your local computer.
   Copy the HTTPS link after clicking on the `Code` button.
   In the directory you wish to clone the project,
   run `git clone INSERT_HTTPS_LINK`.
3. Run `npm install` to install all dependencies.

### Getting familiar

1. Run `npm run test` to see what tests are failing.
   You should have 3 tests failing.
2. Run `npm run lint` to see if there are any styling issues.
   You can see 6 errors. These originate from the `.eslintrc` that
   considers warning comments like `TODO` as errors.
   It can help you out determine what you need to do to complete the challenge.
3. Run `npm run dev` (for development mode) or `npm run build` followed by `npm run start` (for production mode) to see the current user interface. You can access the server at [http://localhost:3000](http://localhost:3000).

### Implementation

All the coding implementation is to be done in the `pages/index.js` file.
It is advisable to open a new terminal shell and run `npm run dev`. It comes with a hot reload feature to see live updates of your code changes.

1. Fix the button! Follow the comments on lines 72 and 73.
   If you rerun the tests, you should have 2 failing tests instead of three.
   The test that should have succeeded is `button_render_success` defined
   in `static_content_rendering` in `Home.test.js`.
2. Add a `todoList` React state hook on line 8. Follow the instructions on lines 26 and 84.
3. Implement `handleChange`. Run the tests and the linter to see your progress.
4. Implement `onClick`. Run the tests and the linter to see your progress.

### Submission

1. Run `git add .`
2. Run `git commit -m "Finished the challenge"`
3. Run `git push origin main`

**Submit the URL of your forked repo in the Google Form.**
