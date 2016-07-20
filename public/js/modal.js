
$("#tally-btn").click(function() {
   checkAndAppend();
   $('#tally-modal').css('display', 'block');
});

$("#addkids-btn").click(function() {
   $('#addkids-modal').css('display', 'block');
});

$(".close").click(function() {
   $(this).parent().parent().parent().css('display', 'none');
});

//check if model is clicked then close it
$(window).click(function(e) {
   var target = $(e.target);
   if (target.is('#tally-modal')) {
      $('#tally-modal').css('display', 'none');
   }
   if (target.is('#addkids-modal')) {
      $('#addkids-modal').css('display', 'none');
   }
});



function checkAndAppend() {
   var orangePut = $('<p>').text(orangeTotal);
   var redPut = $('<p>').text(redTotal);
   var bluePut = $('<p>').text(blueTotal);
   var pinkPut = $('<p>').text(pinkTotal);
   var blackPut = $('<p>').text(blackTotal);
   var purplePut = $('<p>').text(purpleTotal);
   var greenPut = $('<p>').text(greenTotal);
   //check if total has been appended yet and if so delete it to stop replication
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

// When the user clicks anywhere outside of the modal, close it
