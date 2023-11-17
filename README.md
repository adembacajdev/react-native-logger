# @adembacajdev/react-native-logger

React Native colorized logger

## Example of loggers
![Screenshot 2023-11-17 at 7 45 25 PM](https://github.com/adembacajdev/react-native-logger/assets/85193638/b2bb46a5-9050-42e7-9897-dbb5ea3a0da0)

## Installation

```sh
npm install @adembacajdev/react-native-logger
or if you are using Expo
npx expo install @adembacajdev/react-native-logger
```

## Usage

```js
import LOG from '@adembacajdev/react-native-logger';

// ...

LOG.debug('Logging debug', { type: 'debug' });
LOG.info('Logging info', { type: 'info' });
LOG.warn('Logging warn', { type: 'warn' });
LOG.error('Logging error', { type: 'error' });
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
