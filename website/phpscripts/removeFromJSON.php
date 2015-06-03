<?php
function removeFromJSON($id) {
    $jsonArray = file_get_contents('../data/taskList.json', true);
    $decodedArray = json_decode($jsonArray);
    foreach ($decodedArray as $key => $entry) {
        foreach ($entry as $value) {
            if ($value->id == $id) {
                unset($decodedArray->$key[$value]);
            }
        }
    }
    $newJsonArray = json_encode($decodedArray);
    file_put_contents('../data/taskList.json', $newJsonArray);
    return 100;
}