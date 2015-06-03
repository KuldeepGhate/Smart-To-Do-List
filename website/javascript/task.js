/**
 * This is the task object
 *
 * @param taskName
 * @param tag
 * @param dueDate
 * @param alarm: If there is no alarm it is false
 *               If there is an alarm it is the alarm time
 * @constructor
 */
function Task(taskName, tag, dueDate, alarm) {
    this.taskName = taskName;
    this.tag = tag;
    this.id = -1;
    this.alarmTime = false;

    this.dueDate = dueDate;
    if (this.dueDate == null) {
        this.dueDate = 9000000000000;
    }
    this.dueDate /= 1000;
    this.dueDate = Math.round(this.dueDate);
    this.priority = setPriority(this);

    if (alarm) {
        this.alarmTime = Math.round(alarm / 1000);
    }
}

/**
 * Enum for the task priorities
 */
var PriorityEnum = {
    UNIMPORTANT: 0,
    IMPORTANT: 1,
    CRITICAL: 2,
    LATE: 3
};
Object.freeze(PriorityEnum);

/**
 * Sets the priority of a task based on its due date
 *
 * @param task
 * @returns {number}: The priority number
 */
function setPriority(task) {
    if (task.dueDate == null) {
        return PriorityEnum.UNIMPORTANT;
    }

    var now = Date.now();
    now = Math.round(now /= 1000);

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