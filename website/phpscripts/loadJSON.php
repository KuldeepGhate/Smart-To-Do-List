<?php
function loadJSON() {
    return $tempArray = file_get_contents('../data/taskList.json');
}