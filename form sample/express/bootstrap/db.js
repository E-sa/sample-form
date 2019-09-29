const mongoose = require('mongoose');

const uri = `mongodb://127.0.0.1:27017/QandA`;
mongoose
    .connect(uri, {useNewUrlParser: true})
    .then(() => {
        console.log('you are connected to db')
    })
    .catch(err => {
        console.log('could not connect to db');
    })




module.exports = mongoose;    