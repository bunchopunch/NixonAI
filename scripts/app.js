$(document).ready(function() {

  var inputElement = $('#inputField'),
  bot = 'e49450c12e3420ff'
  customer = 'NAIclient' + Math.floor((Math.random() * 100000));

  var submitForm = function(){
    if(inputElement.val().length === 0){
      return false
    } else {

      $.xmlrpc({
        url: 'http://www.pandorabots.com/pandora/talk-xml',
//        methodName: 'foo',
        params: [bot, inputElement.val(), 'a1b2'],
        success: function(respongitrse, status, jqXHR) {
          console.log(response);
          inputElement.val("Success");
          $('#outputField').append("response");
        },
        error: function(jqXHR, status, error) {
          console.log('Error ---');
          console.log(status);
          console.log(error);
        }
      });

      console.log(customer + ': ' + inputElement.val());
      return false
    }
  }

  var nixonResponse = function(responsePhrase){
    console.log(responsePhrase)
  }

  $('#inputForm').on('submit', submitForm);

});