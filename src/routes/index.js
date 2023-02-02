const router = require('express').Router();
const userControllers = require('../controllers/userController');

router.get('/users', userControllers.getUser);
router.post('/users',userControllers.createUser);

module.exports = router;