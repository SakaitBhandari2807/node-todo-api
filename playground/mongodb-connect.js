// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err) return console.log('Unable to connect to Mongodb Server');
    console.log('Connected to Mongodb server');
    const db = client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //     text:'Working on Node',
    //     completed:false
    // },(err,result)=>{
    //      if(err) return console.log('Unable to insert todo',err);

    //      console.log(JSON.stringify(result.ops,undefined,2));
    // });
    // db.collection('Users').insertOne({
    //   name:'Sakait Bhandari',
    //   age:22,
    //   location:'Noida'
    // },(err,result)=>{
    //      if(err) return console.log(`Unable to connect ${err}`)
    //      console.log(JSON.stringify(result.ops,undefined,2));
    // })

    

    // db.collection('Users').insert({
    //    name:'Saurav Bhandari',
    //    age:18,
    //    location:'Kotdwar'
    // },(err,result)=>{
    //     if(err) return console.log(`Unable to connect ${err}`)
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // })

    // find  count of users inside User collection
    // db.collection('Users').count().then((err,result)=>{
    //   if(err) console.log(`Unable to connect`)
    //   else console.log(JSON.stringify());
    // })


    // fetch function returns a cursor methods 
    db.collection('Todos').find({completed:true}).toArray().then((docs)=>{
       console.log('Todos');
       console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
         console.log(`Unable to fetch Todos`,err);
    })
    // db.collection('Todos').insert({
    //   text:'Learn Java',
    //   completed:true
    // },(err,result)=>{
    //     if(err) return console.log('Unable to insert');
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // })
    client.close();
});