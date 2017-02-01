// // We need this to build our post string
// var http = require('http');
// var fs = require('fs');
const https = require('https');
console.log('test');
  // An object of options to indicate where to post to
  var post_options = {
      
      host: 'www.directv.com.uy',
      port: '443',
      path: '/guia/Services/ProgrammingGuideAjax.asmx/GetProgramming',
      method: 'POST',
      headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36',
          'Content-Type': 'application/json; charset=UTF-8',
          'Referer': 'https://www.directv.com.uy/guia/guia.aspx?type=&link=nav'
      }
  };

  // Set up the request
  var req = https.request(post_options, function(res) {
                res.setEncoding('utf8');
                res.on('data', function (chunk) {
                    console.log('Response: ' + chunk);
                });
            });

req.write('{ "day":25, "time":"14","minute":"30", "month":"1", "year":"2017", "onlyFavorites":"N" }')
req.end();

// https.get('https://directv.com.uy/guia/Services/ProgrammingGuideAjax.asmx/GetProgramming?day=16&time=11&minute=30&month=1&year=2017&onlyFavorites=N', (res) => {
//   console.log('statusCode:', res.statusCode);
//   console.log('headers:', res.headers);

//   res.on('data', (d) => {
//     process.stdout.write(d);
//   });

// }).on('error', (e) => {
//   console.error(e);
// });



// var http = require("https");
// var options = {
//       host: 'directv.com.uy',
//       port: '443',
//       path: '/guia/Services/ProgrammingGuideAjax.asmx/GetProgramming',
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json; charset=UTF-8'
//     }
// };
// var req = http.request(options, function(res) {
//   res.setEncoding('utf8');
//   res.on('data', function (body) {
//     console.log('Body: ' + body);
//   });
// });
// req.on('error', function(e) {
//   console.log('problem with request: ' + e.message);
// });
// // write data to request body
// req.write('{ "day":16, "time":"11","minute":"30", "month":"1", "year":"2017", "onlyFavorites":"N" }');
// req.end();