
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.ifcmm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// @ts-ignore
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
