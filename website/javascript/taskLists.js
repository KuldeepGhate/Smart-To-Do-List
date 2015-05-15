/**
 * This object stores the master lists of tasks and tags
 */
function TasksLists() {
    this.idCount = 0;
    this.taskCount = 0;
    this.tagsCount = 0;

    this.tasksAll = [];
    this.tasksDone = [];
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
        task.id = this.idCount;
        this.idCount++;
        this.taskCount++;
    };

    /**
     * Moves a task to the done list based on its id
     *
     * @param taskId
     */
    this.finishTask = function (taskId) {
        for (var i = 0; i < this.tasksAll.length; i++) {
            if (this.tasksAll[i].id == taskId) {
                this.tasksDone.push(this.tasksAll.splice(i, 1)[0]);
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
        if (state == "default") {
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
        for (var i = 0; i < this.taskCount; i++) {
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
