$(document).ready(function() {

  var inputElement = $('#inputField'),
  bot = 'e49450c12e3420ff'
  customer = 'NAIclient' + Math.floor((Math.random() * 100000));

  function submitForm(){
    if(inputElement.val().length === 0){
      return false
    } else {

      $.xmlrpc({
        url: 'http://www.pandorabots.com/pandora/talk-xml',
//        methodName: 'foo',
        params: [bot, inputElement.val(), 'a1b2'],
        success: function(response, status, jqXHR) { /* ... */ },
//        error: function(jqXHR, status, error) { /* ... */ }
      });

      console.log(customer + ': ' + inputElement.val());
      return false
    }
  }

  function nixonResponse(responsePhrase){
    console.log(responsePhrase)
  }

  $('#inputForm').on('submit', submitForm);

});