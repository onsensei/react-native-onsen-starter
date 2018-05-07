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
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- [redux](https://redux.js.org/)
- [saga](https://github.com/redux-saga/redux-saga)

## Prerequisite
1. [Node.js and Native SDK (iOS, android) and React Native Framework](https://facebook.github.io/react-native/docs/getting-started.html)
2. [Yarn - optional but recommend for replace npm](https://yarnpkg.com/en/)
3. eslint plugin for your editor such as [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for [Visual Studio Code](https://code.visualstudio.com/)
4. [react-native-debugger standalone app](https://github.com/jhen0409/react-native-debugger#installation)

## Usage
1. clone or copy this project to your local mechine
2. add your remote repository reference to this project on your local mechine
3. remove repository reference of react-native-onsen-starter
4. install modules with command `npm install` or `yarn`
5. rename project with command `npm run react-native-rename <newName> -b <bundleIdentifier>` of [react-native-rename](https://www.npmjs.com/package/react-native-rename)
6. remove or edit [README.md](https://github.com/onsensei/react-native-onsen-starter/blob/master/README.md) and made your own one
7. start coding your app 😎

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

$ npm install eslint-plugin-sort-imports-es6-autofix --save-dev

$ npm install eslint@3.x babel-eslint@7 --save-dev
```
5. edit rules for eslint with [.eslintrc.js](https://github.com/onsensei/react-native-onsen-starter/blob/master/.eslintrc.js)
6. edit ignore for eslint with [.eslintignore](https://github.com/onsensei/react-native-onsen-starter/blob/master/.eslintignore)
7. install [enzyme modules](https://www.npmjs.com/package/enzyme-react-16-adapter-setup)
```
$ npm install enzyme react-test-renderer enzyme-adapter-react-16 enzyme-react-16-adapter-setup --save-dev
```
8. install [jest-enzyme](https://www.npmjs.com/package/jest-enzyme) module
```
$ npm install jest-enzyme --save-dev
```
9. install [react-native-debugger-open](https://github.com/jhen0409/react-native-debugger) module
```
$ npm install react-native-debugger-open --save-dev
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
$ npm install react-native-rename --save
```
13. install [react-navigation](https://reactnavigation.org/docs/getting-started.html) module
```
$ npm install react-navigation --save
```
14. install [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) module
```
$ npm install react-native-vector-icons --save

$ react-native link react-native-vector-icons
```
15. install modules for redux & saga ([redux, react-redux, redux-devtools](https://redux.js.org/#installation), [redux-actions](https://www.npmjs.com/package/redux-actions), [redux-saga](https://www.npmjs.com/package/redux-saga), [redux-saga-testing](https://www.npmjs.com/package/redux-saga-testing), [react-navigation-redux-helpers](https://www.npmjs.com/package/react-navigation-redux-helpers), [redux-persist](https://www.npmjs.com/package/redux-persist))
```
$ npm install redux --save

$ npm install react-redux --save

$ npm install redux-devtools --save-dev

$ npm install redux-actions --save

$ npm install redux-saga --save

$ npm install redux-saga-testing --save-dev

$ npm install react-navigation-redux-helpers --save

$ npm install redux-persist --save
```
16. edit jest config in [package.json](https://github.com/onsensei/react-native-onsen-starter/blob/master/package.json) for
- load config to jest with `react-native` preset
- load test framework & environment that specific in `setupTestFrameworkScriptFile` and `setupFiles`
- specific some module that use ES6+ inside `(?!)` for transform them to ES5
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
17. edit scripts config in [package.json](https://github.com/onsensei/react-native-onsen-starter/blob/master/package.json)
```
{
  "scripts": {
    "start": "node node_modules/react-native/local-cli/cli.js start",
    "ios": "react-native run-ios",
    "iphone:default": "react-native run-ios --simulator='iPhone SE'",
    "ipad:default": "react-native run-ios --simulator='iPad Pro (9.7-inch)'",
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
18. add config code to make react-native-debugger can monitor network data in [index.js](https://github.com/onsensei/react-native-onsen-starter/blob/master/index.js)
```
if (__DEV__) {
  global.XMLHttpRequest = global.originalXMLHttpRequest ?
    global.originalXMLHttpRequest :
    global.XMLHttpRequest;
  global.FormData = global.originalFormData ?
    global.originalFormData :
    global.FormData;
}

AppRegistry.registerComponent(...);
```

or use for integreate with another starter such as [react-native-firebase-starter](https://github.com/invertase/react-native-firebase-starter)
