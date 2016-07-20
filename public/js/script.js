
console.log("working");


$(document).on("click", ".delete-btn", function(){
  console.log("click delete");
      $(this).parent().remove();
    });

// use the 'color' from database selection to target star adds
$('.green').on("click", function(){
  $('<i class="fa fa-star fa-5x" aria-hidden="true"></i>').insertBefore(this);
});

$('.red').on("click", function(){
  $('<i class="fa fa-star fa-4x" aria-hidden="true"></i>').insertBefore(this);
});

$('.blue').on("click", function(){
  $('<i class="fa fa-star fa-4x" aria-hidden="true"></i>').insertBefore(this);
});

$('.orange').on("click", function(){
  $('<i class="fa fa-star fa-4x" aria-hidden="true"></i>').addClass('star-ani').insertBefore(this);
});


// use this to target the DOM element post initial load
$(document).on("click", ".fa-star", function(){
    $(this).remove();
});
