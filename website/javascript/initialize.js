// Runs upon opening the website

var date = new Date();

var tag1 = new Tag("school", "red");
var tag2 = new Tag("work", "green");
var tag3 = new Tag("life", "blue");
var tag4 = new Tag("food", "brown");

var task1 = new Task("run", "running sucks", tag1, null, false);
var task2 = new Task("homework", "homework sucks", tag3, null, false);
var task3 = new Task("fun", "fun is good", tag2, (date.getTime() + 8630000000), false);
var task4 = new Task("blah", "blahhhhh", tag4, (date.getTime() + 8650000000), false);
var task5 = new Task("merg", "adlfjhasldkfh", tag3, (date.getTime() + 370000000), false);
var task6 = new Task("testing", "testestes", tag4, (date.getTime() + 350000000), false);
var task7 = new Task("yay", "woooooooooo", tag3, (date.getTime() - 10), false);
var task8 = new Task("aklsdfj", "duuuuude", tag1, (date.getTime() - 10), false);

var masterList = new TasksLists();

masterList.addTag(tag1);
masterList.addTag(tag2);
masterList.addTag(tag3);

masterList.addTask(task1);
masterList.addTask(task2);
masterList.addTask(task3);
masterList.addTask(task4);
masterList.addTask(task5);
masterList.addTask(task6);
masterList.addTask(task7);
masterList.addTask(task8);

console.log(masterList);