const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MongoDB_connection_str;
const client = new MongoClient(uri, {useNewUrlParser: true});
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
