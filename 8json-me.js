// Write a server that reads a JSON file, parses it to JSON object and outputs the content
// to the user.

// The port is passed in process.argv[2].  The file name is passed in process.argv[3].

// Respond with:

//     res.json(object)

// Everything should match the '/books' resource path.

// -------------------------------------------------------------------------------

// ## HINTS

// For reading, there's an fs module, e.g.,

//     fs.readFile(filename, callback)

// While the parsing can be done with JSON.parse:

//     object = JSON.parse(string)

var express = require('express')
var fs = require('fs')
var port = process.argv[2]
var jsonFileName = process.argv[3]

var app = express()
app.get('/books', function(req,res){
	// console.log(jsonFileName)
	fs.readFile(jsonFileName, function(e, data){
		

		if (e)
			return res.send(500)
		
		try {
			books = JSON.parse(data)
		} catch (e) {
			res.send(500)
		}

		res.json(books)
	})
})

app.listen(port)