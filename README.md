# umi-plugin-upload-new

[![NPM version](https://img.shields.io/npm/v/umi-plugin-upload-new.svg?style=flat)](https://npmjs.org/package/umi-plugin-upload-new)
[![NPM downloads](http://img.shields.io/npm/dm/umi-plugin-upload-new.svg?style=flat)](https://npmjs.org/package/umi-plugin-upload-new)


适用于umi3.x，umi2.x请使用[umi-plugin-upload](https://www.npmjs.com/package/umi-plugin-upload)

## Install

```bash
# or yarn
$ npm install
```

```bash
$ npm run build --watch
$ npm run start
```

## Usage

Configure in `.umirc.js`,

```js
export default {
  plugins: [
    ['umi-plugin-upload-new'],
  ],
  upload: {
    host: 'xxx',
    username: 'xxx',
    password: 'xxxx',
    sourcePath: 'dist/',
    targetPath: '/home/test'
  }
}
```

## Options

TODO

## LICENSE

MIT
