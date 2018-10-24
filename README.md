# NextJs Starter

> A Starter project for `nextJs` with implementation react, redux, redux-saga, selectors, immutable and [Bulma CSS framework](https://bulma.io/documentation/).


## Demo
https://codesandbox.io/s/github/louiskhenghao/next-bulma-with-redux-saga


## How to run app

### Run development build

```bash
yarn
yarn dev
```

### Run production build with:

```bash
yarn build
yarn start
```

### Export as static HTML files

```
yarn build
yarn export

# To try on your local machine
# note: you'll need to install https://github.com/zeit/serve
cd out
serve -p 8080
```

# Folder structure

```
/config
  - index.js
/components
  - YourDumbComponent.js
/containers
  - /YourSmartComponent
    - component.jsx
    - connector.jsx
/pages
  - YourPage.js
/store
  - YourStoreName
    - actions.js
    - reducers.js
    - saga.js
    - selectors.js
  index.js
  RootReducers.js
  RootSagas.js
/styles
  - theme.scss
  - styles.scss
```

- `components` folder is the place for `Dumb Component`, (Dumb components are also called ‘presentational’ components because their only responsibility is to present something to the DOM.)
- `containers` folder is the place for `Smart Component`, (Smart components (or container components) on the other hand have a different responsibility. Because they have the burden of being smart, they are the ones that keep track of state and care about how the app works.)
- `pages` folder is the place for pages to be served, by default nextJs will consume the js file as page route, (Example: there is a `mypages.js` file under `pages`, so to access this page i just go to `http://localhost:3000/mypages`)
- `store` folder as the folder name, it is for redux store, we encourage developer to seperate their store to different `module`, and each `module` it should have
  - `actions.js` - Actions are payloads of information that send data from your application to your store. They are the only source of information for the store.
  - `reducers.js` - Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes.
  - `saga.js` - Aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, simple to test, and better at handling failures.
  - `selectors.js` - Selectors are functions that take Redux state as an argument and return some data to pass to the component.
- `store/RootReducers.js` - Combine of reducers from `redux store modules` (Remember to import `reducer` to `RootReducers` when adding new `store`). "Please be caution for clashing store name."
- `store/RootSagas.js` - Combine of saga from `redux store modules` (Remember to import watcher function to `RootSagas` from your new `store` if you wants saga to keep an eye for your dispatched action)
- `styles/theme.scss` - this is the place where we import bulma theme, you can choose to define what you need to use for your application
- `styles/styles.scss` - this file is to define global styles for your application

## References

For anyone who would like to have better understanding please refer to the reference below:

- For anyone who would like to have a better understanding of `Dumb component` and `Smart component` please refer [this link](https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43)
- For `redux`, please refer [this link](https://redux.js.org/) for introduction and example. In simple `redux` can be described in three [fundamental principles](https://redux.js.org/introduction/three-principles): [`Single source of truth`], [`State is read-only`], [`Changes are made with pure functions`]
- For `selectors`, please refer [this link](https://redux.js.org/recipes/computing-derived-data) for better understanding or its [github](https://github.com/reduxjs/reselect)
- For `redux saga` please refer [github](https://github.com/redux-saga/redux-saga) for examples and explanation.
- For `immutableJS` please refer to [official documentation](https://facebook.github.io/immutable-js/)
