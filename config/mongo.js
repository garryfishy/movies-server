const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://root:root@cluster0.qt9eu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dbName = "mongoDB-learn";

var db;

function connect() {
  client.connect((err) => {
    if (err) {
      console.log("Connection failed: " + err);
      // callback(err);
    } else {
      console.log("Succesfully connected to MongoDB");
      db = client.db(dbName);
      // callback(null);
    }
  });
}

function getDatabase() {
  return db;
}

module.exports = { connect, getDatabase };
