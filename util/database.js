const mongodb = require("mongodb")

const MongoClient = mongodb.MongoClient

let database;
const connectToDatabase = async () => {
    const client = await MongoClient.connect("mongodb+srv://Prince:faiz8225@cluster0.3iavjwf.mongodb.net/shop")
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


