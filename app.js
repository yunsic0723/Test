const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.listen('3030', function(){
    console.log("hihi");
})