const mongoose = require('mongoose')
const validate = require('mongoose-validator')
const isURL = require('is-url')

// var linkvalidator = [
//     validate({
//         validator: value=> validator.isURL(value, {protocols: ['https', 'http', 'ftp'], require_tld: true, require_protocols: true}),
//         message: "Must be a valid URL"
//     })
// ]
const linkSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    }, 
    link: {
        type: String,
        required: true,
        validate : {
            validator: isU,
            message: "Must be a valid URL"
        }
    },
    // soc: {
    //     type: String,
    //     required: true
    // }
});

function isU(value){
    return isURL(value);
}

const Link = mongoose.model('Link', linkSchema);

module.exports = Link;