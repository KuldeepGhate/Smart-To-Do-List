<?php
if (isset($_POST['push']) && !empty($_POST['push'])) {
    $jsonObject = $_POST['push'];
    file_put_contents('../data/taskList.json', $jsonObject);
    echo $jsonObject;
} else {
    echo "Push was empty or invalid!";
}