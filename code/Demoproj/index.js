const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/',(req,res)=>{
  if(req.url=='/'){
    res.sendFile(__dirname+'index.html');
  }
})

app.listen(3000,()=>{'Listening on port 3000'});
