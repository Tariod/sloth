'use strict';

const submodules = [
  'retardMinim',
  'schedule',
  'task',
  'taskList',
  'tasksCompability',
].map(path => require('./lib/' + path));

const tools = require('./lib/tools');

module.exports = Object.assign({ tools }, ...submodules);
