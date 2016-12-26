const express = require('express');
var path = require("path");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;
const app = express();

let db;

var POSTS_COLLECTION = "posts";

app.use(express.static('client/build'));
// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
console.log(process.env.MONGOLAB_URI);
if(process.env.MONGOLAB_URI){
mongodb.MongoClient.connect(process.env.MONGOLAB_URI,  (err, database) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready"); 

});
}

// Initialize the app.
app.set('port', (process.env.PORT || 3001));
app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});

app.get('/api/posts', (req, res) => {
	console.log("inside the get request");
	  db.collection(POSTS_COLLECTION).find({}).toArray((err, docs)=> {
    if (err) {
      handleError(res, err.message, "Failed to get contacts.");
    } else {
      res.status(200).json(docs);  
    }
  });
});

app.post("/api/posts", (req, res) =>{
	console.log("inside the post request")
  const newPost = req.body;
  newPost.createDate = new Date();

  if (!(req.body.title)) {
    handleError(res, "Invalid user input", "Must provide a title atleast .", 400);
  }

  db.collection(POSTS_COLLECTION).insertOne(newPost, (err, doc) => {
    if (err) {
      handleError(res, err.message, "Failed to create new contact.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});