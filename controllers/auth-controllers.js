//home page logic
import User from "../model/user-schemas.js";
import bcrypt from "bcryptjs";
const home = async(req,res) => {
    try {
        res.send("this is the home page")
        
    } catch (error) {
        
    }
}
//registration page logic
const registration = async(req,res) => {
    try {
        
        const {username, email, password, phone} = req.body
        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(422).json({error: "email already exist"})
        }

        //hash password
        //$2b$10$/b/1WoasQVzwwSFUfbOmh.bjbjo5h9rTrOTMVq74vBjGJa.MkotRe
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({username, email, password : hashedPassword, phone})
             
        res.status(201).json({message: "user registered successfully"}) 
        
        
    } catch (error) {
        res.status(400).send("not found")
    }
}
export {home,registration}