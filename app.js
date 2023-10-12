const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")

const errorController = require("./controllers/error");
const User = require("./models/user")

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findById('65282a184bed54c422f3bd00')
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);


mongoose.connect('mongodb://localhost:27017/shop').then(result => {
  User.findOne().then(user => {
    if (!user) {
      const user = new User({
        name: "Faiz",
        email: "test@test.com",
        cart: {
          items: []
        }
      })
      return user.save()
    }
  })
})
.then(result => {
  app.listen(3000, () => console.log("Connected!"))
})
.catch(err => {
  console.log(err);
})