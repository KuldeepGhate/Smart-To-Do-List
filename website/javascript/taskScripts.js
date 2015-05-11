function TasksAndTags() {
    this.tasksCount = 0;
    this.tagsCount = 0;

    this.tasksAll = [];
    this.tagsAll = [];
    this.currentList = this.tasksAll;

    this.addTask = function (task) {
        this.tasksAll.push(task);
        this.tasksCount++;
    };

    this.addTag = function (tag) {
        this.tagsAll.push(tag);
        this.tagsCount++;
    };

    this.hasTag = function (type) {
        for (var tagIndex = 0; tagIndex < this.tagsCount; tagIndex++) {
            if (this.tagsAll[tagIndex].match(type)) {
                return tagIndex;
            }
        }
        return -1;
    };

    this.switchList = function (type) {
        if (type == "default") {
            this.currentList = this.tasksAll;
        }
        else {
            var tagIndex;
            if ((tagIndex = this.hasTag(type)) >= 0) {
                this.createList(this.tagsAll[tagIndex]);
            }
        }
    };

    this.createList = function (tag) {
        var newList = [];
        for (var i = 0; i < this.tasksCount; i++) {
            if (typeof(this.tasksAll[i].tags.length) == "undefined") {
                console.log("undefined: " + i)
                if (this.tasksAll[i].tags.match(tag)) {
                    newList.push(this.tasksAll[i]);
                }
            }
            else {
                for (var j = 0; j < this.tasksAll[i].tagsCount - 1; j++) {
                    console.log("defined: " + i + " " + j);
                    if (this.tasksAll[i].tags[j].match(tag)) {
                        newList.push(this.tasksAll[i]);
                    }
                }
            }
        }
        this.currentList = [];
        this.currentList = newList;
    };
}

function Task(taskName, taskDescription, priority, tags, dueDate) {
    this.taskName = taskName;
    this.taskDescription = taskDescription;
    this.priority = priority;
    this.dueDate = dueDate;
    this.tags = tags;
    this.tagsCount = null;

    if (typeof(this.tags.length) == "undefined") {
        this.tagsCount = 0;
    }
    else {
        this.tagsCount = this.tags.length;
    }
}

function Tag(tagName, tagColor) {
    this.tagName = tagName;
    this.tagColor = tagColor;

    this.match = function (tag) {
        if (typeof(tag) == "string") {
            var matches = this.tagName.match(tag);
            if (matches == tag) {
                return true;
            }
        }
        else {
            var matches = this.tagName.match(tag.name);
            if (matches[2] == tag.tagName) {
                return true;
            }
        }
        return false;
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

    masterList.switchList("school");

    console.log(masterList);
}