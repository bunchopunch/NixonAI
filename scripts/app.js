$(document).ready(function() {
  var inputElement = $('#inputField'),
  bot = 'e49450c12e3420ff',
  customer = 'NAIclient' + Math.floor((Math.random() * 100000)),
  apiUrl = 'http://www.pandorabots.com/pandora/talk-xml';

  var submitForm = function(){
    var currentOutgoingMessage = inputElement.val().toString();
    $('#inputField').val("");
    outputTarget.append('<p class="user">' + currentOutgoingMessage + '</p>');
    if(inputElement.val().length === 0){
      return false
    } else {
      $.post( apiUrl, 
        {botid: bot, input: currentOutgoingMessage, custid: customer},
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
    var outputTarget = $('#outputField');
    outputTarget.append('<p>' + responsePhrase + '</p>');
    outputTarget.animate({ scrollTop: outputTarget.attr("scrollHeight") - outputTarget.height() }, 500);
  }

  $('#inputForm').on('submit', submitForm);
});