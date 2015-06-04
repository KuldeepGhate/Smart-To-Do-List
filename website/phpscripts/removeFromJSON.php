<?php
function removeFromJSON($taskName, $tag, $id, $dueDate, $alarmTime) {
    $jsonArray = file_get_contents('../data/taskList.json', true);
    $decodedArray = json_decode($jsonArray);
     foreach ($decodedArray as $key => $entry) {
        foreach ($entry as $value) {
            if ($value->id == $id) {
                $value->taskName = $taskName;
                $value->tag = $tag;
                $value->id = $id;
                $value->dueDate = $dueDate;
                $value->alarmTime = $alarmTime;
            }
        }
    }
    $newJsonArray = json_encode($decodedArray);
    file_put_contents('../data/taskList.json', $newJsonArray);
    return $newJsonArray;
}