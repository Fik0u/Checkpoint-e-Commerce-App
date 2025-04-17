const express = require ('express')

require('dotenv').config()

const connectDB = require('./config/connectDB')


const app = express ()

//middleware
app.use(express.json())

//Connect to DB
connectDB()


//Routes
app.use('/api/auth', require('./routes/auth.route'))

app.use('/api/user', require('./routes/user.route'))

app.use('/api/product', require('./routes/product.route'))


// Port
const PORT = process.env.PORT || 1302

//Listen
app.listen(PORT, (err) => {
    err? console.log("Server couldn't run 👾", err) : console.log(`Server is running on port ${PORT} 🤖`)
})