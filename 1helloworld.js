// Create an Express.js app that outputs "Hello World!" when somebody goes to /home.

// The port number will be provided to you by expressworks as the first argument of
// the application, ie. process.argv[2].

// Run $ killall node  before verifying exercises (in your terminal on Mac OS X) to end any previous processes. For Windows, use taskkill /IM node.exe.

// -------------------------------------------------------------------------------

// ## HINTS

// This is how we can create an Express.js app on port 3000, that responds with
// a string on '/':

//     var express = require('express')
//     var app = express()
//     app.get('/', function(req, res) {
//       res.end('Hello World!')
//     })
//     app.listen(3000)

// Please use process.argv[2] instead of a fixed port number:

//     app.listen(process.argv[2])

var express = require('express')

var app = express()

app.get('/home', function(req, res) {
	res.end('Hello World!')
})

app.listen(process.argv[2])