'use strict';

const submodules = [
  'roster',
  'schedule',
  'task',
  'tools',
].map(path => require('./lib/' + path));

module.exports = Object.assign({}, ...submodules);
