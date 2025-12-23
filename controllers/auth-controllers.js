//home page logic
import User from "../model/user-schemas.js";
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
        await User.create({username, email, password, phone})
        res.status(201).json({message: "user registered successfully"})        
    } catch (error) {
        res.status(400).send("not found")
    }
}
export {home,registration}