var express = require('express');
var router = express.Router();

const landingControllers = require('../controllers/landingControllers');

/* GET landing page. */
router.get('/', landingControllers.landing_get);

module.exports = router;
