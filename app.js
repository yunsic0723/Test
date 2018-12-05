const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

app.use(bodyParser());
app.use(cookieParser());

console.log('hello world');

app.listen('3030', function(){
    console.log("hihi");
})