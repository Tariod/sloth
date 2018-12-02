'use strict';

const submodules = [
  'parser',
].map(path => require('./' + path));

const tools = Object.assign({}, ...submodules);

module.exports = { tools };
