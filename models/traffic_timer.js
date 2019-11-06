const mongoose = require('mongoose')
var Schema = mongoose.Schema

var trafficTimerSchema = new Schema({
  traffic_signal_name: {
    type: String,
    required: true,
    unique: true
  },
  duration: Number,
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
})

var TrafficTimer = mongoose.model('TrafficTimer', trafficTimerSchema)

module.exports = TrafficTimer
