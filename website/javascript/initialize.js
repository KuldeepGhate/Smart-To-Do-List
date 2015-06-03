// Runs upon opening the website
/*
 * INSERT AJAX CALLS TO PHP HERE
 */

var masterList = new TasksLists();

var date = new Date();

var task1 = new Task("Go for a run", masterList.allTags[0], null, false);
var task2 = new Task("Finish homework", masterList.allTags[1], null, false);
var task3 = new Task("Watch movie", masterList.allTags[4], (date.getTime() + 8630000000), false);
var task4 = new Task("Clean room", masterList.allTags[3], (date.getTime() + 8650000000), false);
var task5 = new Task("Fight crime", masterList.allTags[2], (date.getTime() + 370000000), false);
var task6 = new Task("Study for test", masterList.allTags[1], (date.getTime() + 350000000), false);
var task7 = new Task("Finish book", masterList.allTags[3], (date.getTime() - 10000), (date.getTime() + 50000));
var task8 = new Task("Finish project", masterList.allTags[1], (date.getTime() - 100000), (date.getTime() - 1000000));

masterList.addTask(task1);
masterList.addTask(task2);
masterList.addTask(task3);
masterList.addTask(task4);
masterList.addTask(task5);
masterList.addTask(task6);
masterList.addTask(task7);
masterList.addTask(task8);

console.log(masterList);