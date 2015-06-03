<?php
function removeFromJSON($id) {
    $jsonArray = file_get_contents('../data/taskList.json', true);
    $decodedArray = json_decode($jsonArray);
    foreach ($decodedArray as $key => $entry) {
        if ($entry['id'] == $id) {
            unset($entry);
        }
    }
    $newJsonArray = json_encode($decodedArray);
    file_put_contents('../data/taskList.json', $newJsonArray);
    return $newJsonArray;
}