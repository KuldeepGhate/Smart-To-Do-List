$(document).ready(function () {
    $("#todoTasks").html(masterList.generateList());
    $("#finishedTasks").html(masterList.generateFinishedList());

    $("#addTaskForm").dialog({
        autoOpen: false,
        maxHeight: 600,
        maxWidth: 600,
        height: 600,
        width: 600
    });

    $("#openForm").click(function () {
        $("#addTaskForm").dialog("open");
        $("#addTaskForm").empty();
        $("#addTaskForm").html(masterList.generateForm());
    });

    $("#addTaskForm").on('click', '#addTask', function (e) {
        e.preventDefault();

        var newTagName = $("#addTagName").val();
        var newTagColor = "red";
        var newTag = new Tag(newTagName, newTagColor);
        masterList.addTag(newTag);

        var newTaskName = $("#addTaskName").val();
        var newTaskDescription = $("#addTaskDescription").val();
        var newDueDate = $("#addDate").val();
        var newDateString = formatDate(newDueDate);
        var newTask = new Task(newTaskName, newTaskDescription, [newTag], newDateString);
        masterList.addTask(newTask);

        $("#todoTasks").html(masterList.generateList());
        $("#addTaskForm").dialog("close");
    });

    $("#removeItem").click(function (e) {
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

function formatDate(date) {
    var strippedDate = date.replace("-", "");
    strippedDate = strippedDate.replace("T", "");
    strippedDate = strippedDate.replace(":", "");
    return strippedDate;
}