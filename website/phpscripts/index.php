<?php
$doc = new DOMDocument();
$doc->load('task.xml');

$books = $doc->getElementsByTagName("task");
foreach ($books as $book) {
    $authors = $book->getElementsByTagName("description");
    $author = $authors->item(0)->nodeValue;

    $publishers = $book->getElementsByTagName("tag");
    $publisher = $publishers->item(0)->nodeValue;

    $titles = $book->getElementsByTagName("color");
    $title = $titles->item(0)->nodeValue;

    echo "$title - $author - $publisher\n";
}
?>
