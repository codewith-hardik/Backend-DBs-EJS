
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


main().then(console.log("Database Is connected...")).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/OneToMany');
}

// order Schema
const orderSchema = new Schema({
    order: String,
    price: Number
});

// customer schema
const customerSchema = new Schema({
    name : String,
    order: [{
        type: Schema.Types.ObjectId,
        ref: "Order"
    }]
});


// Hendling deletion
customerSchema.pre("findOne", async ()=>{
    console.log("hardik");
})

customerSchema.post("findOneAndDelete", async (data)=>{
    if(data.order.length){
        let res = await Order.deleteMany({_id: {$in : data.order}});
        console.log(res);
    }
    // console.log(data);
})


const  Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer",customerSchema);


// finde customer
//  let findCust = async ()=>{
//     let res = await Customer.findOne({name:"Hardik"}).populate("order");
//     console.log(res);
//  }
//  findCust();







// customer Data
let customer = async ()=>{
    let cust1 = new Customer({
        name: "Ankit",
    })
    
    // let order1 = await Order.findOne({order:"Crunchax"});
    // let order2 = await Order.findOne({order:"apple"});

    let order3 = await Order.findOne({order: "Manchurium"});
    // cust1.order.push(order1);
    // cust1.order.push(order2);
    cust1.order.push(order3)

    cust1.save()
    console.log(cust1);
}
// customer();





// Order data

let orders = async ()=>{
    //    await Order.insertMany([
    //     { order: "Crunchax", price: 10},
    //     { order: "meggi", price: 10},
    //     { order: "apple", price: 100},
    //     { order: "Ice-cream", price: 20},
    // ]);

    let data = await new Order({
        order: "Manchurium",
        price: 100
    });
    await data.save();
    console.log(data);
}
// orders();

// get data 
let getData = async ()=>{
    let res = await Customer.findOne({ });
    console.log(res);
}
// getData();


// delete data 

let delData = async ()=>{
    let data = await Customer.findByIdAndDelete('675302c15452001ddc72b131')
    console.log(data);
}
delData();
