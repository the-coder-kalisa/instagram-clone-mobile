const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const mongoose = require('mongoose');
const PORT = 5000;
const url = "mongodb://localhost:27017/instagram";
const userRoute = require('./routes/userRoute.js')
mongoose.connect(url, ()=>{
    console.log('connected')
})
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', userRoute)
app.get('/', ()=>{
    console.log('instagram backend mobile')
})
server.listen(PORT, ()=> console.log(`http://localhost:${PORT}`))