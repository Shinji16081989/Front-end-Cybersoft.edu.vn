const $odd = $('a:odd');
// test thu odd
//$odd.hide();
const $secureLinks = $('a[href^="https://"]');
//test securelinks
//$secureLinks.hide();
const $pdfs = $('a[href$=".pdf"]');
//$pdfs.hide();
const $pdfCheckbox = $("<label><input type='checkbox'> Allow PDF downloads</label>");

$secureLinks.attr('target', '_blank');
$pdfs.attr('download', true);

$odd.css('color', 'green');

$secureLinks.addClass('secure');
$pdfs.addClass('pdf');

$pdfs.on('click', function(event) {
  //check if checkbox has been checked
  // if zero checkboxes are checked
  if ($(':checked').length === 0){
    // prevent download of document.
    // alert the user
    event.preventDefault();
    alert('Please check the box to allow PDF downloads.');
  }
});

$('#links').append($pdfCheckbox);

$('a').each(function(){
  const url = $(this).attr('href');
  $(this).parent().append(`(${url})`);
});
