var express = require('express');
const { json } = require('express/lib/response');
var router = express.Router();
const { ObjectId } = require('mongodb');
const bus =require('../bus.json')
const  MongoClient  = require("mongodb").MongoClient;
//const dbUrl="mongodb+srv://gajbhiye_n:1234@cluster0.eeyb8.mongodb.net/sample_training?retryWrites=true&w=majority";
MongoClient.connect("mongodb+srv://gajbhiye_n:1234@cluster0.eeyb8.mongodb.net/firstdb?retryWrites=true&w=majority", (err, client) => {
  if(err) throw err;
  const db = client.db('firstdb');
  router.post('/getbuses',(req, res) => {
      const startCity=req.body.startCity;
      const destination=req.body.destination;
      console.log(req.body);
    db.collection('product').find(
      {startCity:startCity,destination:destination})
      .toArray((err,bus) => {
         if(err) res.send(err);
         else
         {
          console.log(bus);
          res.send(bus);
         }
         
         }
     )})

     router.get('/cities',(req, res) => {
      // const startCity=req.body.startCity;
      // const destination=req.body.destination;
    db.collection('cities').find().toArray((err,city) => {
         if(err) res.send(err);
         else
         {
           console.log(city);
          res.send(city);
         }
         
         }
     )})  
 
});




module.exports = router;
