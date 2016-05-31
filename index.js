/**
 * 启动文件
 */

var express = require('express');
var path = require('path');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', function(req,res){
// 	res.render('index');
// });

require('./router')(app);

app.listen(4000,function(req,res){
	console.log('app is running at port 4000');
});
