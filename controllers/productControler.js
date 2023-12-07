const db = require("../models");

//create main model
const Product = db.products;
const Review = db.reviews;

//actual work

// 1.Create Product
const addProduct = async (req, res) => {
    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }

    const product = await Product.create(info);
    res.status(200).send(product);
}

//2. Get All Product
const getAllProduct = async (req, res) => {
    let products = await Product.findAll({});
    res.status(200).send(products);
}

//3. Get one Product
const getOneProduct = async (req, res) => {
    let id = req.params.id;
    let product = await Product.findOne({ where: { id: id } });
    res.status(200).send(product);
}

//4. Update Product
const updateProduct = async (req, res) => {
    let id = req.params.id;
    const product = await Product.update(req.body, { where: { id: id } });
    res.status(200).send(product);
}

//5. Delete Product
const deleteProduct = async (req, res) => {
    let id = req.params.id;
    await Product.destroy({where:{id:id}});
    res.status(200).send("Product Removed");
}


//Extra - get Published Product
const getPublishedProduct = async (req, res) => {
    const product = await Product.findAll({where:{published:true}});
    res.status(200).send(product);
}







module.exports = {
    addProduct,
    getAllProduct,
    getOneProduct,
    updateProduct,
    deleteProduct,
    getPublishedProduct
}