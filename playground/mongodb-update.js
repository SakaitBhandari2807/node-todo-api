const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,Client)=>{
  if(err) return console.log(`Unable to connect to Mongodb server`);
  console.log(`Connected to Mongodb Server`);
  const db = Client.db('TodoApp'); 
  
//   queries ----------------------------
//   Update Query
//   db.collection('Users').deleteMany({name:'Andrew Mead'}).then((result)=>{
//     console.log(JSON.stringify(result,undefined,2));
//   });

  //  
  db.collection('Users').findOneAndUpdate({
      _id:new ObjectID('5aa943deccc6430ef9ddb7f1')
    },{
        $set:{
          name:'Frankstein'
        },
        $inc:{
            age:1
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(JSON.stringify(result,undefined,2));
    })
// find query
//   db.collection('Todos').find({name:'Andrew'})
//   ---------------------------------------
  Client.close();
});