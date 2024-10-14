const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to User model
  }],
}, { timestamps: true });

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
