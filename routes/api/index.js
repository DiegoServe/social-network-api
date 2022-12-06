const router = require('express').Router();
const userRouters = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// add prefix 
router.use('/users', userRouters)

// add prefix of '/thoughts' 
router.use('/thoughts', thoughtRoutes);

module.exports = router;