const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    movie: {
      type: String,
      required: [true, "Please provide movie name"],
    },

    city: {
      type: String,
      required: [true, "Please provide names of city"],
    },

    cinema: {
      type: String,
      required: [true, "Please provide names of cinema"],
    },

    shows: {
      type: Array,
      required: [true, "Please provide show timings"],
    },

    price: {
      type: Number,
      required: [true, "Price provide ticket price"]
    }
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movies", MovieSchema);
