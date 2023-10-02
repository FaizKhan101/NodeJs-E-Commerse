exports.getProducts = (req, res, next) => {
  res.render("shop", {
    pageTitle: "Shop",
    prods: adminData.products,
    path: "/",
  });
};
