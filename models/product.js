const { ObjectId } = require("mongodb");
const db = require("../util/database");

class Product {
  constructor(title, imageUrl, price, description, id) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
    this._id = new ObjectId(id);
  }

  save() {
    if (this._id) {
      return db
        .getDb()
        .collection("products")
        .updateOne({ _id: this._id }, { $set: this });
    }
    return db
      .getDb()
      .collection("products")
      .insertOne(this)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  }

  static fetchAll() {
    return db
      .getDb()
      .collection("products")
      .find()
      .toArray()
      .then((products) => {
        console.log(products);
        return products;
      })
      .catch((err) => console.log(err));
  }

  static findById(id) {
    return db
      .getDb()
      .collection("products")
      .findOne({ _id: new ObjectId(id) });
  }
}

module.exports = Product;
