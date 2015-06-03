<?php
function removeFromJSON($id) {
    $jsonArray = file_get_contents('../data/taskList.json');
    foreach ($jsonArray['tasks'] as $task) {
        if ($task->id == $id) {
            return $task;
        }
    }
}