'use strict';

function retardMinim(roster, isEqlProcessingTime) {
  const tasks = roster.sort((t1, t2) => t1.dueDate - t2.dueDate);
  return isEqlProcessingTime ? eqlProcessingTime(tasks) : generalMinim(tasks);
}

function generalMinim(roster) {
  const schedule = [];
  let time = 0;

  for (const task of roster) {
    schedule.push(task);
    time += task.processingTime;
    if (time > task.dueDate) {
      const longest = schedule.reduce(
        (longest, curr) => (
          curr.processingTime > longest.processingTime ? curr : longest
        )
      );
      schedule.filter(curr => curr.name !== longest.name);
    }
  }

  return schedule;
}

function eqlProcessingTime(roster) {
  const schedule = [];
  let time = 0;

  for (const task of roster) {
    if (time < task.dueDate) {
      schedule.push(task);
      time += task.processingTime;
    }
  }

  return schedule;
}

module.exports = { retardMinim };

// const { Task } = require('./task.js');
// const test = [
// new Task('a', 0, 6, 6),
// new Task('b', 1, 4, 3),
// new Task('c', 3, 5, 2),
// new Task('d', 3, 8, 5),
// new Task('e', 4, 7, 3),
// new Task('f', 5, 9, 4),
// new Task('g', 6, 10, 4),
// new Task('h', 8, 11, 3),
//   new Task('a', 0, 6),
//   new Task('b', 1, 4),
//   new Task('c', 3, 5),
//   new Task('d', 3, 8),
//   new Task('e', 4, 7),
//   new Task('f', 5, 9),
//   new Task('g', 6, 10),
//   new Task('h', 8, 11)
// ];

// const Test = new TaskList(test);
// console.log(tasksCompability(Test));
