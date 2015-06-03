// Write a route that extracts data from query string in the GET '/search' URL
// route, e.g. ?results=recent&include_tabs=true and then outputs it back to
// the user in JSON format.

// -------------------------------------------------------------------------------

// ## HINTS

// In Express.js to extract query string parameters, we can use:

//     req.query.NAME

// To output JSON we can use:

//     res.send(object)

var express = require('express')
var port = process.argv[2]

var app = express()

app.get('/search', function(req,res){
	res.end(JSON.stringify(req.query))
})

app.listen(port)