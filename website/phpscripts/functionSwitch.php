<?php
include 'pushToJSON.php';

if (isset($_POST['action']) && !empty($_POST['action'])) {
    $action = $_POST['action'];
    switch ($action) {
        case 'push' :
            pushToJSON($_POST['jsonPush']);
            break;
    }
}