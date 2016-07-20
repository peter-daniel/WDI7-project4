

$('#refresh-btn').click(function(){
  location.reload();
});


$('.kid-add-button').on('click', function(){
  $('#addkids-modal').css('display', 'block');
});

$('#start-btn').on('click', function(){
  $('.add-kids-view-layer').css('display', 'none');
});

$(document).on("click", ".delete-btn", function(){
  console.log("click delete");
      $(this).parent().remove();
    });

var greenTotal  = 0;
var blackTotal = 0;
var redTotal = 0;
var blueTotal = 0;
var orangeTotal = 0;
var pinkTotal = 0;
var purpleTotal = 0;

// var orangePut = $('<p>').text(orangeTotal);
// $('#orange').parent().append(orangePut);

// use the 'color' from database selection to target star adds




$(document).on("click", '.green', function(){
  $('<i class="fa fa-star fa-5x" aria-hidden="true"></i>').css('color', 'green').addClass('star-ani').insertBefore(this);
  greenTotal++;
  console.log(greenTotal);
});

$('.red').on("click", function(){
  $('<i class="fa fa-star fa-4x" aria-hidden="true"></i>').css('color', 'red').addClass('star-ani').insertBefore(this);
  redTotal++;
  console.log(redTotal);
});

$('.blue').on("click", function(){
  $('<i class="fa fa-star fa-4x" aria-hidden="true"></i>').css('color', 'blue').addClass('star-ani').insertBefore(this);
  blueTotal++;
  console.log(blueTotal);
});

$('.orange').on("click", function(){
  $('<div class="fa fa-star fa-4x" aria-hidden="true"></div>').css('color', 'orange').addClass('star-ani').insertBefore(this);
  orangeTotal++;
  console.log(orangeTotal);
});

$('.black').on("click", function(){
  $('<i class="fa fa-star fa-4x" aria-hidden="true"></i>').css('color', 'black').addClass('star-ani').insertBefore(this);
  blackTotal++;
  console.log(blackTotal);
});

$('.pink').on("click", function(){
  $('<i class="fa fa-star fa-4x" aria-hidden="true"></i>').css('color', 'pink').addClass('star-ani').insertBefore(this);
  pinkTotal++;
  console.log(pinkTotal);
});

$('.purple').on("click", function(){
  $('<i class="fa fa-star fa-4x" aria-hidden="true"></i>').css('color', 'purple').addClass('star-ani').insertBefore(this);
  purpleTotal++;
  console.log(purpleTotal);
});



// use this to target the DOM element post initial load
$(document).on("click", ".fa-star", function(){
    $(this).remove();
});


$('.add-btn').on('click', function(e){
    e.preventDefault();
});
