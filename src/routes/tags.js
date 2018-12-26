const express = require('express');
const router = express.Router();
const api = require('../controllers/tagsController');

router.get('/tools', api.get);

module.exports = router;