<?php
function removeFromJSON($id) {
    $jsonArray = file_get_contents('../data/taskList.json', true);
    $decodedArray = json_decode($jsonArray);
     foreach ($decodedArray as $key => $entry) {
        foreach ($entry as $value) {
            # code..1.
            if ($value->id == $id) {
                $value->taskName="taskName";

            
            }
        }
    }
    $newJsonArray = json_encode($decodedArray);
    file_put_contents('../data/taskList.json', $newJsonArray);
    return $newJsonArray;
}