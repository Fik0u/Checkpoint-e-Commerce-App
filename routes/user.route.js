const express = require ('express')
const { allUsers, deleteUser, oneUser } = require('../controllers/user.controller')
const isAdmin = require('../middleware/isAdmin')

const router = express.Router()


// Test route
router.get('/test', (req, res) => {
    res.status(200).json({msg: 'User route is working'})
})

//!User routes
// isAdmin middleware is used to protect the route and only allow access to admin users

// Users list route
router.get('/allUsers', isAdmin, allUsers)

// User details route
router.get('/:id', isAdmin, oneUser)

// User delete route
router.delete('/:id', isAdmin, deleteUser)




module.exports = router;