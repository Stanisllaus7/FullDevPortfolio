const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    naam: String,
    dsc: String,
    type: String,
    img: String
  });
  
  module.exports = mongoose.model("Project", ProjectSchema);