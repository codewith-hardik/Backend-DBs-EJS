
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


main().then(console.log("Database Is connected...")).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/OneToFew');
}

const UserSchema = new Schema({
    username: String,
    addresses: [{
        _id: false,
        location: String,
        city: String,
        PinCode: Number,
    }]
});

const User = mongoose.model("User", UserSchema);

const addUser = async () => {
    let user1 = new User({
        username: "hardik",
        addresses: [{
            location: "Khathwada",
            city: "Ahmedabad",
            PinCode: 382430
        },
        {
            location: "Vasana,Dhandhuka",
            city: "Ahmedabad",
            PinCode: 382460
        }
        ]
    });
    user1.addresses.push({ location: "Chandkheda", city: "Ahmedabad", PinCode: 383030 });
    console.log("data Saved");
    user1.save();
}
addUser();


