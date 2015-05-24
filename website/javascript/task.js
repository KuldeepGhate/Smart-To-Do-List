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
    this.tags = tags;
    this.tagsCount = tags.length;
    this.id = -1;

    this.dueDate = dueDate;
    if (this.dueDate == null) {
        this.dueDate = 9000000000000;
    }
    this.dueDate /= 1000;
    this.dueDate = Math.round(this.dueDate);
    this.priority = setPriority(this);

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
    now = Math.round(now /= 1000);
    console.log(now + "\n" + task.dueDate + "\n" + (now - task.dueDate));

    if (now - task.dueDate < -8640000) {
        return PriorityEnum.UNIMPORTANT;
    }
    else if (now - task.dueDate < -360000) {
        return PriorityEnum.IMPORTANT;
    }
    else if (now - task.dueDate <= 10) {
        return PriorityEnum.CRITICAL;
    }

    return PriorityEnum.LATE;
}