<?php
include 'loadJSON.php';
include 'pushToJSON.php';
include 'editJSON.php';
include 'removeFromJSON.php';

if (isset($_POST['action']) && !empty($_POST['action'])) {
    $action = $_POST['action'];
    switch ($action) {
        case 'load' :
            echo loadJSON();
            break;
        case 'push' :
            pushToJSON($_POST['jsonPush']);
            break;
        case 'finish' :
            removeFromJSON($_POST['removeId']);
            break;
        case 'edit' :
            editJSON($_POST['jsonPush'], $_POST['editId']);
            break;
    }
}