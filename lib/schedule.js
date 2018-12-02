'use strict';

function Schedule() {
  this.data = [];
  this.isDone = false;
  this.onDone = () => {};
}

Schedule.prototype.append = function(err, value) {
  if (this.isDone) return this;
  if (err) {
    this.complete(err, this.data);
    return this;
  }
  this.data.add(value);
  return this;
};

Schedule.prototype.done = function(callback) {
  this.onDone = callback;
  return this;
};

Schedule.prototype.complete = function(err, data) {
  if (this.isDone) return this;
  this.isDone = true;
  this.onDone(err, data);
  return this;
};

module.exports = { Schedule };
