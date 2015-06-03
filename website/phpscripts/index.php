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
                <!--<label for="addTaskForm">Add Task</label>-->
                <label for="addTaskName">Task Name: </label><input type='text' id='addTaskName' name='taskName'><br><br>
                <label for="addDate">Due Date:</label><input type='datetime-local' id='addDate' placeholder='Select Date' name='dueDate'><br><br>
                <label for="addAlarm">Alarm: </label><input type='checkbox' id='addAlarm' name='yes' value='true'><br><br>
                <label for="addAlarmDate">How long before would you like the alarm? </label><input type='number' id='addAlarmDate' name='time' min='1' max='60'>
                <select id='timeSelect'>
                    <option value='hours'>Hours</option>
                    <option value='minutes'>Minutes</option>
                </select><br><br>
                <label>Tag: </label><input name='tag' id='addTagName' type='text' placeholder='Tag'><br><br>
                <input id='applyTask' type='submit' value='Apply' name='submit'>
            </form>

            <!-- To do list -->
            <div id="divFinishedTable">
                <!-- cellspacing='0' is important, must stay -->
                <table id="finishedTasks" cellspacing='0'>
                </table>
            </div>

            <a id="addTask" class="button">Add item</a>
            <a id="editTask" class="button">Edit item</a>
            <a id="removeTask" class="button">Remove item</a>

        </div>
    </div>

    <?php
    /*
    $doc = new DOMDocument();
    $doc->load('task.xml');

    $books = $doc->getElementsByTagName("task");
    foreach ($books as $book) {
        $authors = $book->getElementsByTagName("description");
        $author = $authors->item(0)->nodeValue;

        $publishers = $book->getElementsByTagName("tag");
        $publisher = $publishers->item(0)->nodeValue;

        $titles = $book->getElementsByTagName("color");
        $title = $titles->item(0)->nodeValue;

        echo "$title - $author - $publisher\n";
    }*/
    ?>

    <div id="footer">
        <h5 class="small-heading"><a href="https://github.com/Bluesroo/COEN-276-Project">GitHub</a></h5>
    </div>
</div>
</body>
</html>