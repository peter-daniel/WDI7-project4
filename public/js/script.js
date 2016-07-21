

$('#refresh-btn').click(function(){
  location.reload();
});


$('.delete-kid').on('click', function(){
  var kidID = $(this).data('id');
  var self = this;
  $.ajax({
    url: '/delete/'+kidID,
    method: 'DELETE',
    success: function(data){
      $(self).parent().remove();
      $('.kid[data-id="'+kidID+'"]').remove();
    }
  });
});


$('.kid-add-button').on('click', function(){
  $('#addkids-modal').css('display', 'block');
});

$('#start-btn').on('click', function(){
  $('.add-kids-view-layer').css('display', 'none');
});

$(document).on("click", ".delete-btn", function(){
  console.log("click delete");
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




$('.green').on("click", function(){
  var kidID = $(this).data('id');
  var self = this;
  $.ajax({
    url: '/star/'+kidID,
    method: 'POST',
    success:function(data){
      $('<i class="fa fa-star fa-4x" aria-hidden="true"></i>').css('color', 'green').addClass('star-ani').insertBefore(self);
      redTotal++;
    }, error: function(data){
      console.log(data);
    }
  });
});


$('.red').on("click", function(){
  var kidID = $(this).data('id');
  var self = this;
  $.ajax({
    url: '/star/'+kidID,
    method: 'POST',
    success:function(data){
      $('<i class="fa fa-star fa-4x" aria-hidden="true"></i>').css('color', 'red').addClass('star-ani').insertBefore(self);
      redTotal++;
    }, error: function(data){
      console.log(data);
    }
  });
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

$('#new-kid').on('submit',function(e){
  e.preventDefault();
  // ajax call to server to create a new kid.
  var kidName = $(this).find('input').val();
  var kidColor = $(this).find('select option:selected').val();
  var kidData = { 'name': kidName, 'color': kidColor };
  $.ajax({
  url: '/new',
  data: kidData,
  success: function(data){
    kidData['colo']
}
});


// use this to target the DOM element post initial load
$(document).on("click", ".fa-star", function(){
    var self = this;
    var kidID = $(this).data('id');
    $.ajax({
      url: '/star/'+kidID,
      method: 'DELETE',
      success: function(data){
        $(self).remove();
      }
    })
});


$('.add-btn').on('click', function(e){
    e.preventDefault();
});
