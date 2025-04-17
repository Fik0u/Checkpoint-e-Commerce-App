const Product = require('../model/Product');

exports.addProduct = async (req, res) => {
    try {
        const newProduct = new Product({...req.body, addedBy: req.user._id});
        await newProduct.save();
        res.status(200).json({ msg : 'Product added successfully', newProduct });

    } catch (error) {
        res.status(400).json({ msg : 'Error adding product', error })
    }
};

exports.getProducts = async (req, res) => {
    try {
        const prodList = await Product.find()
        res.status(200).json({ msg : 'Products fetched successfully', prodList });
    } catch (error) {
        res.status(404).json({ msg : "Couldn't find the products list", error })
    }
};

exports.getOne = async (req, res) => {
    try {
        const { id } = req.params;
        const oneProd = await Product.findById(id);
        res.status(200).json({ msg : 'Product fetched successfully', oneProd });
    } catch (error) {
        res.status(404).json({ msg : "Couldn't find the product", error })
    }
};

exports.getMyProducts = async (req, res) => {
    try {
        const myProdList = await Product.find({ addedBy: req.user._id});
        if (!myProdList) {
            return res.status(404).json({ msg : "Couldn't find your products list" })
        }
        res.status(200).json({ msg : 'Your products list fetched successfully', myProdList });
    } catch (error) {
        res.status(404).json({ msg : "Couldn't find your products list", error })
    }
};

exports.editProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const changeProd = req.body;
        const prod = await Product.findById(id);
        
        if (!prod) {
            return res.status(404).json({ msg : "Couldn't find the product" })
        }
        if(prod.addedBy.toString() !== req.user._id.toString()){
            return res.status(401).json({ msg : "You can't edit this product" })
        }
        
        const editedProd = await Product.findByIdAndUpdate(id, changeProd, { new: true });
        res.status(200).json({ msg : 'Product edited successfully', editedProd });

    } catch (error) {
        res.status(400).json({ msg : 'Error editing product', error })
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const prod = await Product.findById(id);
        if (!prod) {
            return res.status(404).json({ msg : "Couldn't find the product" })
        }
        if(prod.addedBy.toString() !== req.user._id.toString()){
            return res.status(401).json({ msg : "You can't delete this product" })
        }

        const deletedProd = await Product.findByIdAndDelete(id);
        res.status(200).json({ msg : 'Product deleted successfully', deletedProd });
    } catch (error) {
        res.status(400).json({ msg : 'Error deleting product', error })
    }
}