const isDev = __DEV__;

const LOG = {
  debug: (label: string, data?: unknown) => {
    isDev ? console.log(`%c ${label}`, 'color: grey', data ?? '') : null;
  },
  info: (label: string, data?: unknown) => {
    console.log(
      `%c INFO | ${label}`,
      'background: cornflowerblue; color: black',
      data ?? ''
    );
  },
  warn: (label: string, data?: unknown) => {
    console.log(
      `%c WARN | ${label}`,
      'background: orange; color: black',
      data ?? ''
    );
  },
  error: (label: string, data?: unknown) => {
    console.log(
      `%c ERROR | ${label}`,
      'background: red; color: white',
      data ?? ''
    );
  },
};

export default LOG;
