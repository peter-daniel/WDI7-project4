// check if 5 stars have been collected and trigger an animation
// function checkFive() {
//    if (
//       ($('i.orange-counter').length === 5) ||
//       ($('i.red-counter').length === 5) ||
//       ($('i.blue-counter').length === 5) ||
//       ($('i.pink-counter').length === 5) ||
//       ($('i.black-counter').length === 5) ||
//       ($('i.purple-counter').length === 5) ||
//       ($('i.green-counter').length === 5)
//    ) {
//      $('#starAnimation').css('display', 'block');
//       console.log("yay");
//    }
// }

// $('#starAnimation').click(function(){
//   $('#starAnimation').css('display', 'none');
// });

// get the number of stars collected and save in variable
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

// delete kid from the modal view and effect the main interface with ajax
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


// $('#start-btn').on('click', function() {
//    $('.add-kids-view-layer').css('display', 'none');
// });
//
// $(document).on("click", ".delete-btn", function() {
//    console.log("click delete");
// });


// NEW KID AJAX
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
        // add new dom elements pre page refresh
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



//
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


// WILL DRY THE BELOW UP IN TIME!


$('.red').on("click", function() {
   var kidID = $(this).data('id');
   var self = this;
   $.ajax({
      url: '/star/' + kidID,
      method: 'POST',
      success: function(data) {
        //add dom elements
         $('<i class="fa fa-star fa-4x red-counter" aria-hidden="true"></i>').css('color', 'red').addClass('star-ani').insertBefore(self);
         // increase star count
         redTotal++;
         // check if 5 starts have been collected
         checkFive();
      },
      error: function(data) {
         console.log(data);
      }
   });
});


$('.green').on("click", function() {
   var kidID = $(this).data('id');
   var self = this;
   $.ajax({
      url: '/star/' + kidID,
      method: 'POST',
      success: function(data) {
         $('<i class="fa fa-star fa-4x green-counter" aria-hidden="true"></i>').css('color', 'green').addClass('star-ani').insertBefore(self);
         redTotal++;
         checkFive();
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
         checkFive();
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
         checkFive();
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
         checkFive();
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
         checkFive();
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
         checkFive();
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


// $('.add-btn').on('click', function(e) {
//    e.preventDefault();
// });


// STAR ANIMTION
// var tl = new TimelineMax(),
//     screenH = window.innerHeight,
//     star = document.getElementById('star'),
//     starAnimation = document.getElementById('starAnimation');
//
// for (var i=0; i < 1000; i++) {
//   var newStar = star.cloneNode(true);
//   var xPos = Math.random()*80-40;
//   var rotate = Math.random()*1440-720;
//   starAnimation.appendChild(newStar);
//   tl.fromTo(newStar, 0.5,
//     {
//       opacity:0,
//       top:screenH,
//       rotation:rotate,
//       display:'block'
//     },
//     {
//       opacity:.9,
//       width:(Math.random()*5+3)+'%',
//       top:Math.random()*100,
//       ease:Power1.easeOut,
//       rotation:rotate/4,
//       display:'block',
//       left:(50+(xPos/2))+'%'
//     },i/20)
//     .to(newStar, 0.5, {
//       opacity:0,
//       rotation:0,
//       top:'80%',
//       left:(50+xPos)+'%',
//       ease:Power1.easeIn
//     },(i/20)+.45);
// }
