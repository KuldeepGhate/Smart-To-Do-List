/**
 * This is the task object
 *
 * @param taskName
 * @param taskDescription
 * @param tags: Needs to be an array, even if it is only one tag being passed in
 * @param dueDate
 * @constructor
 */
function Task(taskName, taskDescription, tags, dueDate) {
    this.taskName = taskName;
    this.taskDescription = taskDescription;
    this.dueDate = dueDate;
    this.priority = setPriority(this);
    this.tags = tags;
    this.tagsCount = tags.length;
}

var PriorityEnum = {
    UNIMPORTANT: 0,
    IMPORTANT: 1,
    CRITICAL: 2,
    LATE: 3
};
Object.freeze(PriorityEnum);

function setPriority(task) {
    if (task.dueDate == null) {
        return PriorityEnum.UNIMPORTANT;
    }

    var now = Date.now();
    if (now - task.dueDate < -60000) {
        return PriorityEnum.UNIMPORTANT;
    }
    else if (now - task.dueDate < -6000) {
        return PriorityEnum.IMPORTANT;
    }
    else if (now - task.dueDate < 0) {
        return PriorityEnum.CRITICAL;
    }

    return PriorityEnum.LATE;
}