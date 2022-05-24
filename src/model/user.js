const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name:'String',
    email: 'String',
    phone:'Number',
    city: 'String',
    postcode: 'Number',
    image:'String'
})

const user = new mongoose.model('users',userSchema);
module.exports = user;
