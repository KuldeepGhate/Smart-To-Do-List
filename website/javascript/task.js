/**
 * This is the task object
 *
 * @param taskName
 * @param taskDescription
 * @param priority
 * @param tags
 * @param dueDate
 * @constructor
 */
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