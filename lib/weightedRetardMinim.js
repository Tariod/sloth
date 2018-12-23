'use strict';

const parseKey = (name, time) => `Name: ${name}, Time: ${time}`;

const taskCompability = (task, time) => (
  task.releaseDate + task.processingTime <= time
);

const updateTime = (task, time) => {
  time = time > task.dueDate ? task.dueDate : time;
  return time - task.processingTime;
};

function weightedRetardMinim(taskList, schedule) {
  const last = taskList.getLength() - 1;
  const cache = {};

  taskList.setData(
    taskList
      .getData()
      .sort((t1, t2) => t1.dueDate - t2.dueDate)
  );

  function scheduling(index, time, taskList) {
    if (index < 0) return 0;

    const task = taskList[index];
    const key = parseKey(task.name, time);
    if (cache[key]) return cache[key];

    let maxPrevWeight = 0;
    const currTime = updateTime(task, time);

    for (let i = index - 1; i > -1; i--) {
      if (taskCompability(taskList[i], currTime)) {
        const weight = scheduling(i, currTime, taskList);
        if (weight > maxPrevWeight)
          maxPrevWeight = weight;
      }
    }

    cache[key] = Math.max(
      task.weight + maxPrevWeight,
      scheduling(index - 1, time, taskList)
    );

    return cache[key];
  }

  return scheduling(last, taskList.getData()[last].dueDate, taskList.getData());
}

module.exports = { weightedRetardMinim };

const { Task } = require('./task.js');
const { Schedule } = require('./schedule.js');
const { TaskList } = require('./taskList');
const test = [
  new Task('a', 0, 6, 6, 2),
  new Task('b', 1, 4, 3, 4),
  new Task('c', 3, 5, 2, 4),
  new Task('d', 3, 8, 5, 7),
  new Task('e', 4, 7, 3, 2),
  new Task('f', 5, 9, 4, 1),
  new Task('g', 6, 10, 4, 3),
  new Task('h', 8, 11, 3, 5),
];

const Test = new TaskList(test);
console.log(weightedRetardMinim(Test, new Schedule()));
