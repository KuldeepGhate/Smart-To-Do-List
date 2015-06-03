<?php
include 'pushToJSON.php';

if (isset($_POST['action']) && !empty($_POST['action'])) {
    $action = $_POST['action'];
    $jsonSting = $_POST['jsonPush'];
    switch ($action) {
        case 'test' :
            echo pushToJSON($_POST['jsonPush']);
            break;
    }
}