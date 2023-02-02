// const router = require('express').Router();

import {Router} from 'express'
const router = Router();

// const userControllers = require('../controllers/userController');

import {getUser,createUser} from '../controllers/userController.js'

router.get('/users', getUser);
router.post('/users',createUser);

export default router;

// module.exports = router;