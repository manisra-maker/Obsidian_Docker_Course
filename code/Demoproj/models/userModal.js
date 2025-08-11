const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const dbName = "users";
const collectionName = "user_data";

async function insertUser(userData) {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    return await collection.insertOne(userData);
  } finally {
    await client.close();
  }
}

module.exports = { insertUser };

