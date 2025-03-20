const e = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test').then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log('Error connecting to MongoDB', err);
});

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  phone : Number,
  email: String,
  address: {
    state : String,
    city: String,
    pincode: Number
  }
});


const User = new mongoose.model('user', userSchema);