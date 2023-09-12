const http = require('http');
const att = require('./answer-to-txt');

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World');
    att.get('https://jsonplaceholder.typicode.com/todos/1').then((a) => {
        att.write(a);
    });
});

server.listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000/');
});
