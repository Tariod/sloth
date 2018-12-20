'use strict';

const tools = [
  'parser',
  'binaryHeap'
].map(path => require('./' + path));

module.exports = Object.assign({}, ...tools);
