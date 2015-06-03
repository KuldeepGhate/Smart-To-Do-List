<?php
function clearJSON() {
    file_put_contents('../data/taskList.json', '{"tasks": []}');
}