const mongoose = require('mongoose');


const DetailsSchema = mongoose.Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId
  },
  height:Number,
  weight:Number
  
});


module.exports = mongoose.model('details', DetailsSchema);