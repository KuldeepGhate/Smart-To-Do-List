$(document).ready(function () {
    var editId = null;
    $("#todoTasks").html(masterList.generateList());
    $("#finishedTasks").html(masterList.generateFinishedList());
    $("#addTagName").html(masterList.generateTagOptions());
    $("#sortSelect").html(masterList.generateTagOptions());
     
    
    window.setInterval(function () {
        masterList.refresh();
    }, 1000);

    // After clicking the sort button
    $("#sortTasks").click(function () {
        masterList.switchList($("#sortSelect").val());
        $("#todoTasks").html(masterList.generateList());
    });

    // After clicking the add button
    $("#addTask").click(function (e) {
        e.preventDefault();

        var newTag = $("#addTagName").val();
        var newTaskName = $("#addTaskName").val();

        if (newTaskName == "") {
            alert("Task name cannot be null.");
            return;
        }

        var newDueDate = new Date($("#addDate").val());
        var newAlarm = getAlarmTime();
        var newTask = new Task(newTaskName, newTag, newDueDate, newAlarm);
        if (editId) {
            newTask.id = editId;
            editId = null;
            editingReset();
        }
        masterList.addTask(newTask);

        $("#addTaskForm")[0].reset();
        $("#todoTasks").html(masterList.generateList());

        $.ajax({
            url: '../phpscripts/jsonPush.php',
            data: {
                push: masterList.packageForJson()
            },
            type: 'post',
            success: function (output) {
                console.log("JSON that was pushed:\n" + output);
            }
        });
    });

    // After clicking the edit button
    $("#editTask").click(function () {
        var taskToEdit = null;
        masterList.editing = true;

        $("#todoTasks tr").each(function (i, row) {
            //Reference all the stuff I need
            var rowHtml = $(row);
            var check = rowHtml.find("input:checked");

            check.each(function () {
                var id = $(rowHtml).attr("id");
                taskToEdit = masterList.getTask(id);
            });
        });

        if (taskToEdit == null) {
            return;
        }
        editId = taskToEdit.id;
        $("#addTaskName").val(taskToEdit.taskName);
        // DateTime and alarm time pre-population aren't working
        $("#addTagName").val(taskToEdit.tag.tagName);

        $("#addTask").text("Apply Edit");
        $("#removeTask").text("Cancel Edit");
    });

// After selecting a task and clicking the remove button
    $("#removeTask").click(function (e) {
        e.preventDefault();

        if (editId) {
            masterList.editing = false;
            editId = null;
            editingReset();
            return;
        }

        $("#todoTasks tr").each(function (i, row) {
            //Reference all the stuff I need
            var rowHtml = $(row);
            var check = rowHtml.find("input:checked");

            check.each(function () {
                var finishedTaskId = $(rowHtml).attr("id");
                masterList.finishTask(finishedTaskId);
            });
        });
        $("#todoTasks").html(masterList.generateList());
        $("#finishedTasks").html(masterList.generateFinishedList());

        $.ajax({
            url: '../phpscripts/jsonPush.php',
            data: {
                push: masterList.packageForJson()
            },
            type: 'post',
            success: function (output) {
                console.log("JSON that was pushed:\n" + output);
            }
        });
    });
});

/**
 * Resets the form after editing
 */
function editingReset() {
    $("#addTask").text("Add Task");
    $("#removeTask").text("Remove Task");
    $("#addTaskName").val("");
    $("#addTagName").val("");
}

/**
 * Takes the alarm parameters from the add form and transforms it for a task
 *
 * @returns {*}: if the user wants an alarm it returns the alarm time
 *               if the user doesn't want an alarm it returns false
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

/**
 * Takes the taskDueDate (in epoch) and converts it back to human-readable time
 *
 * @param taskDueDate
 * @returns {Date}
 */
function getHumanTime(taskDueDate) {
    return new Date(taskDueDate * 1000);
}