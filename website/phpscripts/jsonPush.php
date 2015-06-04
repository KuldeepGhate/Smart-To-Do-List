<?php
function jsonPush($jsonString) {
    file_put_contents('../data/taskList.json', json_encode($jsonString));
}