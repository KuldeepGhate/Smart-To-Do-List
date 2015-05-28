$(document).ready(function () {
    $("#todoTasks").html(masterList.generateList());
    $("#finishedTasks").html(masterList.generateFinishedList());

    // Initializes the add form
    $("#addTaskForm").dialog({
        autoOpen: false,
        maxHeight: 600,
        maxWidth: 600,
        height: 600,
        width: 600
    });

    // After clicking the add on the main page
    $("#addTask").click(function () {
        $("#addTaskForm").dialog("open");
        $("#addTaskForm").empty();
        $("#addTaskForm").html(masterList.generateForm());
    });

    // After clicking the add button in the form
    $("#addTaskForm").on('click', '#addTask', function (e) {
        e.preventDefault();

        var newTagName = $("#addTagName").val();
        var newTagColor = "red";
        var newTag = new Tag(newTagName, newTagColor);
        masterList.addTag(newTag);

        var newTaskName = $("#addTaskName").val();
        var newTaskDescription = $("#addTaskDescription").val();
        var newDueDate = new Date($("#addDate").val());
        var newAlarm = getAlarmTime();
        var newTask = new Task(newTaskName, newTaskDescription, [newTag], newDueDate, newAlarm);
        masterList.addTask(newTask);

        $("#todoTasks").html(masterList.generateList());
        $("#addTaskForm").dialog("close");
    });

    // After selecting a task an clicking the remove button
    $("#removeTask").click(function (e) {
        e.preventDefault();

        $('#todoTasks tr').each(function (i, row) {
           //Reference all the stuff I need
            var rowHtml = $(row);
            var check = rowHtml.find('input:checked');

            check.each(function () {
                masterList.finishTask($(rowHtml).attr('id'));
                $(rowHtml).remove();
            });
        });

        $("#finishedTasks").html(masterList.generateFinishedList());
    });
});

/**
 * Takes the alarm parameters from the add form and transforms it for a task
 *
 * @returns {*}: If the user wants an alarm it returns the alarm time
 *               If the user doesn't want an alarm it returns false
 */
function getAlarmTime() {
    if ($('#addAlarm:checkbox:checked').length > 0) {
        var alarmTime = $("#addAlarmDate").val();
        var timeUnit = $("#timeSelect").val();
        var multiplier;
        if (timeUnit == "minutes") {
            multiplier = 60;
        }
        else if (timeUnit == "hours") {
            multiplier = 3600;
        }
        else {
            multiplier = 86400;
        }
        return alarmTime * multiplier;
    }
    return false;
}