var mongoose = require('mongoose');
var Parent = require('./parent');

// Create the kid Schema.
var KidSchema = new mongoose.Schema({
   _parent: {
     type: mongoose.Schema.ObjectId,
     ref: 'Parent'
   },
   kidName: {
      type: String,
      required: true,
      unique: true
   },
   color: {
      type: String,
      required: true,
      unique: true
   },
   day1: {
    type: Number,
   },
   day2: {
      type: Number,
   },
   day3: {
      type: Number,
   },
   day4: {
      type: Number,
   },
   day5: {
      type: Number,
   },
   day6: {
      type: Number,
   },
   day7: {
      type: Number,
   },
});


KidSchema.set('toJSON', {
  transform: function(doc, ret, options) {
    var returnJson = {
      id: ret._id,
      realname: ret.realname,
      codename: ret.codename,
      status: ret.status,
      location: ret.location
    };
    return returnJson;
  }
});


// Export the model.
module.exports = mongoose.model('Kid', KidSchema);
