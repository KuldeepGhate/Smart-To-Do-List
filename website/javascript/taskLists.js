/**
 * This object stores the master lists of tasks and tags
 */
function TasksLists() {
    this.idCount = 0;
    this.taskCount = 0;
    this.tagsCount = 0;

    this.allTasks = [];
    this.doneTasks = [];
    this.allTags = [];

    this.currentList = this.allTasks;
    this.listState = "default";

    /**
     * Adds a task to the main task list
     *
     * @param task
     */
    this.addTask = function (task) {
        this.allTasks.push(task);
        task.id = this.idCount;
        this.idCount++;
        this.taskCount++;
        this.sortAll();
    };

    /**
     * Moves a task to the done list based on its id
     *
     * @param taskId
     */
    this.finishTask = function (taskId) {
        for (var i = 0; i < this.allTasks.length; i++) {
            if (this.allTasks[i].id == taskId) {
                this.doneTasks.push(this.allTasks.splice(i, 1)[0]);
                break;
            }
        }
        this.taskCount--;
        this.switchList(this.listState);
    };

    /**
     * Adds a tag to the main tag list
     *
     * @param tag
     */
    this.addTag = function (tag) {
        this.allTags.push(tag);
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
            if (this.allTags[tagIndex].match(type)) {
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
        if (state == "default") {
            this.currentList = this.allTasks;
        }
        else {
            var tagIndex;
            if ((tagIndex = this.hasTag(state)) >= 0) {
                this.createList(this.allTags[tagIndex]);
            }
        }
        this.listState = state;
    };

    /**
     * For internal use, is called from switchList
     *
     * @param tag: the tag that the currentList is switching to
     */
    this.createList = function (tag) {
        var newList = [];
        for (var i = 0; i < this.taskCount; i++) {
            if (typeof(this.allTasks[i].tags.length) == "undefined") {
                if (this.allTasks[i].tags.match(tag)) {
                    newList.push(this.allTasks[i]);
                }
            }
            else {
                for (var j = 0; j < this.allTasks[i].tagsCount; j++) {
                    if (this.allTasks[i].tags[j].match(tag)) {
                        newList.push(this.allTasks[i]);
                    }
                }
            }
        }
        this.currentList = [];
        this.currentList = newList;
    };

    this.sortAll = function () {
        if (this.allTasks.length < 2) {
            return;
        }

        console.log(this.allTasks);

        for (var i = this.allTasks.length - 1; i >= 0; i--) {
            console.log("inside i: " + i);
            for (var j = i - 1; j >= 0; j--) {
                console.log("inside j: " + j);
                if (this.allTasks[i].priority > this.allTasks[j].priority) {
                    console.log("rearranging");
                    var temp = this.allTasks[i];
                    this.allTasks[i] = this.allTasks[j];
                    this.allTasks[j] = temp;
                }
            }
        }
    };
}
