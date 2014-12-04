$(document).ready(function() {
  var inputElement = $('#inputField'),
  bot = 'e49450c12e3420ff',
  customer = 'NAIclient' + Math.floor((Math.random() * 100000)),
  apiUrl = 'http://www.pandorabots.com/pandora/talk-xml';

  var submitForm = function(){
    outputTarget.append('<p class="user">' + inputElement.val() + '</p>');
    showMostRecent();
    if(inputElement.val().length === 0){
      return false
    } else {
      $.post( apiUrl, 
        {botid: bot, input: $('#inputField').val(), custid: customer},
        function() {})
        .done(function(data) {
          $('#inputField').val("");
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
    showMostRecent();
  }

  var showMostRecent = function(){
    var objDiv = document.getElementById("outputField");
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  $('#inputForm').on('submit', submitForm);
});