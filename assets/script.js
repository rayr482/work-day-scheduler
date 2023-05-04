// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?

    $('.saveBtn').on('click', function () {
        var hour = $(this).parent().attr('id');
        var textInput = $(this).siblings('.description').val();
        localStorage.setItem(hour, textInput);
    });

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    
    var currentHour = (dayjs().hour());
    var hr9 = $('#hour-9');
    var hr10 = $('#hour-10');
    var hr11 = $('#hour-11');
    var hr12 = $('#hour-12');
    var hr13 = $('#hour-13');
    var hr14 = $('#hour-14');
    var hr15 = $('#hour-15');
    var hr16 = $('#hour-16');
    var hr17 = $('#hour-17');
    var hours = [hr9, hr10, hr11, hr12, hr13, hr14, hr15, hr16, hr17];
    var times = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    var index = times.indexOf(parseInt(dayjs().hour()))
    console.log(index);

    if (currentHour < 9) {
        futureTimes();
    } else if (currentHour > 17) {
        pastTimes();
    } else {
        changeHour();
    }

    function futureTimes() {
        for (i = 0; i < hours.length; i++) {
            $(hours[i]).addClass('future');
        }
    }

    function pastTimes() {
        for (i = 0; i < hours.length; i++) {
            $(hours[i]).addClass('past');
        }
    }

    function changeHour() {
        $(hours[index]).addClass('present');
        
        for (i = 0; i < index; i++) {
            $(hours[i]).addClass('past');
        }

        for (i = index + 1; i < hours.length; i++) {
            $(hours[i]).addClass('future');
        }
    }

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));

    // TODO: Add code to display the current date in the header of the page.

    var currentDate = dayjs().format('dddd, MMMM D, YYYY')
    $('#currentDay').text(currentDate);
  });

