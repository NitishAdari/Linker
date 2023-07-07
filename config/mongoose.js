const mongoose = require ('mongoose');
mongoose.connect("mongodb://0.0.0.0:27017/links_db");

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error in connection'));

db.once('open', function(){
    console.log('Connected to the Database');
}); 