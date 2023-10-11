const { ObjectId } = require("mongodb");
const db = require("../util/database");

class User {
  constructor(username, email, cart, id) {
    this.name = username;
    this.email = email;
    this.cart = cart;
    this._id = id;
  }

  save() {
    return db.getDb().collection("users").insertOne(this);
  }

  addToCart(product) {
    // const cartProduct = this.cart.items.findIndex(cp => {
    //   return cp._id === product._id
    // })
    const updatedCart = { items: { ...product, quantity: 1 } };
    return db
      .getDb()
      .collection("users")
      .updateOne(
        { _id: new ObjectId(this._id) },
        { $set: { cart: updatedCart } }
      );
  }

  static findById(id) {
    return db
      .getDb()
      .collection("users")
      .findOne({ _id: new ObjectId(id) });
  }
}

module.exports = User;
