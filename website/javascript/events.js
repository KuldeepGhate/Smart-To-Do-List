$(document).ready(function () {
    var editId = null;
    $("#todoTasks").html(masterList.generateList());
    $("#finishedTasks").html(masterList.generateFinishedList());

    $("#content").click(function () {
        masterList.refresh();
        $("#finishedTasks").html(masterList.generateFinishedList());
    });

    // After clicking the add button
    $("#addTask").click(function (e) {
        e.preventDefault();

        var newTag = $("#addTagName").val();
        var newTaskName = $("#addTaskName").val();
        var newDueDate = new Date($("#addDate").val());
        var newAlarm = getAlarmTime();
        var newTask = new Task(newTaskName, newTag, newDueDate, newAlarm);
        if (editId) {
            newTask.id = editId;
            editId = null;
            $("#addTask").text("Add item");
            $("#removeTask").text("Remove item");
            $("#addTaskName").val("");
            $("#addTagName").val("");
        }
        masterList.addTask(newTask);

        $("#todoTasks").html(masterList.generateList());

        /*
         * INSERT AJAX CALLS TO PHP HERE
         */
    });

    // After clicking the edit button
    $("#editTask").click(function () {
        var taskToEdit;

        $("#todoTasks tr").each(function (i, row) {
            //Reference all the stuff I need
            var rowHtml = $(row);
            var check = rowHtml.find("input:checked");

            check.each(function () {
                var id = $(rowHtml).attr("id");
                taskToEdit = masterList.getTask(id);
            });
        });
        editId = taskToEdit.id;
        $("#addTaskName").val(taskToEdit.taskName);
        // DateTime and alarm time pre-population aren't working
        $("#addTagName").val(taskToEdit.tag.tagName);

        $("#addTask").text("Apply Edit");
        $("#removeTask").text("Cancel Edit");

        /*
         * INSERT AJAX CALLS TO PHP HERE
         */
    });

    // After selecting a task and clicking the remove button
    $("#removeTask").click(function (e) {
        e.preventDefault();

        if (editId) {
            editId = null;
            $("#addTask").text("Add item");
            $("#removeTask").text("Remove item");
            $("#addTaskName").val("");
            $("#addTagName").val("");
            return;
        }

        $("#todoTasks tr").each(function (i, row) {
           //Reference all the stuff I need
            var rowHtml = $(row);
            var check = rowHtml.find("input:checked");

            check.each(function () {
                var finishedTaskId = $(rowHtml).attr("id");
                masterList.finishTask(finishedTaskId);

                /*
                 * INSERT AJAX CALLS TO PHP HERE
                 */
            });
        });
        $("#todoTasks").html(masterList.generateList());
        $("#finishedTasks").html(masterList.generateFinishedList());
    });
});

/**
 * Takes the alarm parameters from the add form and transforms it for a task
 *
 * @returns {*}: if the user wants an alarm it returns the alarm time
 *               if the user doesn"t want an alarm it returns false
 */
function getAlarmTime() {
    if ($("#addAlarm:checkbox:checked").length > 0) {
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

function getHumanTime(taskDueDate) {
    return new Date(taskDueDate * 1000);
}