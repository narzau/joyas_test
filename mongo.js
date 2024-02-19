// config/mongo.js
import { MongoClient } from 'mongodb';

const uri = 'mongodb://127.0.0.1:27017/FeliceJoyas';

const client = new MongoClient(uri);

export default async function connectToDatabase() {
  if (!client.isConnected) await client.connect();
  return client.db();
}
