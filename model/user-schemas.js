import mongoose from "mongoose";
const userschema = new mongoose.Schema({
username : {
    type: String, 
    require: true
    
},
email : {
    type: String, 
    require: true
    
},
phone : {
    type: String, 
    require: true
    
},
password : {
    type: String, 
    require: true
    
},
isadmin : {
    type: Boolean, 
    require: false
    
},


})
// defining user schames collaction name 
const User = new mongoose.model("User",userschema)
export default User;