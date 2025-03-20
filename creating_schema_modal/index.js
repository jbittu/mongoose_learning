const e = require("express");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  phone: Number,
  email: String,
  address: {
    state: String,
    city: String,
    pincode: Number,
  },
});

const User = new mongoose.model("user", userSchema);

// const user1 = new User({
//   name: 'John Doe',
//   age: 25,
//   phone: 1234567890,
//   email: 'asas@gmai.com',
//   address: {
//       state : 'Telangana',
//       city: 'Hyderabad',
//       pincode: 500081

//     }
// });

// user1.save();

///////  creating multiple documents at once /////////

// const createDocument = async () => {
//   try {
//     const user1 = new User({
//       name: "resab",
//       age: 32,
//       phone: 9854,
//       email: "resab@gmai.com",
//       address: {
//         state: "West Bengal",
//         city: "kolakata",
//         pincode: 8012375,
//       },
//     });
//     const user2 = new User({
//       name: "jeeet",
//       age: 36,
//       phone: 590,
//       email: "jeeet@gmai.com",
//       address: {
//         state: "maharashtra",
//         city: "pune",
//         pincode: 304525,
//       },
//     });
//     const user3 = new User({
//       name: "dakshat",
//       age: 40,
//       phone: 5555590,
//       email: "dakshat@gmai.com",
//       address: {
//         state: "Tamil Nadu",
//         city: "bangalore",
//         pincode: 5044525,
//       },
//     });
//     const user4 = new User({
//       name: "sahil",
//       age: 28,
//       phone: 555590,
//       email: "sahil@gmail.com",
//       address: {
//         state: "Kerala",
//         city: "kochi",
//         pincode: 504525,
//       },
//     });
//     const data = await User.insertMany([user1, user2, user3, user4]);
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// createDocument();





///////////// reading data from database ///////////




// const getDocument = async () => {
//   try {
//     const data = await User.find();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// getDocument();

////////// updating data in database ///////////

// const updateDocument = async (id) => {
//   try{
//     const data = await User.findByIdAndUpdate({_id:id}, {$set: {name: 'gghkar'}},{new : true});
//     console.log(data);
//   }catch(err){
//     console.log(err);
//   }
// };

// updateDocument("67dbd86bce05453c3e530bde");



////////// Deleting data from database ///////////


const deleteDocument = async(id) => {
  try{
    const data = await User.deleteOne({_id:id});
    console.log(data);
  }catch(err){console.log(err);}
};

deleteDocument("67dbd86bce05453c3e530bde");