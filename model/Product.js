const mongoose = require ('mongoose')

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
    },
    quantity: {
        type: Number,
        default: 0,
    },
    image: {
        type: String,
        default: 'https://image.made-in-china.com/202f0j00TZAifKJBrtYn/Fast-Speed-I3-I5-I7-I9-CPU-for-Desktop-All-in-One-PC-Laptop-Processor-CPU.webp'
    },
    price: {
        type: Number,
    },
    addedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }

}, { timestamps: true })

const Product = mongoose.model('product', productSchema)

module.exports = Product