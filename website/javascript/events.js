$(document).ready(function () {
    var editId = null;
    $("#todoTasks").html(masterList.generateList());
    $("#finishedTasks").html(masterList.generateFinishedList());

    $("#content").click(function () {
        masterList.refresh();
        $("#finishedTasks").html(masterList.generateFinishedList());
    });

    // After clicking the edit button
    $("#editTask").click(function () {
        $("#taskForm").dialog("open");
        $("#taskForm").empty();
        $("#taskForm").html(masterList.generateForm("edit"));

        var taskToEdit;

        $("#todoTasks tr").each(function (i, row) {
            //Reference all the stuff I need
            var rowHtml = $(row);
            var check = rowHtml.find("input:checked");

            check.each(function () {
                var id = $(rowHtml).attr("id");
                taskToEdit = masterList.getTask(id);
                console.log(taskToEdit);
            });
        });
        editId = taskToEdit.id;
        $("#addTaskName").val(taskToEdit.taskName);
        $("#addTaskDescription").val(taskToEdit.taskDescription);
        // DateTime and alarm time pre-population aren't working
        $("#addTagName").val(taskToEdit.tag.tagName);
    });

    // After clicking the add button
    $("#addTask").click(function (e) {
        e.preventDefault();

        var newTag = $("#addTagName").val();
        var newTaskName = $("#addTaskName").val();
        var newTaskDescription = $("#addTaskDescription").val();
        var newDueDate = new Date($("#addDate").val());
        var newAlarm = getAlarmTime();
        var newTask = new Task(newTaskName, newTaskDescription, newTag, newDueDate, newAlarm);
        if (editId) {
            newTask.id = editId;
            editId = null;
        }
        masterList.addTask(newTask);

        $("#todoTasks").html(masterList.generateList());
        $("#taskForm").dialog("close");

        /*
         * INSERT AJAX CALLS TO PHP HERE
         */
    });

    $("#taskForm").on("click", "#editTask", function (e) {
        e.preventDefault();


        /*
         * INSERT AJAX CALLS TO PHP HERE
         */
    });


    // After selecting a task and clicking the remove button
    $("#removeTask").click(function (e) {
        e.preventDefault();

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