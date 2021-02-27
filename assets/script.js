// my debugging console.logs are in here still (as comments) because I think 
//they're relevant to understanding how I tested my code.

// set up global variables.
var currentDayEl = $( "#currentDay" );
var saveBtns = $( ".saveBtn" );
var events = $( ".row" ).find("textarea");
var currentHour = parseInt(moment().format("HH"));
console.log(currentHour);


// ready function so all the dynamic stuff only happens once the HTML is loaded.
$("document").ready(function() {

    // console.log("ready!");

    // display the current date.
    currentDayEl.text(moment().format("dddd,  MMM DD, YYYY"));

    // loop through event slots and a) color code them to indicate whether they are
    // past (red), present (green) or future (blue); and b) to fill the textareas 
    // with stored values from local storage.
    events.each(function() {
        var thisHour = parseInt($( this ).parent().parent().attr("id"));
        // console.log(thisHour)
        if (thisHour < currentHour) {
            $( this ).css("background-color", "pink")
        } else if (thisHour == currentHour) {
            $( this ).css("background-color", "lightgreen")
        } else {
            $( this ).css("background-color", "lightblue")
        }
        // console.log($( this ).parent().attr("id"))

        // fill event slot with stored value from local storage.
        var stored = localStorage.getItem("#" + thisHour)
        // console.log(stored);
        if (stored != null) {
            $( this ).val(stored);
        }
    })

    // onclick function to store textarea value in local storage.
    saveBtns.click( function () {
        // console.log("click");
        var id = $( this ).parent().parent().attr('id');
        var id = "#" + id
        // console.log(id);
        // console.log($( id ).children().eq(1).find( "textarea" ));
        var text = $( id ).children().eq(1).find( "textarea" ).val()
        console.log(text);
        localStorage.setItem(id, text);
    })



    // eventSlots.click( function() {
    //     console.log('click')
    //     var input = prompt("What event are you having at this time?")
    //     console.log(input)
    //     $(this).text(input);

    // })

    
});




