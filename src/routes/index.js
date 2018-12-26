const express = require('express');
const router = express.Router();
const api = require('../controllers/toolsController');

router.post('/tools', api.post);
router.get('/tools', api.get);
router.delete('/tools/:id', api.delete);


module.exports = router;