# [Test React Components with Enzyme and Jest](https://egghead.io/courses/test-react-components-with-enzyme-and-jest)

<center><img src="https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/198/full/EGH_TestReactJest-edited.png" width="200px" height="200px"/></center>

In this course we are going to work through properly setting up Enzyme with Jest to test rendered components. This includes the nitty gritty of making our testing environment work with various versions of React. After we get our environment setup ready, we'll work through the different ways we can render a component within our test pages. With a rendered component we can now test component methods and properties to assert that they are what is intended.

## How to use this project
This project is using yarn workspaces. Each lesson is a folder inside of `lessons`

To get started run `yarn` in the root of the project.

Navigate to each lesson folder and run `yarn test` to run that lesson's test suite

## Reviewer Notes
When running tests, console would print:
'console.error node_modules/react-dom/cjs/react-dom-test-utils.production.min.js:22
act(...) is not supported in production builds of React, and might not behave as expected.
But tests were still able to run appropriately.'
As it says, tests were still able to run appropriately.

Jest would throw Unexpected Token on importing CSS files. Commenting out those imports and references to those imports solved the problems.

Had to change 'env' to '@babel/preset-env' and 'react' to '@babel/react' in .babelrc in order for tests to run properly.
