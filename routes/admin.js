var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  products = [
    {
      name: "Iphone 11",
      brand: "Apple",
      price: "₹50000",
      imageAddress: "https://imgs.search.brave.com/3nywaJ5AJiOUhZe8hduAWub8XcEjEdqDhu8CWlKQRe4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxMmtnM3JHeVlM/LmpwZw"
    },
    {
      name: "Iphone 14",
      brand: "Apple",
      price: "₹80000",
      imageAddress: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-model-unselect-gallery-2-202303_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1676930656150"
    },
    {
      name: "Iphone 13",
      brand: "Apple",
      price: "₹70000",
      imageAddress: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-unselect-gallery-2-202207?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1654894177855"
    },
    {
      name: "Iphone 12",
      brand: "Apple",
      price: "₹60000",
      imageAddress: "https://imgs.search.brave.com/3nywaJ5AJiOUhZe8hduAWub8XcEjEdqDhu8CWlKQRe4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxMmtnM3JHeVlM/LmpwZw"
    },
  ]
  res.render('layout', { products, admin:true });
});

module.exports = router;
