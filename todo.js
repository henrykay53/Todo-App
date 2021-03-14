$(function() {

  //declear variables
  var listItem = $('input:text');
  var addButton = $('#addBtn');

  addButton.on('click', function() {

    var text = $('input:text').val();

    if (text === ' ') {
      $(alert('Name can not be blank'));
    } else {
      $('#my--list').append('<li>' + text + '</li>'); // add list item to list
    }
    listItem.val(' ');
  });

});


