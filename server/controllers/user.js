const  joi = require('joi');
exports.signup = async(req, res) =>{
    const {email, fullname, username, password} = req.body;
    try {
        const {error} =  schema.validate(req.body);
        if(error){
            return res.status(400).send(error.details[0].message);
        }
        
    } catch (error) {
        console.log(error)
    }
}

exports.login = async(req, res) =>{
}
const schema = joi.object().keys({
    email: joi.string().email().required(),
    fullname: joi.string().min(5).required(),
    username: joi.string().max(10).required(),
    password: joi.string().min(8).regex(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])$/)
}) 