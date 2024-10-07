# SERVER

## Setup
cd server
yarn install

yarn dev-babel
run server locally explored at http://localhost:3010

prod build setup
add to package json scripts
```js
    "clean": "rm -rf dist",
    "build": "yarn clean && babel ./src --out-dir dist --copy-files",
```

## Dockerize

rest can be followed on commits
