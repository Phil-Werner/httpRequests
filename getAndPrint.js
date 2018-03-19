var https = require('https');



function getAndPrintHTML() {

  var entireData = "";

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {

      console.log('Chunk Received.  Length:', data.length)
      entireData += data;

    });

    response.on('end', function() {

      console.log('Response stream complete.');

      console.log(entireData);
    })

  });
  /* Add your code here */

}

getAndPrintHTML();