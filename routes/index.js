const express = require('express')
let router = express.Router()
const controllers = require('../controllers/traffic_timer');

router.get('/timer',controllers.getAllSignalsTimers)
router.post('/timer',controllers.createNewSignal)
router.put('/timer',controllers.updateSignalTimer)

module.exports = router