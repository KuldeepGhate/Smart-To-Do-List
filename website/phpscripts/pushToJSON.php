<?php
function pushToJSON($jsonString) {
    $tempArray = json_decode(file_get_contents('../data/taskList.json'), true);
    array_push($tempArray, $jsonString);
    file_put_contents('../data/taskList.json', json_encode($tempArray));
}