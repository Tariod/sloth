'use strict';

const { BinaryHeap } = require('./tools');
const { Task } = require('./task.js');

class TaskList extends BinaryHeap {
  constructor(data = [], key = 'dueDate', isMax = false) {
    super(data, key, isMax);
    data.forEach(task => this.validate(task));
  }

  static validate(task) {
    if (!(task instanceof Task)) throw new Error('TypeError');
  }

  insert(task) {
    this.validate(task);
    super.insert(task);
  }
}

module.exports = { TaskList };
