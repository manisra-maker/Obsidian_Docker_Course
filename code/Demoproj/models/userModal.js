const { MongoClient } = require("mongodb");

const uri = "mongodb://admin:secret123@localhost:27017/users_cloud?authSource=admin";
const dbName = "users_cloud";
const collectionName = "user_data";

async function upsertUserByEmail(userData) {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Match document by email
    return await collection.updateOne(
      { email: userData.email },      // Search criteria
      { $set: userData },             // Fields to update/set
      { upsert: true }                 // Insert if not found
    );
  } finally {
    await client.close();
  }
}

module.exports = { upsertUserByEmail };
