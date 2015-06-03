// Runs upon opening the website
/*
 * INSERT AJAX CALLS TO PHP HERE
 */

var masterList = new TasksLists();

var date = new Date();
/*
 var task1 = new Task("run", masterList.allTags[0], null, false);
 var task2 = new Task("homework", masterList.allTags[2], null, false);
 var task3 = new Task("fun", masterList.allTags[3], (date.getTime() + 8630000000), false);
 var task4 = new Task("blah", masterList.allTags[1], (date.getTime() + 8650000000), false);
 var task5 = new Task("REALLREALLY LONG TASK NAME WOW SO LONG", masterList.allTags[2], (date.getTime() + 370000000), false);
 var task6 = new Task("testing", "FAILTAG", (date.getTime() + 350000000), false);
 var task7 = new Task("yay", masterList.allTags[1], (date.getTime() - 10), false);
 var task8 = new Task("aklsdfj", masterList.allTags[2], (date.getTime() - 10), false);
 */

$(document).ready(function () {
    var task = [];

            $.ajax({
            url: '../phpscripts/functionSwitch.php',
            data: {
                action: 'load'
            },
            type: 'post',
            success: function (output) {
                var tasks = jQuery.parseJSON(output);
                console.log(tasks.tasks[0].taskName);
                for (var i in tasks.tasks) {
                    task[i]=new Task(tasks.tasks[i].taskName,tasks.tasks[i].tag,tasks.tasks[i].dueDate,tasks.tasks[i].alarm);
                    masterList.addTask(task[i]);
                    console.log(task[i]);
                }
                console.log(task.length);
            }
        });   
            
$("#todoTasks").html(masterList.generateList());
    $("#finishedTasks").html(masterList.generateFinishedList());

});
/*
 masterList.addTask(task1);
 masterList.addTask(task2);
 masterList.addTask(task3);
 masterList.addTask(task4);
 masterList.addTask(task5);
 masterList.addTask(task6);
 masterList.addTask(task7);
 masterList.addTask(task8);
 */
console.log(masterList);