var mongoose = require('mongoose');

// kid schema
// Create the kid Schema.
var KidSchema = new mongoose.Schema({
   kidName: {
      type: String,
      required: true,
      unique: true
   },
   starColor: {
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


// Export the model.
module.exports = mongoose.model('Kid', KidSchema);


//
// KidSchema.set('toJSON', {
//   transform: function(doc, ret, options) {
//     var returnJson = {
//       id: ret._id,
//       kidName: ret.kidName,
//       color: ret.color,
//       day1: ret.day1,
//       day2: ret.day2,
//       day3: ret.day3,
//       day4: ret.day4,
//       day5: ret.day5,
//       day6: ret.day6,
//       day7: ret.day7
//     };
//     return returnJson;
//   }
// });
