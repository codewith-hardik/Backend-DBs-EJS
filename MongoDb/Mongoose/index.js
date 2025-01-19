const mongoose = require('mongoose');

main().then(()=>{
    console.log("connection sucssesfull...")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});

const User = mongoose.model("User", userSchema);
// const Emplyee = mongoose.model("Emplyee", userSchema);

// User.insertMany([
//   {name: "prince", age: 18, email:"prin6u@gmail.com"},
//   {name: "kashyap", age: 17, email:"kk2007@gmail.com"},
//   {name: "jay", age: 18, email:"jaypatel@gmail.com"},
// ]).then((res)=>{
//   console.log(res);
// });



// User.find({_id: "6746baad2395aafdf38f9e36"})
//       .then((res)=>{console.log(res)})
//       .catch((ere)=>{console.log(err)});


// User.updateOne({name:"prince"}, {age: 19})
// .then((res) => {console.log(res)})
// .catch((err)=>{console.log(err)});

User.findByIdAndUpdate('6746baad2395aafdf38f9e36', {age: 19},{new: true} )
.then((res)=>{console.log(res)})
.catch((err)=>{console.log(err)});