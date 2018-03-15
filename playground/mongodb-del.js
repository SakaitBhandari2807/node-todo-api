// import using ES6 destructuring
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,Client)=>{
  if(err) return console.log(`Unable to connect to Mongodb server`);
  console.log(`Connected to Mongodb Server`);
  const db = Client.db('TodoApp'); 
  
//   queries ----------------------------
//   Delete Query
  db.collection('Users').deleteMany({name:'Andrew Mead'}).then((result)=>{
    console.log(JSON.stringify(result,undefined,2));
  });

  db.collection('Users').findOneAndDelete({
      _id:new ObjectID('5aa82b80d845392468dfdbfb')
    }).then((result)=>{
        console.log(JSON.stringify(result,undefined,2));
    })
// find query
//   db.collection('Todos').find({name:'Andrew'})
//   ---------------------------------------
  Client.close();
});