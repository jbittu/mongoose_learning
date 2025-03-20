const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/products").then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.log("Error connecting to MongoDB", err);
});


const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20,
    },
    price: {
        type: Number,
        required: true,
        min:2,
        max: 6
    },
    category: String,
    quantity: Number
})

const product = new mongoose.model("product", productsSchema);

const createDocument = async () => {
    try{
        const product1 = new product({
            name: "laptop",
            price: 50000,
            category: "electronics",
            quantity: 5
        })
        const product2 = new product({
            name: "mobile",
            price: 20000,
            category: "electronics",
            quantity: 10
        })
        const product3 = new product({
            name: "t-shirt",
            price: 500,
            category: "clothing",
            quantity: 50
        })
        const product4 = new product({
            name: "jeans",
            price: 1000,
            category: "clothing",
            quantity: 20
        })
        const result = await product.insertMany([product1, product2, product3, product4]);
        console.log(result);
    }catch(err){console.log(err)}
};

createDocument();


const getProduct = async () => {
    try{
        const data = await product.find();
        console.log(data);
    }catch(err){console.log(err)}
};

getProduct();



const updateProduct = async (id) => {
    try{
        const result = await product.findByIdAndUpdate({_id:id},{$set: {name : "mackbook"}},{new: true});
        console.log(result);
    }
    catch(err){console.log(err)}
};

updateProduct("67dbf5fef942d5d9b35a7ac3");


const deleteProduct = async (id) => {
    try{
        const result = await product.deleteOne({_id:id});
        console.log(result);
    }
    catch(err){console.log(err)}
};

deleteProduct("67dbf5fef942d5d9b35a7ac3");