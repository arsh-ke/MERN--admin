import mongoose from "mongoose";
import jwt from "jsonwebtoken";
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

//jwt token generate method
// instance methid 
 userschema.methods.generateToken = async function(){
    try {
     return jwt.sign({
        userid: this._id.toString(),
        email : this. email,
        isadmin : thid.isadin,
    },process.env.JWT_SECRET ,
    {
        expiresIn : "30d",
    }


)
}
         catch (error) {
        console.error(error);
        
    }

 }
// defining user schames collaction name 
const User = new mongoose.model("User",userschema)
export default User;