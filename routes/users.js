var express = require('express');
var bcrypt = require('bcrypt');
const { json } = require('express/lib/response');
var router = express.Router();
const { ObjectId } = require('mongodb');
const  MongoClient  = require("mongodb").MongoClient;
//const dbUrl="mongodb+srv://gajbhiye_n:1234@cluster0.eeyb8.mongodb.net/sample_training?retryWrites=true&w=majority";
MongoClient.connect("mongodb+srv://gajbhiye_n:1234@cluster0.eeyb8.mongodb.net/firstdb?retryWrites=true&w=majority", (err, client) => {
  if(err) throw err;
  const db = client.db('firstdb');

  router.get('/', (req, res) => {
    db.collection('users').find().toArray((err, user) => {
        if (err) throw err
        res.send(user);
    })
});

router.post('/add', (req, res) => { 
  let user = req.body;
  let hashpassword=bcrypt.hash(req.body.password,10)
  console.log(user);
  db.collection('users').insertOne(user, (err, response) => {
      if (err) throw err
      res.send(response);
  })
})

router.post('/login', (req, res) => {
const email= req.body.email;
//const pwd= req.params.password;
console.log(req.body);
db.collection('users').findOne({email:email},(err, user)=>{
  console.log(user);
  if (err) { throw err }

  if (user) {
    if(user===null) { res.send("user not found")}
    else{
      res.json(user)
      
    }
   
      // we have a result
  } else  {
    res.send("user not found")
      // we don't
  }
 
 
 
})
});

//

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.get('/getbookingdetails', function(req, res, next) {
  db.collection('booking_details').find().toArray((err, bookings) => {
    if(err) throw err;
    else if(bookings.length>0)
    {
      res.send(bookings);
    }
    else res.send("no bookings found");
  })
})

})
module.exports = router;
