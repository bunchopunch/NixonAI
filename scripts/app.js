$(document).ready(function() {
  var inputElement = $('#inputField'),
  bot = 'e49450c12e3420ff'
  customer = 'NAIclient' + Math.floor((Math.random() * 100000));

  var submitForm = function(){
    if(inputElement.val().length === 0){
      return false
    } else {
      $.post( 'http://www.pandorabots.com/pandora/talk-xml', 
        {botid: 'e49450c12e3420ff', input: 'Hi', custid: 'NAIclient'},
        function() {})
        .done(function(data) {
          var content = $(data).find( "that" ).text(); // Get the text out of the XML response
          showResponse(content);
        })
        .fail(function() {
          console.log( "Error" );
        })
        .always(function() {
      }, 'xml');
      return false
    }
  }

  var showResponse = function(responsePhrase){
    console.log(responsePhrase);
    $('#inputField').val("");
    $('#outputField').append('<p>' + responsePhrase + '</p>');
  }

  $('#inputForm').on('submit', submitForm);
});