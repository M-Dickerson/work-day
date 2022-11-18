// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  var saveButton = $('.saveBtn');

  saveButton.on('click', function () {
    var textEl = $(this).siblings('.description').val();
    var timeEl = $(this).parent().attr('id');
    localStorage.setItem(textEl, timeEl);
  })
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page. DONE
  // targets currentDay on html
  var currentDay = $('#currentDay');
  // generates the current time
  var time = dayjs().format('hh:mm');
  // appends to page
  currentDay.append(time);
});
