import 'babel-polyfill';
import 'nprogress/nprogress.css';
import san from 'san';

import data from '../lib/utils/data.js';

const router = require('{{ routesPath }}')(data);
const root = '{{ root }}';
// const plugins = data.plugins;

// delete data.plugins;

// window['EOCKY_DATA'] = plugins
//     .reduce((data, plugin) => plugin[0](data, plugin[1]), data);
