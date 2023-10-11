const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model("Product", productSchema)
// const { ObjectId } = require("mongodb");

// class Product {
//   constructor(title, imageUrl, price, description, id, userId) {
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.price = price;
//     this.description = description;
//     if (id) {
//       this._id = new ObjectId(id);
//     }
//     this.userId = userId
//   }

//   save() {
//     if (this._id) {
//       return db
//         .getDb()
//         .collection("products")
//         .updateOne({ _id: this._id }, { $set: this });
//     }
//     return db
//       .getDb()
//       .collection("products")
//       .insertOne(this)
//   }

//   static fetchAll() {
//     return db
//       .getDb()
//       .collection("products")
//       .find()
//       .toArray()
//       .then((products) => {
//         return products;
//       })
//       .catch((err) => console.log(err));
//   }

//   static findById(id) {
//     return db
//       .getDb()
//       .collection("products")
//       .findOne({ _id: new ObjectId(id) });
//   }

//   static deleteById(id) {
//     if (!id){
//       throw new Error("Trying to delete product without id!")
//     }else {
//       return db.getDb().collection("products").deleteOne({ _id: new ObjectId(id) })
//     }
//   }
// }

// module.exports = Product;
