function TasksListsTest() {
    var tag1 = new Tag("school", "red");
    var tag2 = new Tag("work", "green");
    var tag3 = new Tag("life", "blue");

    var task1 = new Task("run", "running sucks", "urgent", [tag1], 201505061213);
    var task2 = new Task("homework", "homework sucks", "important", [tag3, tag2], 201505312121);
    var task3 = new Task("fun", "fun is good", "default", [tag1, tag3], 201505061213);

    var masterList = new TasksLists();

    masterList.addTag(tag1);
    masterList.addTag(tag2);
    masterList.addTag(tag3);

    masterList.addTask(task1);
    masterList.addTask(task2);
    masterList.addTask(task3);

    console.log(masterList);

    masterList.finishTask(1);

    console.log(masterList);

    masterList.switchList("work");

    console.log(masterList.currentList);

    masterList.switchList("school");

    console.log(masterList.currentList);

    masterList.switchList("default");

    console.log(masterList.currentList);
}
