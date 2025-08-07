const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/',(req,res)=>{
  if(req.url=='/'){
    res.sendFile(__dirname+'index.html');
  }
})
