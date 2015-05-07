function TaskList() {
    this.task = [];
    this.append = function (task) {
        this.task.push(task);
    }
}

function Task(taskName, taskDescription, priority, tags, dueDate) {
    this.taskName = taskName;
    this.taskDescription = taskDescription;
    this.priority = priority;
    this.tags = tags;
    this.dueDate = dueDate;
}

function Tag(tagName, tagColor) {
    this.tagName = tagName;
    this.tagColor = tagColor;
}

function taskExample() {
    var tag1 = new Tag("school", "red");
    var tag2 = new Tag("work", "green");
    var newTask = new Task("bob", "eat a banana", "urgent", [tag1, tag2], "201505061215");
    var newTaskList = new TaskList();
    newTaskList.append(newTask);
    console.log(newTask.priority);
    console.log(newTask.tags);
    console.log(newTask.taskName);
}