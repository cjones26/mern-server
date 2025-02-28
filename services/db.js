const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const MONGO_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/mern-app?retryWrites=true&w=majority&appName=MERN`;

async function connectDatabase() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(MONGO_URI, {
      serverApi: { version: '1', strict: true, deprecationErrors: true },
    });
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
  } catch (e) {
    console.dir(e);
  }
}

module.exports = connectDatabase;
