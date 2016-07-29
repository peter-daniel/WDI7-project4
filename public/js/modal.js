
// open the tally modal
$("#tally-btn").click(function() {
   checkAndAppend();
   $('#tally-modal').css('display', 'block');
});

// // trigger the add kids modal
// $('.kid-add-button').on('click', function() {
//    $('#addkids-modal').css('display', 'block');
// });

// open the add kids modal
$("#addkids-btn").click(function() {
   $('#addkids-modal').css('display', 'block');
});

// close and refresh window to tigger database population (needs it for the screensaver plugin to work)
$(".close").click(function() {
  //  $(this).parent().parent().parent().css('display', 'none');
  location.reload();

});

// When the user clicks anywhere outside of the modal, close it
$(window).click(function(e) {
   var target = $(e.target);
   // check if it is the model clicked first
   if (target.is('#tally-modal')) {
      // $('#tally-modal').css('display', 'none');
      location.reload();
   }
   if (target.is('#addkids-modal')) {
      // $('#addkids-modal').css('display', 'none');
      location.reload();
   }
});

// get number of stars collected for tally
function checkAndAppend() {
  //
  var orangePut = $('<p>').text($('i.orange-counter').length);
   var redPut = $('<p>').text($('i.red-counter').length);
   var bluePut = $('<p>').text($('i.blue-counter').length);
   var pinkPut = $('<p>').text($('i.pink-counter').length);
   var blackPut = $('<p>').text($('i.black-counter').length);
   var purplePut = $('<p>').text($('i.purple-counter').length);
   var greenPut = $('<p>').text($('i.green-counter').length);
   
   //check if total has been appended yet and if so delete it first before appending - to stop replication
   if ($('#orange').children().length > 0) {
      $('#orange').children().remove();
      $('#orange').append(orangePut);
   } else {
      $('#orange').append(orangePut);
   }
   if ($('#red').children().length > 0) {
      $('#red').children().remove();
      $('#red').append(redPut);
   } else {
      $('#red').append(redPut);
   }
   if ($('#purple').children().length > 0) {
      $('#purple').children().remove();
      $('#purple').append(purplePut);
   } else {
      $('#purple').append(purplePut);
   }
   if ($('#blue').children().length > 0) {
      $('#blue').children().remove();
      $('#blue').append(bluePut);
   } else {
      $('#blue').append(bluePut);
   }
   if ($('#pink').children().length > 0) {
      $('#pink').children().remove();
      $('#pink').append(pinkPut);
   } else {
      $('#pink').append(pinkPut);
   }
   if ($('#green').children().length > 0) {
      $('#green').children().remove();
      $('#green').append(greenPut);
   } else {
      $('#green').append(greenPut);
   }
   if ($('#black').children().length > 0) {
      $('#black').children().remove();
      $('#black').append(blackPut);
   } else {
      $('#black').append(blackPut);
   }
}
