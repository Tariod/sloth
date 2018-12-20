'use strict';

class Schedule {
  constructor() {
    this.tasks = [];
    this.currentTime = 0;
  }

  addTask(task) {
    task.startTime = this.currentTime < task.releaseDate ? this.currentTime :
      task.releaseDate;
    this.currentTime = task.startTime;
    task.endTime = task.startTime + task.processingTime;
    this.tasks.push(task);
  }

  getData() {
    return this.tasks;
  }

  setData(newData) {
    this.tasks = newData;
  }

  getCurrentTime() {
    return this.currentTime;
  }

  setCurrentTime(newTimeData) {
    this.currentTime = newTimeData;
  }

}

module.exports = { Schedule };
