const TrafficTimer = require('../models/traffic_timer')
const request_validator = require('../validations/request_validation')

const getAllSignalsTimers = (req, res) => {
    TrafficTimer.find({}).then((result) => {
        return res.json({
          message: "Get All the Signals timer successfully.",
          status_code: 200,
          result
        })
      }, (error) => {
        return res.json({
          message: "Error while fetching the Timers",
          status_code: 400,
          error
        })
      })
}

const createNewSignal = (req, res) => {
    const errors = request_validator(req.body);

    if (Object.keys(errors).length === 0) {
        const traffic_signal_name = req.body.traffic_signal_name.toLowerCase()
        const duration = parseInt(req.body.duration)
    
        TrafficTimer.create({
            traffic_signal_name,
            duration
        }).then((result) => {
          return res.json({
            message: "Add new signal successfully",
            status_code: 201
          })
        }, (error) => {
          return res.json({
            message: "Error while creating the new signal.",
            status_code: 400,
            error
          })
        })
      } else {
        return res.json({
          message: "Bad Request",
          status_code: 400,
          errors
        })
      } 
}

const updateSignalTimer = (req, res) => {
    const errors = request_validator(req.body);

    if (Object.keys(errors).length === 0) {
        TrafficTimer.update({
            traffic_signal_name: req.body.traffic_signal_name
        }, {
            $set: {
                duration: req.body.duration
            }
        }).then((result) => {
            return res.json({
            message: "Update the signal timer duration successfully.",
            status_code: 200
            })
        }, (error) => {
            return res.json({
            message: "Bad Request",
            status_code: 400,
            error
            })
        })
    } else {
        return res.json({
            message: "Bad Request",
            status_code: 400,
            errors
          })
    }
}

module.exports = {
    getAllSignalsTimers,
    createNewSignal,
    updateSignalTimer
}