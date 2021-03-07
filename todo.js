$(function() {

    var $addButton = $('#add--btn');
    var $form = $('#Item--form');
    var $textInput = $('input:text');
    

    $addButton.show();
    $form.hide();

    // $('h1').hide().delay(500).fadeIn(500);
    // $('#add--btn').hide().delay(500).fadeIn(500);

    $addButton.on('click', function() {
        $addButton.hide();
        $form.show();
    });

    $form.on('submit', function(e) {
        e.preventDefault();
        var $newText = $('input:text').val();
        $('ol').append('<li>' + $newText + '</li>');
        $form.hide();
        $addButton.show();
        $textInput.val(' ');
    });
});