// db.js
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URL with authentication options
let url = `mongodb://root:0Zo4N5A4Kbdf5mchHUVwMOXb@172.21.64.47:27017`;
let dbInstance = null;
const dbName = "giftdb";

async function connectToDatabase() {
    if (dbInstance){
        return dbInstance
    };

    const client = new MongoClient(url);      

    await client.connect();
    // Task 1: Connect to MongoDB
    // {{insert code}}
    dbInstance = client.db(dbName);
    // Task 2: Connect to database giftDB and store in variable dbInstance
    //{{insert code}}
    return dbInstance;
    // Task 3: Return database instance
    // {{insert code}}
}

module.exports = connectToDatabase;