// Runs upon opening the website

var date = new Date();
var masterList = new TasksLists();

var task1 = new Task("run", "running sucks", masterList.allTags[0], null, false);
var task2 = new Task("homework", "homework sucks", masterList.allTags[2], null, false);
var task3 = new Task("fun", "fun is good", masterList.allTags[3], (date.getTime() + 8630000000), false);
var task4 = new Task("blah", "blahhhhh", masterList.allTags[1], (date.getTime() + 8650000000), false);
var task5 = new Task("merg", "adlfjhasldkfh", masterList.allTags[2], (date.getTime() + 370000000), false);
var task6 = new Task("testing", "testestes", masterList.allTags[0], (date.getTime() + 350000000), false);
var task7 = new Task("yay", "woooooooooo", masterList.allTags[1], (date.getTime() - 10), false);
var task8 = new Task("aklsdfj", "duuuuude", masterList.allTags[2], (date.getTime() - 10), false);

masterList.addTask(task1);
masterList.addTask(task2);
masterList.addTask(task3);
masterList.addTask(task4);
masterList.addTask(task5);
masterList.addTask(task6);
masterList.addTask(task7);
masterList.addTask(task8);

console.log(masterList);