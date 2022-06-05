const router = require('express').Router();
const {signup, login, getData} = require('../controllers/user')
router.post('/signup', signup);
router.post('/login', login);
router.post('/getData', getData);
module.exports = router;