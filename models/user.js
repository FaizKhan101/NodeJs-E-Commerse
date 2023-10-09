const { ObjectId } = require("mongodb");
const db = require("../util/database")

class User {
  constructor(username, email) {
    this.name = username;
    this.email = email
  }

  save() {
    return db.getDb().collection("users").insertOne(this)
  }

  static findById(id) {
    return db.getDb().collection("users").findOne({ _id: new ObjectId(id) })
  }
}

module.exports = User;
