const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    naam: String,
    dsc: String
  });
  
  module.exports = mongoose.model("Project", ProjectSchema);