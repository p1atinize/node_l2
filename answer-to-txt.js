const axios = require('axios');
const fs = require('fs');

module.exports = {
    get,
    write
}


function get(url) {
    return axios.get(url)
        .then((response) => {
            return response.data;
        })
        .catch((e) => {
            console.log(e)
            return '';
        })
}




function write(data) {
    fs.writeFile('axios-answer-1.txt', JSON.stringify(data), err => {
        if (err) {
            console.log(err.message);
            throw err;
        }
        console.log('Ok');
    });
}




