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

const addData = async () => {
    const order1 = new Order({
        item: "Laptop",
        price: 15000
    });
    const order2 = new Order({
        item: "Mobile",
        price: 25000
    });
    
    await order1.save();
    await order2.save();
    
}

addData();