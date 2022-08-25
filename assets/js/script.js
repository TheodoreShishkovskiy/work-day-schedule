// Display for the 
var todayDate = moment().format('dddd, MMM Do YYYY');
$("currentDay").html(todayDate);

$(document).ready(function () {
    $('.saveBtn').on('click', function () {
    //Click listener for saveBtn
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        
    //Saves all text to local storage
        localStorage.setItem(time, text);
    })

    function timeTracker() {
    //Shows the current number of hours
        var timeNow = moment().hour();

    //sets a loop over the time blocks
    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

        //Makes sure you can check the time and add classes for the background indicators
        if (blockTime < timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockTime === timeNow) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
    }

//Gets the items from local storage
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

timeTracker();

})