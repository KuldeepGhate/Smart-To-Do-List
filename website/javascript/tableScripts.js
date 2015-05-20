$(document).ready(function () {
    $("#myTable").html(masterList.generateList());
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

        newTagName = $("#addTagName").val();
        newTagColor = "red";
        newTag = new Tag(newTagName, newTagColor);
        masterList.addTag(newTag);

        newTaskName = $("#addTaskName").val();
        newTaskDescription = $("#addTaskDescription").val();
        newDueDate = $("#addDate").val();
        newDueDate = formatDate(newDueDate);
        newTask = new Task(newTaskName, newTaskDescription, [newTag], newDueDate);
        masterList.addTask(newTask);

        $("#myTable").html(masterList.generateList());
        $("#addTaskForm").dialog("close");
    });

    $("#removeItem").click(function (e) {
        e.preventDefault();

        $('#myTable tr').each(function (i, row) {
            console.log(i);
           //Reference all the stuff I need
            var $row = $(row);
            var $check = $row.find('input:checked');
            masterList.finishTask(i);

            $check.each(function (i, checkbox) {
               $(row).remove();
            });
        });

        $("#finishedTasks").html(masterList.generateFinishedList());
    });
    console.log("END");
    console.log(masterList);
});

function formatDate(date) {
    var strippedDate = date.replace("-", "");
    strippedDate = strippedDate.replace("T", "");
    strippedDate = strippedDate.replace(":", "");
    return strippedDate;
}