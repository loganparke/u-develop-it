const express = require('express');
const router = express.Router();
//middleware
router.use(require('./voterRoutes'));
router.use(require('./partyRoutes'));
router.use(require('./candidateRoutes'));


module.exports = router;