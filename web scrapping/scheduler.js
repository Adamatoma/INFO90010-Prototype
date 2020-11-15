// var express = require("express");
var exec = require('child_process').exec,
  child;
var schedule = require("node-schedule");

function getTime() {
  vardate = newDate();
  vary = date.getFullYear();
  varm = date.getMonth() + 1;
  vard = date.getDate();
  varh = date.getHours();
  varmi = date.getMinutes();
  vars = date.getSeconds();

  m = m < 10 ? "0" + m : m;
  d = d < 10 ? "0" + d : d;
  h = h < 10 ? "0" + h : h;
  mi = mi < 10 ? "0" + mi : mi;
  s = s < 10 ? "0" + s : s;

  returny + "_" + m + "_" + d + "_" + h + "_" + mi + "_" + s;

}

function start() {

  scrap = exec('node pc_domain.js',
    function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if (error !== null) {
        console.log('exec error: ' + error);
      }
    });

  json_to_csv = exec('node json_to_csv.js',
    function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if (error !== null) {
        console.log('exec error: ' + error);
      }
    });

  csv_to_sql = exec('node csv_to_sql.js',
    function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if (error !== null) {
        console.log('exec error: ' + error);
      }
    });
}


var rule = new schedule.RecurrenceRule();
// every 5 minutes
rule.minute = new schedule.Range(0, 59, 1);

// // every day at 00:00
// rule.hour = 00;
// rule.minute = 00;
// rule.second = 00;
// rule.dayOfWeek = new scheduler.Range(0,6);


var j = schedule.scheduleJob(rule, function () {
  start();
});