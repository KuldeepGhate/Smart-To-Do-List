function TasksAndTags() {
    this.allTasks = [];
    this.currentList = this.allTasks;
    this.allTags = [];

    this.addTask = function (task) {
        this.allTasks.push(task);
    };

    this.addTag = function (tag) {
        this.allTags.push(tag);
    };

    this.switchList = function (type) {
        if (type == "default") {
            this.currentList = this.allTasks;
        }
        else {
            for (var i = 0; i < this.allTags.length; i++) {
                if (this.allTags[i].match(type)) {
                    this.createList(this.allTags[i]);
                }
            }
        }
    };

    this.createList = function (tag) {
        this.currentList = [];
        for (var i = 0; i < this.allTasks.length; i++) {
            for (var j = 0; j < this.allTasks[i].tags.length; j++) {
                if (this.allTasks[i].tags[j].match(tag)) {
                    this.currentList.push(this.allTasks[i])
                }
            }
        }
    };
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

    this.match = function (tag) {
        return this.tagName.match(tag.name);
    }
}

function taskExample() {
    var tag1 = new Tag("school", "red");
    var tag2 = new Tag("work", "green");
    var tag3 = new Tag("life", "blue");

    var task1 = new Task("run", "running sucks", "urgent", tag1, 201505061213);
    var task2 = new Task("homework", "homework sucks", "important", tag2, 201505312121);
    var task3 = new Task("fun", "fun is good", "default", [tag1, tag3], 201505061213);

    var masterList = new TasksAndTags();

    masterList.addTag(tag1);
    masterList.addTag(tag2);
    masterList.addTag(tag3);

    masterList.addTask(task1);
    masterList.addTask(task2);
    masterList.addTask(task3);

    console.log(masterList);

    masterList.switchList("school");

    console.log(masterList.currentList);
}