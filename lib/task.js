'use strict';

class Task {
  constructor(name, description, priority, start, deadline, duration) {
    this.name = name;
    this.description = description;
    this.priority = priority;
    this.start = start;
    this.deadline = deadline;
    this.duration = duration;
  }
}

module.exports = { Task };
