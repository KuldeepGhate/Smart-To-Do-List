/**
 * This object stores the master lists of tasks and tags
 */
function TasksLists() {
    this.tasksCount = 0;
    this.tagsCount = 0;

    this.tasksAll = [];
    this.tagsAll = [];
    this.currentList = this.tasksAll;
    this.listState = "default";

    /**
     * Adds a task to the main task list
     *
     * @param task
     */
    this.addTask = function (task) {
        this.tasksAll.push(task);
        this.tasksCount++;
    };

    /**
     * Adds a tag to the main tag list
     *
     * @param tag
     */
    this.addTag = function (tag) {
        this.tagsAll.push(tag);
        this.tagsCount++;
    };

    /**
     * Checks if a tag exists
     *
     * @param type
     * @returns {number}: 0+ the index of the tag if it is there
     *                    -1 there was no match
     */
    this.hasTag = function (type) {
        for (var tagIndex = 0; tagIndex < this.tagsCount; tagIndex++) {
            if (this.tagsAll[tagIndex].match(type)) {
                return tagIndex;
            }
        }
        return -1;
    };

    /**
     * Switches the list to another tag or to the default view
     *
     * @param state: a string, the desired state of the currentList
     */
    this.switchList = function (state) {
        if (this.listState == state) {
            return;
        }
        else if (state == "default") {
            this.currentList = this.tasksAll;
        }
        else {
            var tagIndex;
            if ((tagIndex = this.hasTag(state)) >= 0) {
                this.createList(this.tagsAll[tagIndex]);
            }
        }
        this.listState = state;
    };

    /**
     * For internal use, is called from switchList
     *
     * @param tag the tag that the currentList is switching to
     */
    this.createList = function (tag) {
        var newList = [];
        for (var i = 0; i < this.tasksCount; i++) {
            if (typeof(this.tasksAll[i].tags.length) == "undefined") {
                if (this.tasksAll[i].tags.match(tag)) {
                    newList.push(this.tasksAll[i]);
                }
            }
            else {
                for (var j = 0; j < this.tasksAll[i].tagsCount; j++) {
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

function tasksAndTagsTest() {
    var tag1 = new Tag("school", "red");
    var tag2 = new Tag("work", "green");
    var tag3 = new Tag("life", "blue");

    var task1 = new Task("run", "running sucks", "urgent", tag1, 201505061213);
    var task2 = new Task("homework", "homework sucks", "important", [tag3, tag2], 201505312121);
    var task3 = new Task("fun", "fun is good", "default", [tag1, tag3], 201505061213);

    var masterList = new TasksAndTags();

    masterList.addTag(tag1);
    masterList.addTag(tag2);
    masterList.addTag(tag3);

    masterList.addTask(task1);
    masterList.addTask(task2);
    masterList.addTask(task3);

    console.log(masterList.currentList);

    masterList.switchList("work");

    console.log(masterList.currentList);

    masterList.switchList("default");

    console.log(masterList.currentList);

    masterList.switchList("school");

    console.log(masterList.currentList);

    masterList.switchList("life");

    console.log(masterList.currentList);

    masterList.switchList("life");

    console.log(masterList.currentList);

    masterList.switchList("default");

    console.log(masterList);
}