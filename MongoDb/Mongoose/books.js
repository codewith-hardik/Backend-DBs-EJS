const mongoose = require('mongoose');
const { emit } = require('nodemon');

main().then(()=>{
    console.log("connection sucssesfull...")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const booksSchema = new mongoose.Schema({
    titel: {
        type: String,
        required: true,
    },
    author: {
       type: String
    },
    price: {
        type: Number,
        min: [1, "Pleas Enter valid Price"]
    },
    discount: {
        type: Number,
        default: 0,
    },
    genre: [String],
    category: {
        type: String,
        enum: ["fiction", "non-fiction"]
    }

});

const Book = mongoose.model("Book", booksSchema);

// let book1 = new Book(
    // {
    //     titel: "marval",
    //     author: "chavda Hardik",
    //     price: "599"
    // },
//     {
//         titel: "Gita",
//         author: "ved vyash",
//         price: "100",
//         discount: "50",
//         genre: ["krishna", "Pndavs", "karuv", "Aacharyas"],
//         category: "fiction"
//     }
  
// );

// book1.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     // console.log(err.errors.price.properties.message);
//     console.log(err);
// });


Book.findByIdAndUpdate("6746d89363fa6ea1e60f656a", {price: 499}, {runValidators:true}).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});



