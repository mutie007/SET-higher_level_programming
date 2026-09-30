#!/usr/bin/node
const request = require('request');
request(process.argv[2], function (err, response, body) {
  if (err) {
    console.log(err);
  } else {
    const todos = JSON.parse(body);
    const completed = {};
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].completed === true) {
        const userId = todos[i].userId;
        if (completed[userId] === undefined) {
          completed[userId] = 1;
        } else {
          completed[userId] += 1;
        }
      }
    }
    console.log(completed);
  }
});
