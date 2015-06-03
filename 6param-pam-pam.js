
// For instance:

//     PUT /message/526aa677a8ceb64569c9d4fb

// As a response to these requests, return the SHA1 hash of the current date
// plus the sent ID:

//     require('crypto')
//       .createHash('sha1')
//       .update(new Date().toDateString() + id)
//       .digest('hex')

// -------------------------------------------------------------------------------

// ## HINTS

// To handle PUT requests use:

//     app.put('/path/:NAME', function(req, res){...});

// To extract parameters from within the request handlers, use:

//     req.params.NAME

var express = require('express')
var crypto = require('crypto')
var port = process.argv[2]
var app = express()

app.put('/message/:id', function(req, res) {
	res.send(
		crypto.createHash('sha1')
		.update(new Date().toDateString() + req.params.id)
		.digest('hex')
	)
	res.end();
})

app.listen(port)