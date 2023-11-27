const connection = require('./connection')

const express = require('express');
const bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json())

app.get('/todo_tasks', (req, res) => {
  Connection.query('SELECT * FROM todo_tasks',(err,rows)=>{
    if(err){
      console.log(err)
    }
    else{
      console.log(rows)
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


