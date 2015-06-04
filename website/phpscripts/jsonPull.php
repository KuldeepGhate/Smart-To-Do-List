<?php
function jsonPull() {
    return $tempArray = file_get_contents('../data/taskList.json');
}