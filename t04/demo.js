$( document ).ready(function() {
	console.log( "ready!" );
});   
// shortcut
$(() => {
	console.log( "ready!" );
});


// $document is ready
$(myFunction)

function myFunction() {
    console.log("document is ready 222!");

//  $('input').focus(function() {
//      $(this).css('background', 'green')
//  })

    $('input').focus(onInputFocus)

    $('input').blur(onInputBlur)
}


function moveHandler(e) {
    $('#coords').html('Coords X: ' + e.clientX + ' Y: ' + e.clientY)
}

function onInputFocus(e) {
    $(e.target).css('background', 'pink')
}

function onInputBlur(e) {
    $(e.target).css('background', 'white')
}