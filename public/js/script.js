

$('#start-btn').on('click', function(){
  $('.add-kids-view-layer').css('display', 'none');
});

$(document).on("click", ".delete-btn", function(){
  console.log("click delete");
      $(this).parent().remove();
    });

var green  = 0;
var black = 0;
var red = 0;
var blue = 0;
var orange = 0;
var pink = 0;
var purple = 0;

// use the 'color' from database selection to target star adds




$('.green').on("click", function(){
  $('<i class="fa fa-star fa-5x" aria-hidden="true"></i>').css('color', 'green').insertBefore(this);
  green++;
  console.log(green);
});

$('.red').on("click", function(){
  $('<i class="fa fa-star fa-4x" aria-hidden="true"></i>').css('color', 'red').insertBefore(this);
  green++;
  console.log(green);
});

$('.blue').on("click", function(){
  $('<i class="fa fa-star fa-4x" aria-hidden="true"></i>').css('color', 'blue').insertBefore(this);
  green++;
  console.log(green);
});

$('.orange').on("click", function(){
  $('<i class="fa fa-star fa-4x" aria-hidden="true"></i>').css('color', 'orange').addClass('star-ani').insertBefore(this);
});

$('.black').on("click", function(){
  $('<i class="fa fa-star fa-4x" aria-hidden="true"></i>').css('color', 'black').addClass('star-ani').insertBefore(this);
  black++;
  console.log(black);
});

$('.pink').on("click", function(){
  $('<i class="fa fa-star fa-4x" aria-hidden="true"></i>').css('color', 'pink').addClass('star-ani').insertBefore(this);
});

$('.purple').on("click", function(){
  $('<i class="fa fa-star fa-4x" aria-hidden="true"></i>').css('color', 'purple').addClass('star-ani').insertBefore(this);
});



// use this to target the DOM element post initial load
$(document).on("click", ".fa-star", function(){
    $(this).remove();
});


$('.add-btn').on('click', function(e){
    e.preventDefault();
});
