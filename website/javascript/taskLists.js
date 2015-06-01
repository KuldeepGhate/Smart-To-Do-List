/**
 * This object stores the master lists of tasks and tags
 */
function TasksLists() {
    this.idCount = 0;
    this.taskCount = 0;

    this.allTasks = [];
    this.doneTasks = [];
    this.allTags = [
        new Tag("None", "white"),
        new Tag("School", "red"),
        new Tag("Work", "green"),
        new Tag("Life", "blue"),
        new Tag("Food", "brown")
    ];

    this.currentList = this.allTasks;
    this.listState = "default";

    /**
     * Adds a task to the main task list
     *
     * @param task
     */
    this.addTask = function (task) {
        var tagIndex = this.hasTag(task.tag);
        if (tagIndex > -1) {
            task.tag = this.allTags[tagIndex];
        }
        else {
            task.tag = this.allTags[0];
        }
        console.log(tagIndex);
        console.log(task.tag);
        if (task.id < 0) {
            task.id = this.idCount++;
        }

        this.allTasks.push(task);
        this.taskCount++;
        this.sortAll();
        this.switchList(this.listState);
    };

    /**
     * Returns the task given an idd
     *
     * @param taskId
     * @returns {*}: if taskId exists in the list, returns the task
     *               if taskId doesn't exist in the list, returns false
     */
    this.getTask = function (taskId) {
        for (var i = 0; i < this.allTasks.length; i++) {
            if (this.allTasks[i].id == taskId) {
                return this.allTasks[i];
            }
        }
        return false;
    };

    /**
     * Moves a task to the done list based on its id
     *
     * @param taskId
     */
    this.finishTask = function (taskId) {
        for (var i = 0; i < this.taskCount; i++) {
            if (this.allTasks[i].id == taskId) {
                var doneTask = this.allTasks.splice(i, 1);
                this.doneTasks.push(doneTask[0]);
                break;
            }
        }
        this.taskCount--;
        this.switchList(this.listState);
    };

    /**
     * Checks if a tag exists
     *
     * @param type
     * @returns {number}: 0+ the index of the tag if it is there
     *                    -1 there was no match
     */
    this.hasTag = function (type) {
        for (var tagIndex = 0; tagIndex < this.allTags.length; tagIndex++) {
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
            if (this.allTasks[i].tag.match(tag)) {
                newList.push(this.allTasks[i]);
            }
        }
        this.currentList = [];
        this.currentList = newList;
    };

    /**
     * Sorts the main list based on the due dates
     */
    this.sortAll = function () {
        if (this.allTasks.length < 2) {
            return;
        }
        for (var i = this.allTasks.length - 1; i >= 0; i--) {
            for (var j = i - 1; j >= 0; j--) {
                if (this.allTasks[i].dueDate < this.allTasks[j].dueDate) {
                    var temp = this.allTasks[i];
                    this.allTasks[i] = this.allTasks[j];
                    this.allTasks[j] = temp;
                }
            }
        }
    };

    /**
     * Refreshes the tasks in the main list
     */
    this.refresh = function () {
        for (var i = 0; i < this.allTasks.length; i++) {
            setPriority(this.allTasks[i]);
        }
    };

    /**
     * Generates the to do list based on the current list
     *
     * @returns {string}: The html for the list
     */
    this.generateList = function () {
        var htmlString = "";

        htmlString = htmlString.concat("<tr></tr><tr><th>Name</th><th>Tag</th><th>Checkbox</th></tr>");
        for (var i = 0; i < this.currentList.length; i++) {
            var task = this.currentList[i];
            htmlString = htmlString.concat("<tr id='" + task.id + "'><td>" + task.taskName + "</td><td>" + task.tag.tagName +
                "</td><td><input type='radio' name='test' value='testing'/></td></tr>");
        }
        return htmlString;
    };

    /**
     * Generates the finished list
     *
     * @returns {string}: The html for the list
     */
    this.generateFinishedList = function () {
        var htmlString = "";

        htmlString = htmlString.concat("<tr></tr><tr><th>Name</th><th>Tag</th></tr>");
        for (var i = this.doneTasks.length - 1; i > -1; i--) {
            var task = this.doneTasks[i];
            htmlString = htmlString.concat("<tr id='" + task.id + "'><td>" + task.taskName + "</td><td>" + task.tag.tagName + "</td></tr>");
        }
        return htmlString;
    }
}
