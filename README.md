# Ceylon [![Travis][build-badge]][build] [![npm package][npm-badge]][npm]

[build-badge]: https://img.shields.io/travis/ca0v/ceylon/master.svg?style=flat-square
[build]: https://travis-ci.org/ca0v/ceylon
[npm-badge]: https://img.shields.io/npm/v/ceylon.svg?style=flat-square
[npm]: https://www.npmjs.org/package/ceylon

<img src="https://raw.githubusercontent.com/ca0v/ceylon/master/logo.png" width="237" height="94" alt="Ceylon" />

Ceylon is an assertion library for unit testing written in TypeScript. It can be used in TypeScript or in plain old JavaScript.

It is based upon the API for [expect](https://github.com/mjackson/expect/), with the added bonus of full TypeScript definitions, meaning there's no need to go looking for a d.ts file.

Ceylon aims to simplify unit testing in TypeScript by making it easy to write assertions.

## Install

`npm install https://github.com/ca0v/ceylon/tarball/v1.0.0 --save-dev

## Example Usage

```typescript
import expect from "ceylon";

expect(100)
    .toExist()
    .toBeA("number")
    .toBeLessThan(200)
    .toBeGreaterThan(5)
    .toNotBe(90);
```
