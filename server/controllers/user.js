const joi = require("joi");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
exports.signup = async (req, res) => {
  const { password, email } = req.body;
  try {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    const hashed = await bcrypt.hash(password, 10);
    req.body.password = hashed;
    const isThere = await User.findOne({ email });
    if (isThere) return res.status(400).send("email already exist");
    const user = await User.create(req.body);
    const token = jwt.sign({ _id: user._id }, process.env.secret);
    res.status(201).send(token);
  } catch (error) {
    console.log(error);
  }
};

exports.login = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  try {
    if (!email.length || !password.length)
    return res.status(400).send("enter your cridentials");
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send("Email or password are invalid");
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.status(400).send("Email or password are invalid");
    const token = jwt.sign({ _id: user._id }, process.env.secret);
    res.status(200).send(token);
  } catch (error) {
    console.log(error)
  }
};
exports.getData = async(req, res) =>{
  const {token} = req.body;
  try{
    const user = jwt.verify(token, process.env.secret);
    const {_id} = user;
    const me = await User.findOne({_id});
    res.status(200).send(me);
  }catch(error){
    console.log(error)
  }
}
const schema = joi.object().keys({
  email: joi.string().email().required(),
  fullname: joi.string().min(5).required(),
  username: joi.string().max(10).required(),
  password: joi.string().min(8),
});
