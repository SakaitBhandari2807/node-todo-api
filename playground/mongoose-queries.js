const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5aacad65e0f95e1a5dac6c8a';

// return all documents
Todo.find({
    _id:id
}).then((todos)=>{
   console.log('Todos',todos);
})

// find document other than id
Todo.findOne({
    _id:id
}).then((todo)=>{
   console.log('todo',todo);
});

// only by id
Todo.findById(id).then((todo)=>{
    console.log('Todo by id',todo);
})