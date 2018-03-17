const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js')

var app = express();

//Middleware
app.use(bodyParser.json());

// POST route
app.post('/todos',(req,res)=>{
   var todo = new Todo({
       text:req.body.text
   })
   todo.save().then((doc)=>{
     res.send(doc);
   },(err)=>{
       res.status(400).send(err);
   })
})
app.listen(3000,()=>{
    console.log(`Started on port 3000`);
})

// GET route
app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        //console.log(JSON.stringify(todos,undefined,2));
       res.send({todos});
    },(err)=>{
        res.status(400).send(err);
    });
});

module.exports = {
    app
}