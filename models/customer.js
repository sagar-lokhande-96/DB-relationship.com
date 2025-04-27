import mongoose from "mongoose";


main()
    .then(() =>{
        console.log("MongoDB Connected!");
    })
    .catch((err)=>{
        console.log(err);
    })
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/RelationDemo');
}

  
const orderSchema  = new mongoose.Schema({
    item: String,
    price: Number
});

const Order = mongoose.model("Order", orderSchema);


//customer Schema
const customerSchema = new mongoose.Schema({
    name: String,
    orders: [
        { 
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order"
        }
    ]
})
const Customer = mongoose.model("Customer", customerSchema);

const adduser = async() =>{
    
    let user = new Customer({
        name:"Sagar Lokhande",
    });

    let order1 = await Order.findOne({item:"Laptop"});
    let order2 = await Order.findOne({item:"Mobile"});

    user.orders.push(order1);
    user.orders.push(order2);
    let result = await user.save();
    console.log(result);
}

//adduser();


//finding customer  ||  Check operation status
const getData = async()=>{
    let cust1 = await Customer.find().populate("orders");
    console.log(cust1[0]);
}
getData();