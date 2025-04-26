import express from "express";
const app = express();
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

  