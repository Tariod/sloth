'use strict';

const submodules = [
  'schedule',
  'task',
  'taskList',
  'tasksCompability',
].map(path => require('./lib/' + path));

const tools = require('./lib/tools');

module.exports = Object.assign({ tools }, ...submodules);
