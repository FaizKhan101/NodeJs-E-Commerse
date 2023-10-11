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
  User.findById('6526e480e93399d2df2eb56c')
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);


mongoose.connect('mongodb+srv://Prince:faiz8225@cluster0.3iavjwf.mongodb.net/shop').then(result => {
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