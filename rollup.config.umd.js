import config from './rollup.config';

config.format = 'umd';
config.dest = 'dist/localforage.nopromises.js';
config.moduleName = 'localforage';

export default config;
