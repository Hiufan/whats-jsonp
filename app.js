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

// jsonp 后端
app.get('/jsonp', function (request, response){

	console.log(request.query.callback);
	// 获取callback 函数名称
	var callback = request.query.callback,
		resData = callback + '({"name": "xiao"})';
	
	// 返回data
	response.send(resData);
	response.end();
});



