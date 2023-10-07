const mongodb = require("mongodb")

const MongoClient = mongodb.MongoClient

let database;
const connectToDatabase = async () => {
    const client = await MongoClient.connect("mongodb://localhost:27017")
    database = client.db('shop')
    console.log("Connected!");
}

const getDb = () => {
    if (!database) {
        throw new Error("Connecting to the database failed!")
    }
    return database
}

module.exports = {
    connectToDatabase: connectToDatabase,
    getDb: getDb
}


