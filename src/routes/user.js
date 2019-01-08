const express = require('express');
const router = express.Router();
const user = require('../controllers/userController');

router.post('/user', user.post);
router.post('/generate', user.token);

module.exports = router;