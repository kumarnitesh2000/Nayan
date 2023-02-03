const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema({
  event: {
    type: String,
    required: true,
  },
  eventDescription: {
    type: String,
    require: true,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model("eventr", eventSchema);
