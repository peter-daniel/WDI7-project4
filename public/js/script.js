// check if 5 stars have been collected and trigger an animation

function checkFive() {
   if ($('i.red-counter').length === 5){
     var fiveStarKid = $('.red').text();
     $('#fiveStarsAni p').text(fiveStarKid);
     $('#fiveStarsAni').css('display', 'block');
      console.log(fiveStarKid);
    }  else {
      $('#fiveStarsAni p').text('');
      $('#fiveStarsAni').css('display', 'none');
   }
}

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
//       console.log("yay");
//    }
// }


// get the number of stars collected and save in variable
var orangePut = $('<p>').text($('i.orange-counter').length);
var redPut = $('<p>').text($('i.red-counter').length);
var bluePut = $('<p>').text($('i.blue-counter').length);
var pinkPut = $('<p>').text($('i.pink-counter').length);
var blackPut = $('<p>').text($('i.black-counter').length);
var purplePut = $('<p>').text($('i.purple-counter').length);
var greenPut = $('<p>').text($('i.green-counter').length);




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
           // starBase class added to target and dry code
            $('<div>').addClass(data.starColor, 'starBase').append(
            $('<p>').addClass('kids-name-main').text(data.kidName)
            )
         );
         $('.kids').append(kidContainer);

         console.log(data);
      }
   });
});



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


$('.starBase').on("click", function() {
   var kidID = $(this).data('id');
   // get the class colour of the starbase clicked on
   var starColour = $(this).attr('class').split(' ')[0];
   var self = this;
   console.log(starColour);
   $.ajax({
      url: '/star/' + kidID,
      method: 'POST',
      success: function(data) {
        //add dom elements
         $('<i class="fa fa-star fa-4x red-counter" aria-hidden="true"></i>').css('color', starColour).addClass('star-ani').insertBefore(self);
         // increase star count concantinate the
         var starCount = starColour+'Total';
         console.log(starCount);

         starCount++;
         // check if 5 starts have been collected
         checkFive();
      },
      error: function(data) {
         console.log(data);
      }
   });
});


// //////////////////////////////////////////////////
// //////////////////////////////////////////////////


// DELETE STARS - DOCUMENT CALL COZ STARS ARE NOT PRESENT ON LOAD
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
