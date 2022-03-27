const express = require('express');

const router = express.Router();
const shortUrlsController = require('./controllers/shortUrls');

router.get('/:code', shortUrlsController.redirect);
router.post('/generate', shortUrlsController.generate);
module.exports = router;
