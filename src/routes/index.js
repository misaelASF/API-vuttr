const express = require('express');
const router = express.Router();
const api = require('../controllers/toolsController');
const user = require('../controllers/userController');

router.post('/tools', user.authorization, api.post);
router.get('/tools', api.get);
router.delete('/tools/:id', api.delete);

module.exports = router;