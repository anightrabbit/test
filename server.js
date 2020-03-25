const connect = require('connect');
const path= require('path');
const serveStatic = require('serve-static');

const app = connect();

app.use(serveStatic(path.join(__dirname, '/static')))

app.listen(8080,()=>{
	console.log('successfully 8080');
});