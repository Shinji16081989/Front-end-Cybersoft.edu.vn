// Create the "Reveal Spoler" button
const $button = $('<button>Reveal Spoiler</button>');

$('.spoiler span').append($button);
// Hide the spoiler text
$('.spoiler span').hide();
//When the button is pressed
// $('.spoiler button').click(function(){
//   //Show the spoiler text
//   $('.spoiler span').show();
//   // Hide the "Reveal Spoiler"
//   $('.spoiler button').hide();
// });

$('.spoiler').on('click', 'button', function(event){
  //Show the spoiler text
  $(event.target).prev().show();
  // Hide the "Reveal Spoiler"
  $(event.target).hide();
});
  // Hide the "Reveal Spoiler"
