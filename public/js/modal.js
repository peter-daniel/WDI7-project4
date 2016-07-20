


$("#tally-btn").click(function(){
    $('#tally-modal').css('display', 'block');
});

$("#addkids-btn").click(function(){
    $('#addkids-modal').css('display', 'block');
});

$(".close").click(function(){
    $(this).parent().parent().parent().css('display', 'none');
});


// When the user clicks anywhere outside of the modal, close it

// var model = $('#editModal');
// $(window).click(function(e){
//   if (e.target == model) {
//         $('#editModal').css('display', 'none');
//       }
// });
