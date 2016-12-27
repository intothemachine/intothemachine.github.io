const express = require('express');
//var path = require("path");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;
const app = express();
app.use(bodyParser.json());

let db;

var POSTS_COLLECTION = "posts";
// TODO: remove this before commit.
process.env.MONGOLAB_URI = "mongodb://suryanarayanamurthy:databasepassword123@ds033966.mlab.com:33966/machinedb"

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
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

/*  "/postss"
 *    GET: finds all posts
 *    POST: creates a new post
 */

app.get('/api/posts', (req, res) => {
	console.log("inside the get request, update");
	  db.collection(POSTS_COLLECTION).find({}).toArray((err, docs)=> {
    if (err) {
      handleError(res, err.message, "Failed to get contacts.");
    } else {
      res.status(200).json(docs);  
    }
  });
});

app.post("/api/posts", (req, res) =>{
	console.log("inside the post request");
  const newPost = req.body;
  console.log(req);
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

/*  "/posts/:id"
 *    GET: find post by id
 *    PUT: update post by id
 *    DELETE: deletes post by id
 */

app.get("/api/posts/:id", function(req, res) {
  console.log("inside the get posts id is :"+req.params.id);
  db.collection(POSTS_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get Post");
    } else {
      res.status(200).json(doc);  
    }
  });
});

app.put("/api/posts/:id", function(req, res) {
  var updateDoc = req.body;
  delete updateDoc._id;

  db.collection(POSTS_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, updateDoc, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to update post");
    } else {
      res.status(204).end();
    }
  });
});

app.delete("/api/posts/:id", function(req, res) {
  db.collection(POSTS_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
    if (err) {
      handleError(res, err.message, "Failed to delete Post");
    } else {
      res.status(204).end();
    }
  });
});