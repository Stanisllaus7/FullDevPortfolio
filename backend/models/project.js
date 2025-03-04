const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    naam: String,
    dsc: String,
    type: String
  });
  
  module.exports = mongoose.model("Project", ProjectSchema);