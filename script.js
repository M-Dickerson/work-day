$(document).ready(function () {
// stores any data entered into local storage
  var saveButton = $(".saveBtn");

  saveButton.on("click", function () {
    var textEl = $(this).parent().children(".description").val();
    var timeEl = $(this).parent().attr("id").slice(5);
    localStorage.setItem(textEl, timeEl);
  })
// applies present, future, and past colors to calendar slots
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
// pulls data out of local storage and appends it to the page
   var desText =$(".description");

   for (var i = 9; i < 17; i++) {
    var test = localStorage.getItem([i]);
    if (test !== null) {
      desText[i-9].value = test;
    };
   }
// appends current date to top of page
  // targets currentDay on html
  var currentDay = $('#currentDay');
  // generates the current time
  var time = dayjs().format('dddd, MMMM D, YYYY');
  // appends to page
  currentDay.append(time);
});
