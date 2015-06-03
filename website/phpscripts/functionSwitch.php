<?php
include 'loadJSON.php';
include 'pushToJSON.php';
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
            echo removeFromJSON($_POST['removeId']);
            break;
    }
}