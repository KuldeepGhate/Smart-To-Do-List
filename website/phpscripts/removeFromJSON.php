<?php
function removeFromJSON($id) {
    $tempArray = file_get_contents('../data/taskList.json');
    $tasks = $tempArray["tasks"];
    foreach
        $taskToDelete = $tasks["id": $id];
    unset($tempArray["tasks"]);
}