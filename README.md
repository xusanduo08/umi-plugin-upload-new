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

如果没有配置密码，则在上传时命令行会给出交互提示输入密码

## Example

### Upload directory
```js
export default {
  plugins: [
    ['umi-plugin-upload']
  ],
  upload: {
    host: 'xxxx',
    username: 'xxxx',
    password: 'xxxx',
    sourcePath: 'dist/',
    targetPath: '/home/ubuntu/test'
  }
}
// 将dist目录上传到/home/ubuntu下，并命名为test
```

### Upload file
```js
export default {
  plugins: [
    ['umi-plugin-upload']
  ],
  upload: {
    host: 'xxxx',
    username: 'xxxx',
    password: 'xxxx',
    sourcePath: 'dist/umi.js',
    targetPath: '/home/ubuntu/test.js'
  }
}
// 将umi.js上传到/home/ubuntu下并重命名为test.js
```

### Glob pattern
```js
export default {
  plugins: [
    ['umi-plugin-upload']
  ],
  upload: {
    host: 'xxxx',
    username: 'xxxx',
    password: 'xxxx',
    sourcePath: 'dist/*.js',
    targetPath: '/home/ubuntu/test'
  }
}
// 将dist下的所有js文件上传到/home/ubuntu/test目录下，glob模式请确保targetPath代表的目录在远程是存在的
```

## Options

TODO

## LICENSE

MIT
