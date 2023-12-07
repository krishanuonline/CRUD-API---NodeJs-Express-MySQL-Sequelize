const productControler = require("../controllers/productControler");

const router = require("express").Router();

router.post("/add-product",productControler.addProduct);
router.get("/all-product",productControler.getAllProduct);
router.get("/published-product",productControler.getPublishedProduct);

router.get("/:id",productControler.getOneProduct);

router.put("/:id",productControler.updateProduct);

router.delete("/:id",productControler.deleteProduct);



module.exports = router;
