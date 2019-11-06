const express = require('express')
let router = express.Router()
const controllers = require('../controllers/traffic_timer');

router.get('/',controllers.getAllSignalsTimers)
router.post('/',controllers.createNewSignal)
router.put('/',controllers.updateSignalTimer)

module.exports = router