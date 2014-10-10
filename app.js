var express = require('express');
var app = express();
var fs = require('fs');


app.use(express.static(__dirname + '/src/'));


app.listen(3333);
console.log('listen 3333');

/**
 * HTTP GET /tasks ajax
 * Returns: the list of tasks in JSON format
 */
app.get('/tasks', function (request, response) {
    response.json({tasks: 'cccc'});
});


app.get('/jsonp', function (request, response){

	console.log(request.query.callback);

	var callback = request.query.callback,
		resData = callback + '({"name": "xiao"})';
		
	response.send(resData);
	response.end();
});



