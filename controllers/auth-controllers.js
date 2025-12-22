
//home page logic
const home = async(req,res) => {
    try {
        res.send("this is the home page")
        
    } catch (error) {
        
    }
}
//registration page logic
const registration = async(req,res) => {
    try {
        console.log(req.body);
        const {username, email, password, phone} = req.body
        res.send({Data})
        
    } catch (error) {
        res.status(400).send("not found")
    }
}
export {home,registration}