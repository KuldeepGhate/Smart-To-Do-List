$(document).ready(function(){
    $("#hello").dialog({autoOpen: false,
        maxHeight: 600,
        maxWidth: 600,
        height: 600,
        width: 600
    });
    $(".add").click(function(){
        $("#hello").dialog("open");
    });
});
function exec(){
    $("#hello").dialog("close");
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(-1);
    cell1.innerHTML = $("#task").val();
}