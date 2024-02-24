const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId
  },
  title: String,
  description: String,
  image: String
});


module.exports = mongoose.model('post', PostSchema);