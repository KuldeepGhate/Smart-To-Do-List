var taskNumber = 0;
$(document).ready(function () {
    $("#form").dialog({autoOpen: false,
        maxHeight: 600,
        maxWidth: 600,
        height: 600,
        width: 600
    });
    $(".add").click(function () {
        $("#form").dialog("open");
        $("#form").empty();
        $("div#form").append(

            $("<h2/>").text("Task Manager"), 

            //Task Name
            $("<label>Task Name: </label>"),
            $("<input/>", { type: 'text',id: 'task'+taskNumber, name: 'name', placeholder: 'Your Name'}), 
            $("<br/>"),$("<br/>"),

            // Due Date
            $("<label>Due Date: </label>"),
            $("<input/>", {type: 'text', id: 'datepicker',placeholder: 'Select Date'}), 
            $("<br/>"),$("<br/>"),

            //Time
            $("<label>Time: </label>"), 
            $("<input/>", {type: 'time', id: 'taskTime'}),
            $("<br/>"),$("<br/>"),

            //Alarm
            $("<label>Alarm: </label>"),
            $("<input/>", {type: 'radio', name: 'yes', value: 'yes'}),
            $("<label>Yes </label>"), 
            $("<input/>", {type: 'radio', name: 'no', value: 'no'}),
            $("<label>No </label>"),
            $("<br/>"),$("<br/>"),

            //How long before
            $("<label>How long before? </label>"),
            $("<input/>", {type: 'number', name: 'time', min:'1', max: '60'}),
            $("<select><option value='hours'>Hours</option><option value='minutes'>Minutes</option></select>"),
            $("<br/>"),$("<br/>"),

            //Tags
            $("<label>Tags </label>"),
            $("<input name:'tag', type:'text'>").attr({"placeholder": 'Tag',"id":'tag'+taskNumber}),
            $("<br/>"),$("<br/>"),

            //Tag Color
            $("<label>Priority </label>"),
            $("<input id:'tagColor' name:'tagColor' type:'text'>").attr({"placeholder": 'Color',"id":'color'+taskNumber}),
            $("<br/>"),$("<br/>"),

            //Button
            $("<button class:'add' type:'button' >Add</button>").click(
                function(){
                    var x = document.createElement("INPUT");
                    x.setAttribute("type", "checkbox");
                    x.setAttribute("id", "checkbox"+taskNumber);
                    var table = document.getElementById("myTable");
                    var row = table.insertRow(-1);
                    var cell1 = row.insertCell(-1);
                    var cell2 = row.insertCell(-1);
                    row.appendChild(x);
                    cell1.innerHTML = $("#task"+taskNumber).val();
                    cell2.innerHTML = $("#tag"+taskNumber).val();
                    $("#form").dialog("close");
                    taskNumber++;
                }
            )//click
        )//append

    });
    
    $(".remove").click(function(){
        $('#myTable tr').each(function(i,row){
           //Reference all the stuff I need
         
            var $row = $(row),
                $check = $row.find('input:checked');

            $check.each(function(i, checkbox){
               $(row).remove();
            });
        });
    });
    $(function() {
            $( "#datepicker" ).datepicker();
    }); 
});

function exec() {
    
}