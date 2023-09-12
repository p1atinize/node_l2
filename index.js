const att = require('./answer-to-txt');

//1
att.get('https://jsonplaceholder.typicode.com/todos/1').then((a) => {
    att.write(a);
});


