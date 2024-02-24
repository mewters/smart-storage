# Smart Storage

Smart Storage is a simple and easy-to-use library to manage local storage, session storage, and cookies with a consistent API, TypeScript support and object serialization.

## Features

- **Simple API**: The API is simple and easy to use.
- **TypeScript Support**: The library is written in TypeScript and has type definitions.
- **Object Serialization**: The library serializes and deserializes objects automatically. It means you can store and retrieve objects without any extra work.
- **Consistent API**: The API is consistent across local storage, session storage, and cookies.
- **Safe Retrieval**: The library provides a safe retrieval by always providing a default value.
- **Cookie Expiration**: The library allows you to set the number of days the cookie will expire.
- **Lightweight**: The library is lightweight and has no dependencies.
- **Tested**: The library is well tested with 100% code coverage.

---

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

## Install

```bash
npm install @mewters/smart-storage
```

## Usage

```ts
import {
  LocalStorage,
  SessionStorage,
  CookieStorage,
} from '@mewters/smart-storage';
```

## API

LocalStorage, SessionStorage, and CookieStorage have the same API.

Let's use LocalStorage as an example.

### .get

Use the `get` method to retrieve a value from storage.

The `key` is an unique identifier for the value. The `defaultValue` is the value to return if the key does not exist.

If the key does not exist, it will return the default value. For a safe retrieval, always provide a default value.

```ts
LocalStorage.get('key1', 'defaultValue');
LocalStorage.get('key2', 5);
LocalStorage.get('key3', { defaultValue: 'value' });
```

### .set

Use the `set` method to store a value in storage.

The `key` is an unique identifier for the value. The `value` is the value to store. It has to be a string, number, or object.

```ts
LocalStorage.set('key1', 'value');
LocalStorage.set('key2', 5);
LocalStorage.set('key3', { value: 'value' });
```

**Note:** The `CookieStorage` has an additional `days` parameter to set the number of days the cookie will expire.
By default, the value is 365 days.

```ts
CookieStorage.set('key1', 'value');
CookieStorage.set('key2', 5, 30); // 30 days
CookieStorage.set('key3', { value: 'value' }, 7); // 7 days
```

### .remove

Use the `remove` method to remove a value from storage.

The `key` is an unique identifier for the value to remove.

```ts
LocalStorage.remove('key1');
```

### .removeItems

Use the `removeItems` method to remove multiple values from storage.

The `keys` is an array of unique identifiers for the values to remove.

```ts
LocalStorage.removeItems(['key1', 'key2']);
```

### .clear

Use the `clear` method to remove all values from storage.

```ts
LocalStorage.clear();
```

[build-img]: https://github.com/mewters/smart-storage/actions/workflows/release.yml/badge.svg
[build-url]: https://github.com/mewters/smart-storage/actions/workflows/release.yml
[downloads-img]: https://img.shields.io/npm/dt/@mewters/smart-storage
[downloads-url]: https://www.npmtrends.com/@mewters/smart-storage
[npm-img]: https://img.shields.io/npm/v/@mewters/smart-storage
[npm-url]: https://www.npmjs.com/package/@mewters/smart-storage
[issues-img]: https://img.shields.io/github/issues/mewters/smart-storage
[issues-url]: https://github.com/mewters/smart-storage/issues
[codecov-img]: https://codecov.io/gh/mewters/smart-storage/branch/main/graph/badge.svg
[codecov-url]: https://codecov.io/gh/mewters/smart-storage
[semantic-release-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[commitizen-img]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/

# smart-storage
