/**
 * This is the task object
 *
 * @param taskName
 * @param taskDescription
 * @param priority
 * @param tags: Needs to be an array, even if it is only one tag being passed in
 * @param dueDate
 * @constructor
 */
function Task(taskName, taskDescription, priority, tags, dueDate) {
    this.taskName = taskName;
    this.taskDescription = taskDescription;
    this.priority = priority;
    this.dueDate = dueDate;
    this.tags = tags;
    this.tagsCount = tags.length;
    this.id = -1;
}
