<?php
$taskName = $_POST["taskName"];
$taskDescription = $_POST["taskDescription"];
$xmlFile = simplexml_load_file("task.xml");
//  $dueDate = $_POST["dueDate"];
$taskTag = $_POST["tag"];
$taskColor = $_POST["tagColor"];

$doc = new DOMDocument();
$doc->load('task.xml');

//grab a node
$xpath = new DOMXPath($doc);
$results = $xpath->query('/tasklist');
$new_task = $results->item(0);

//create a new, free standing node
$task = $doc->createElement('task');
//task description
$description = $doc->createElement("description");
$description->appendChild($doc->createTextNode($taskDescription));
$task->appendChild($description);

//task tag
$tag = $doc->createElement("tag");
$tag->appendChild($doc->createTextNode($taskTag));
$task->appendChild($tag);

//task Color
$color = $doc->createElement("color");
$color->appendChild($doc->createTextNode($taskColor));
$task->appendChild($color);

//append our new node to the node we pulled out
$new_task->appendChild($task);

//output original document.  $baz_nod_of_doc is

$doc->save("task.xml")

?>