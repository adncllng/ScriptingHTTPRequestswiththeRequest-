
var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')               // Note 1
       .on('error', function (err) {                                   // Note 2
         throw err;
       })
       .on('response', function (response) {
         console.log('Response Message: ', response.statusMessage);
         console.log('Content Type: ', response.headers['content-type'])
       })
       .pipe(fs.createWriteStream('./future.jpg')).on('finish', () => {
        console.log("done")
       })