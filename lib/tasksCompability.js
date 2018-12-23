'use strict';

const { TaskList } = require('./taskList.js');

function tasksCompability(taskList) {
  if (taskList.isEqlProcessingTime) {
    taskList.sort('releaseDate');
    const availableTasks = new TaskList();
    const schedule = [];
    const size = taskList.getLength();
    let time;

    for (let i = 0; i < size; i++) {
      if (!availableTasks.getLength())
        time = taskList.getFirst().releaseDate;

      while (taskList.getFirst() && taskList.getFirst().releaseDate <= time)
        availableTasks.insert(taskList.extract());

      const immediate = availableTasks.extract();
      if (immediate.dueDate <= time) return null;

      schedule.push(immediate);
      time += immediate.processingTime;
    }
    return schedule;
  }

  return null;
}

module.exports = { tasksCompability };
