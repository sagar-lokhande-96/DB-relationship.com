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

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
})

const postSchema = new mongoose.Schema({
    content: String,
    likes: Number,
    user : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "instaUser"
        }
    ]
})

const instaUser = mongoose.model("instaUser", userSchema);
const instaPost = mongoose.model("instaPost", postSchema);

const addPost = async() =>{
    let post = new instaPost({
        content: "yt gamer's here",
        likes: 5410,
    });
    let user1 = await instaUser.findOne({name:"Sagar Lokhande", email:"sagar@mail.com"});
    post.user.push(user1);
    let res = await post.save();
    console.log(res);
}
//addPost();

// fetch post with user data || Check operation status 
const getData = async()=>{
    let post  = await instaPost.findOne({content:"yt gamer's here"}).populate("user", "name");
    console.log(post);
}
getData();