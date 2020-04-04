const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 100,
  },
  genre: {
    type: [String],
    required: true,
  },
  releaseYear: {
    type: Number,
    required: true,
    minLength: 1900,
    maxLength: 2100,
  },
  cast: {
    type: [Object],
    required: true,
  },
  runTime: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  movieImageUrl: {
    type: String,
    required: true,
  },
  directors: {
    type: [String],
    required: true,
  },
  plotSummary: {
    type: String,
    required: true,
  },
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
