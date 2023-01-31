const mongoose = require('mongoose');

const connectDB = (url) => {
    mongoose.set('strictQuery', false);
    return mongoose.connect(url).then(()=>{
        console.log('Connected to the db...');
    }).catch((err)=> console.log(err));
}

module.exports = connectDB;

