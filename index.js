const express = require('express');
const app = express();

app.get('/',function(req,res){
    res.send('hello world');
})

app.listen(4000,function(req,res){
    console.log('Server started at 4000 port');
})