var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// const express = require('express');
// Adding models
// var Todo = mongoose.model('Todo',{
//     text:{
//         type:String,
//         required:true,
//         minlength:1,
//         trim:true
//     },
//     completed:{
//         type:Boolean,
//         default:false
//     },
//     completedAt:{
//         type:Number,
//         default:null
//     }
// }); 

var User = mongoose.model('Users',{
    email:{
        type:String,
        required:true,
        minlength:1,
        trim:true
    }
});

var newUser = new User({
  email:'souravandsakait@gmail.com'    
})

newUser.save().then((docs)=>{
  console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
    console.log(`Unable to save User`,err);
})
// var newTodo = new Todo({ 
//     text:'Cook dinner',
// })

// newTodo.save().then((doc)=>{
//   console.log('Saved todo',doc);
// },(err)=>{
//     console.log('Unable to save todo',err);
// });

// var otherTodo = new Todo({
//     text:'Switch companies',
//     completed:false,
//     completedAt:124
// });

// otherTodo.save().then((docs)=>{
//   console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
//    console.log(`Unable to save to Todo collection`);
// });
