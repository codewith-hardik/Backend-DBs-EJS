
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


main().then(console.log("Database Is connected...")).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/OneToMoreMany');
}

const UserSchema = new Schema({
    username: String,
    email: String
});

const PostSchema = new Schema({
    content:String,
    liks:Number,
    user:[{
        type: Schema.Types.ObjectId,
        ref: "User",
    }]
})
const User = mongoose.model("User", UserSchema);
const Post = mongoose.model("Post", PostSchema);


// let addData = async ()=>{
//     // let user1 = new User({
//     //     username:"Hardik",
//     //     email: "hardi@gmail.com"
//     // });

//     let user = await User.findOne({username:"Hardik"});    

//     let post1 = new Post({
//         content: "Good Morning Hardik....",
//         liks: 500
//     });

    
//     // post1.user = [user1._id];
//     post1.user = [user._id];
    

    
//     // await user1.save();
//     await post1.save();

//     console.log("Data is Add...");
// }
// addData();


// getData

let getData = async ()=>{
    let res = await Post.findOne({}).populate("user");
    console.log(res);
}
getData();
