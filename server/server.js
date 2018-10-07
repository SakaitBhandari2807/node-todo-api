const express = require('express');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');
const middleware=require('../Middlewares');

var app = express();

//Middleware
middleware.init(app);

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


// GET route
app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        //console.log(JSON.stringify(todos,undefined,2));
       res.send({todos});
    },(err)=>{
        res.status(400).send(err);
    });
});

// GET by ID route
app.get('/todos/:id',(req,res)=>{
    if(!ObjectID.isValid(req.params.id)) return res.status(404).send();
    
    Todo.findById(req.params.id).then((todo)=>{
        if(!todo) return res.status(404).send();
        res.send({todo}); 
    }).catch((e)=>{
        res.status(400).send();
    })
})

// Server
app.listen(3000,()=>{
    console.log(`Started on port 3000`);
})

module.exports = {
    app
}