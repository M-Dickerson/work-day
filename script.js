// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  // * DONE
  var saveButton = $(".saveBtn");

  saveButton.on("click", function () {
    var textEl = $(this).parent().children(".description").val();
    var timeEl = $(this).parent().attr("id");
    localStorage.setItem(textEl, timeEl);
  })
  // TODO: Add code to apply the past, present, or future class to each time
  var cTime = dayjs().format("H");

  $(".time-block").each(function() {
    var hourBlock = parseInt($(this).attr("id").slice(5));

    if (cTime === hourBlock) {
      $(this).addClass("present");
    } 
    else if (cTime < hourBlock) {
      $(this).addClass("future");
    } 
    else {
      $(this).addClass("past");
    }
  });
  // TODO: Add code to get any user input that was saved in localStorage and set
   var desText =$(".description");

   for (var i = 9; i < 17; i++) {
    var test = localStorage.getItem([i]);

    if (test !== null) {
      desText[i-9].vaule = note;
    }
   }
  // * DONE
  // targets currentDay on html
  var currentDay = $('#currentDay');
  // generates the current time
  var time = dayjs().format('dddd, MMMM D, YYYY');
  // appends to page
  currentDay.append(time);
});
