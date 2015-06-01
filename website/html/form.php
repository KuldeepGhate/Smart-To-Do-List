<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="../style/style.css">
    <link rel="stylesheet" type="text/css" href="../style/jquery-ui.css">
    <title>Todo List</title>
    <script src="../javascript/jQuery/jquery-2.1.3.js"></script>
    <script src="../javascript/jQuery/jquery-ui.js"></script>
    <script src="../javascript/tag.js"></script>
    <script src="../javascript/task.js"></script>
    <script src="../javascript/taskLists.js"></script>
    <script src="../javascript/initialize.js"></script>
    <script src="../javascript/events.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>

</head>

<body>
<div id="container">
    <div id="header">
        <h1 class="big-heading">The Best To Do List</h1>
    </div>

    <!-- The Lists -->
    <div id="content">
        <div id="todo">

            <!-- To do list -->
            <div id="divTasksTable">
                <!-- cellspacing='0' is important, must stay -->
                <table id="todoTasks" cellspacing='0'>
                </table>
            </div>

            <!-- Add Form -->
            <form action="form.php" id="addTaskForm" method="post">
                <h2>Task Manager</h2>
                <label for="addTaskName">Task Name: </label><input type='text' id='addTaskName' name='taskName'><br><br>
                <label for="addDate">Due Date:</label><input type='datetime-local' id='addDate' placeholder='Select Date' name='dueDate'><br><br>
                <label for="addAlarm">Alarm: </label><input type='checkbox' id='addAlarm' name='yes' value='true'><br><br>
                <label for="addAlarmDate">How long before would you like the alarm? </label><input type='number' id='addAlarmDate' name='time' min='1' max='60'>
                <select id='timeSelect'>
                    <option value='hours'>Hours</option>
                    <option value='minutes'>Minutes</option>
                </select><br><br>
                <label>Tag: </label><input name='tag' id='addTagName' type='text' placeholder='Tag'><br><br>
                <input id='addTask' type='submit' value='Add' name='submit'>
            </form>

            <!-- To do list -->
            <div id="divFinishedTable">
                <!-- cellspacing='0' is important, must stay -->
                <table id="finishedTasks" cellspacing='0'>
                </table>
            </div>

            <a href="#" id="addTask" class="button">Add item</a>
            <a href="#" id="editTask" class="button">Edit item</a>
            <a href="#" id="removeTask" class="button">Remove item</a>

        </div>
    </div>

    <?php


    $taskName = $_POST["taskName"];
    $taskDescription = $_POST["taskDescription"];
    $xmlFile = simplexml_load_file("task.xml");
    //  $dueDate = $_POST["dueDate"];
    $taskTag = $_POST["tag"];
    $taskColor = $_POST["tagColor"];

    $doc = new DOMDocument();
    $doc->load('task.xml');

    //grab a node
    $xpath = new DOMXPath($doc);
    $results = $xpath->query('/tasklist');
    $new_task = $results->item(0);

    //create a new, free standing node
    $task = $doc->createElement('task');
    //task description
    $description = $doc->createElement("description");
    $description->appendChild($doc->createTextNode($taskDescription));
    $task->appendChild($description);

    //task tag
    $tag = $doc->createElement("tag");
    $tag->appendChild($doc->createTextNode($taskTag));
    $task->appendChild($tag);

    //task Color
    $color = $doc->createElement("color");
    $color->appendChild($doc->createTextNode($taskColor));
    $task->appendChild($color);

    //append our new node to the node we pulled out
    $new_task->appendChild($task);

    //output original document.  $baz_nod_of_doc is

    $doc->save("task.xml")

    ?>

</body>
</html>