# react-native-onsen-starter
This is react native project starter / boilerplate / project template that come with some modules:
- [eslint](https://eslint.org/)
- [babel (for eslint)](https://babeljs.io/)
- [enzyme](https://github.com/airbnb/enzyme)
- [jest (for enzyme)](https://facebook.github.io/jest/)
- [react-native-debugger](https://github.com/jhen0409/react-native-debugger)
- [husky](https://github.com/typicode/husky)
- [react-dom](https://www.npmjs.com/package/react-dom)
- [react-native-rename](https://www.npmjs.com/package/react-native-rename)
- [react-navigation](https://reactnavigation.org/docs/getting-started.html)
- [redux](https://redux.js.org/)
- [saga](https://github.com/redux-saga/redux-saga)

## Prerequisite
1. XXX
2. XXX
3. XXX

## Usage
1. clone or copy this project to your local mechine
2. add your remote repository reference to this project on your local mechine
3. remove repository reference of react-native-onsen-starter
4. install modules with command `npm install` or `yarn`
5. rename project with command `yarn react-native-rename <newName> -b <bundleIdentifier>` of [react-native-rename](https://www.npmjs.com/package/react-native-rename)
6. start coding your app 😎

## How to reproduce this starter
You can make your starter by following these steps.
1. create new project with command
```
$ react-native init YourAppName
```
2. edit gitignore with [.gitignore](https://github.com/onsensei/react-native-onsen-starter/blob/master/.gitignore)
3. install eslint module and create config file with [Local Installation and Usage](https://eslint.org/docs/user-guide/getting-started#local-installation-and-usage)
```
$ npm install eslint --save-dev

$ ./node_modules/.bin/eslint --init
```
4. install other modules for eslint ([eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import), [eslint-plugin-react-native](https://www.npmjs.com/package/eslint-plugin-react-native), [eslint-plugin-sort-imports-es6-autofix](https://www.npmjs.com/package/eslint-plugin-sort-imports-es6-autofix), [babel-eslint](https://www.npmjs.com/package/babel-eslint))
```
$ npm install eslint-plugin-import --save-dev

$ npm install eslint-plugin-react --save-dev

$ npm install eslint-plugin-react-native --save-dev

$ npm i --save-dev eslint-plugin-sort-imports-es6-autofix

$ npm install eslint@3.x babel-eslint@7 --save-dev
```
5. edit rules for eslint with [.eslintrc.js](https://github.com/onsensei/react-native-onsen-starter/blob/master/.eslintrc.js)
6. edit ignore for eslint with [.eslintignore](https://github.com/onsensei/react-native-onsen-starter/blob/master/.eslintignore)
7. install [enzyme modules](https://www.npmjs.com/package/enzyme-react-16-adapter-setup)
```
$ npm install --save-dev enzyme react-test-renderer enzyme-adapter-react-16 enzyme-react-16-adapter-setup
```
8. install [jest-enzyme](https://www.npmjs.com/package/jest-enzyme) module
```
$ npm install jest-enzyme --save-dev
```
9. install [react-native-debugger-open](https://github.com/jhen0409/react-native-debugger) module
```
$ npm i --save-dev react-native-debugger-open
```
10. install [husky](https://www.npmjs.com/package/husky) module
```
$ npm install husky --save-dev
```
11. install [react-dom](https://www.npmjs.com/package/react-dom) module
```
$ npm install react-dom --save-dev
```
12. install [react-native-rename](https://www.npmjs.com/package/react-native-rename) module
```
$ npm i react-native-rename
```
13. install [react-navigation](https://reactnavigation.org/docs/getting-started.html) module
```
$ npm install --save react-navigation
```
14. install modules for redux & saga ([redux, react-redux, redux-devtools](https://redux.js.org/#installation), [redux-actions](https://www.npmjs.com/package/redux-actions), [redux-saga](https://www.npmjs.com/package/redux-saga), [redux-saga-testing](https://www.npmjs.com/package/redux-saga-testing))
```
$ npm install --save redux

$ npm install --save react-redux

$ npm install --save-dev redux-devtools

$ npm install --save redux-actions

$ npm install --save redux-saga

$ npm i --save-dev redux-saga-testing
```
15. edit jest config in `package.json`
```
{
  "jest": {
    "preset": "react-native",
    "cacheDirectory": "./cache",
    "setupTestFrameworkScriptFile": "./node_modules/jest-enzyme/lib/index.js",
    "setupFiles": [
      "enzyme-react-16-adapter-setup"
    ],
    "transformIgnorePatterns": [
      "/node_modules/(?!react-native|react-navigation)"
    ]
  }
}
```
16. edit scripts config in `package.json`
```
{
  "scripts": {
    "start": "node node_modules/react-native/local-cli/cli.js start",
    "ios": "react-native run-ios",
    "android": "react-native run-android",
    "test": "jest --verbose --coverage",
    "test:update": "jest --verbose --coverage --updateSnapshot",
    "test:watch": "jest --verbose --watch",
    "coverage": "jest --verbose --coverage && open ./coverage/lcov-report/index.html",
    "lint": "eslint ./",
    "lint:fix": "eslint ./ --fix",
    "postinstall": "rndebugger-open",
    "prepush": "npm run lint && npm run test"
  }
}
```

or use for integreate with another starter such as [react-native-firebase-starter](https://github.com/invertase/react-native-firebase-starter)
