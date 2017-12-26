//
// const content = "This is <strong>Strong Content </strong>"
//
// $('#blogTitlePreview').text("Hello world");
// $('#blogContentPreview').html(content);
$('#flashMessage').hide();

$('#previewButton').click(function(){
  const title = $('#blogTitleInput').val();
  const content = $('#blogContentInput').val();

  $('#blogTitlePreview').text(title);
  $('#blogContentPreview').html(content);
  $('#flashMessage').slideDown(2000);
  $('#flashMessage').delay(5000);
  $('#flashMessage').slideUp(1000);
});
