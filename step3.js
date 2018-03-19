var https = require('https');


function getAndPrintHTML (options) {

  var entireData = "";

  https.get(options, function(response) {

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
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);