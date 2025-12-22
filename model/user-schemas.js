import mongoose from "mongoose";
const userschema = new userschema({
username : {
    type: string, 
    require: true
    
},
email : {
    type: string, 
    require: true
    
},
phone : {
    type: string, 
    require: true
    
},
password : {
    type: string, 
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