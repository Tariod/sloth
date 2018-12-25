'use strict';

class Schedule {
  constructor() {
    this.tasks = [];
    this.time = 0;
  }

  insert(task) {
    task.startDate = this.time < task.releaseDate ?
      task.releaseDate : this.time;
    task.endDate = this.time = this.time + task.processingTime;
    this.tasks.push(task);
  }

  getTasks() {
    return this.tasks;
  }

  setTasks(newData) {
    this.tasks = newData;
  }

  getTime() {
    return this.time;
  }

  setTime(newTime) {
    this.time = newTime;
  }

}

module.exports = { Schedule };
