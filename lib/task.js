'use strict';

const Task = (name, description, priority, start, deadline, duration) => (
  { name, description, priority, start, deadline, duration }
);

module.exports = { Task };
