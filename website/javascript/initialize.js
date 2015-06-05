// Runs upon opening the website

/*
 * INSERT AJAX CALLS TO PHP HERE
 *
 * Might want to do a when{}..then{} thing here so that the program doesn't continue until
 * masterList has been populated from the saved JSON file. 
 */
		var task = new Array();	
		var masterList = new TasksLists();

		$.when( $.ajax({
            url: '../phpscripts/jsonPull.php',
            type: 'GET',
			success: function (output) {
			    var tasks = jQuery.parseJSON(output);
                console.log(tasks);
                
                for (var i in tasks) {
              		task[i]=new Task(tasks[i].taskName, tasks[i].tag, tasks[i].dueDate, alarm);
                    masterList.addTask(task[i]);
                    console.log(task[i]);
                }
            }
        	})).then(function () {
        		 $("#todoTasks").html(masterList.generateList());
			    $("#finishedTasks").html(masterList.generateFinishedList());
			    $("#addTagName").html(masterList.generateTagOptions());
			    $("#sortSelect").html(masterList.generateTagOptions());

              }
     
    ); 

console.log(masterList);