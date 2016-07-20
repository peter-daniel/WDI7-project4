var mongoose = require('mongoose');

// kid schema
// Create the kid Schema.
var TaskSchema = new mongoose.Schema({
   Task1: {
      type: String,
   },
   Task2: {
      type: String,
   },
   Task23: {
      type: String,
   },
   Task4: {
      type: String,
   },
   Task5: {
      type: String,
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
