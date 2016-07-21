// 5 star prize animation
function checkFive() {
   if (
      ($('i.orange-counter').length >= 5) ||
      ($('i.red-counter').length >= 5) ||
      ($('i.blue-counter').length >= 5) ||
      ($('i.pink-counter').length >= 5) ||
      ($('i.black-counter').length >= 5) ||
      ($('i.purple-counter').length >= 5) ||
      ($('i.green-counter').length >= 5)
   ) {
      console.log("yay");
   }
}


var orangePut = $('<p>').text($('i.orange-counter').length);
var redPut = $('<p>').text($('i.red-counter').length);
var bluePut = $('<p>').text($('i.blue-counter').length);
var pinkPut = $('<p>').text($('i.pink-counter').length);
var blackPut = $('<p>').text($('i.black-counter').length);
var purplePut = $('<p>').text($('i.purple-counter').length);
var greenPut = $('<p>').text($('i.green-counter').length);



// $('#refresh-btn').click(function() {
//    location.reload();
// });
//

$('.delete-kid').on('click', function() {
   var kidID = $(this).data('id');
   var self = this;
   $.ajax({
      url: '/delete/' + kidID,
      method: 'DELETE',
      success: function(data) {
         $(self).parent().remove();
         $('.kid[data-id="' + kidID + '"]').remove();
      }
   });
});


$('.kid-add-button').on('click', function() {
   $('#addkids-modal').css('display', 'block');
});

$('#start-btn').on('click', function() {
   $('.add-kids-view-layer').css('display', 'none');
});

$(document).on("click", ".delete-btn", function() {
   console.log("click delete");
});


// NEW KID
$('#new-kid').on('submit', function(e) {
   e.preventDefault();
   // ajax call to server to create a new kid.
   var kidName = $(this).find('input').val();
   var kidColor = $(this).find('select option:selected').val();
   var kidData = {
      'kid_name': kidName,
      'star_color': kidColor
   };
   $.ajax({
      url: '/new',
      method: 'POST',
      data: kidData,
      success: function(data) {
         var kidContainer = $('<div>').addClass('kid').attr('data-id', data._id);
         kidContainer.append(
            $('<div>').addClass(data.starColor).append(
               $('<p>').addClass('kids-name-main').text(data.kidName)
            )
         );
         $('.kids').append(kidContainer);

         console.log(data);
      }
   });
});




var greenTotal = 0;
var blackTotal = 0;
var redTotal = 0;
var blueTotal = 0;
var orangeTotal = 0;
var pinkTotal = 0;
var purpleTotal = 0;



// use the 'color' from database selection to target star adds
//////////////////////////////////////////////////
//////////////////////////////////////////////////

$('.green').on("click", function() {
   var kidID = $(this).data('id');
   var self = this;
   $.ajax({
      url: '/star/' + kidID,
      method: 'POST',
      success: function(data) {
         $('<i class="fa fa-star fa-4x green-counter" aria-hidden="true"></i>').css('color', 'green').addClass('star-ani').insertBefore(self);
         redTotal++;

      },
      error: function(data) {
         console.log(data);
      }
   });
});


$('.red').on("click", function() {
   var kidID = $(this).data('id');
   var self = this;
   $.ajax({
      url: '/star/' + kidID,
      method: 'POST',
      success: function(data) {
         $('<i class="fa fa-star fa-4x red-counter" aria-hidden="true"></i>').css('color', 'red').addClass('star-ani').insertBefore(self);
         redTotal++;
         checkFive()
      },
      error: function(data) {
         console.log(data);
      }
   });
});

$('.blue').on("click", function() {
   var kidID = $(this).data('id');
   var self = this;
   $.ajax({
      url: '/star/' + kidID,
      method: 'POST',
      success: function(data) {
         $('<i class="fa fa-star fa-4x blue-counter" aria-hidden="true"></i>').css('color', 'blue').addClass('star-ani').insertBefore(self);
         redTotal++;
      },
      error: function(data) {
         console.log(data);
      }
   });
});

$('.orange').on("click", function() {
   var kidID = $(this).data('id');
   var self = this;
   $.ajax({
      url: '/star/' + kidID,
      method: 'POST',
      success: function(data) {
         $('<i class="fa fa-star fa-4x orange-counter" aria-hidden="true"></i>').css('color', 'orange').addClass('star-ani').insertBefore(self);
         redTotal++;
      },
      error: function(data) {
         console.log(data);
      }
   });
});

$('.black').on("click", function() {
   var kidID = $(this).data('id');
   var self = this;
   $.ajax({
      url: '/star/' + kidID,
      method: 'POST',
      success: function(data) {
         $('<i class="fa fa-star fa-4x black-counter" aria-hidden="true"></i>').css('color', 'black').addClass('star-ani').insertBefore(self);
         redTotal++;
      },
      error: function(data) {
         console.log(data);
      }
   });
});

$('.pink').on("click", function() {
   var kidID = $(this).data('id');
   var self = this;
   $.ajax({
      url: '/star/' + kidID,
      method: 'POST',
      success: function(data) {
         $('<i class="fa fa-star fa-4x pink-counter" aria-hidden="true"></i>').css('color', 'pink').addClass('star-ani').insertBefore(self);
         redTotal++;
      },
      error: function(data) {
         console.log(data);
      }
   });
});

$('.purple').on("click", function() {
   var kidID = $(this).data('id');
   var self = this;
   $.ajax({
      url: '/star/' + kidID,
      method: 'POST',
      success: function(data) {
         $('<i class="fa fa-star fa-4x purple-counter" aria-hidden="true"></i>').css('color', 'purple').addClass('star-ani').insertBefore(self);
         redTotal++;
      },
      error: function(data) {
         console.log(data);
      }
   });
});

//////////////////////////////////////////////////
//////////////////////////////////////////////////




// DELETE STARS
$(document).on("click", ".fa-star", function() {
   var self = this;
   var kidID = $(this).data('id');
   $.ajax({
      url: '/star/' + kidID,
      method: 'DELETE',
      success: function(data) {
         $(self).remove();
      }
   });
});


$('.add-btn').on('click', function(e) {
   e.preventDefault();
});
