const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

app.use(bodyParser());
app.use(cookieParser());

app.listen('3030', function(){
    console.log("hihi");
})