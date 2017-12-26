const $odd = $('a:odd');
// test thu odd
//$odd.hide();
const $secureLinks = $('a[href^="https://"]');
//test securelinks
//$secureLinks.hide();
const $pdfs = $('a[href$=".pdf"]');
//$pdfs.hide();

$secureLinks.attr('target', '_blank');
$pdfs.attr('download', true);

$odd.css('backgroundColor', 'green');

$secureLinks.addClass('secure');
$pdfs.addClass('pdf');
