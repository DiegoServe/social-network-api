const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

// GET all and POST at users
router.route('/')
.get(getAllUsers)
.post(addUser);

// Get, Put and Delete by id users
router.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

// POST and DELETE by id friends
router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(deleteFriend); 

module.exports = router;