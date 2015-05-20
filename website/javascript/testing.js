/* function TasksListsTest() {
    var tag1 = new Tag("school", "red");
    var tag2 = new Tag("work", "green");
    var tag3 = new Tag("life", "blue");
 var tag4 = new Tag("food", "brown");

    var task1 = new Task("run", "running sucks", [tag1], null);
    var task2 = new Task("homework", "homework sucks", [tag3, tag2], null);
    var task3 = new Task("fun", "fun is good", [tag1, tag2], (Date.now() + 1000000));
    var task4 = new Task("blah", "blahhhhh", [tag2, tag3], (Date.now() + 10000));
    var task5 = new Task("merg", "adlfjhasldkfh", [tag3], (Date.now() + 10));
    var task6 = new Task("testing", "testestes", [tag2], (Date.now() + 10));
    var task7 = new Task("yay", "woooooooooo", [tag2, tag3], (Date.now() - 10));
    var task8 = new Task("aklsdfj", "duuuuude", [tag1, tag3], (Date.now() - 10));


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

    masterList.switchList("work");

    console.log(masterList.currentList);

    masterList.finishTask(5);
    masterList.finishTask(3);

 console.log(masterList.currentList);

 } */

/* Setting up reference variables for adding stuff to the table */
var masterList = new TasksLists();

var newTaskName;
var newTaskDescription;
var newDueDate;

var newTagName;
var newTagColor;

var newTask;
var newTag;
