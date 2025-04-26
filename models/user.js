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

  
const userSchema  = new mongoose.Schema({
    name: String,
    addresses: [
        {
            _id: false,
            location: String,
            city: String
        }
    ]
});

const User = mongoose.model("User",userSchema);

const addData = async () => {
    let user1= new User({
        name: "sagar",
        addresses:{
            location: "India",
            city: "Delhi"
        }
    });
    user1.addresses.push({
        location:"USA",
        city:"California"
    });
    let result = await user1.save();
    console.log(result);
}

addData();