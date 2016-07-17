var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var Kid = require('./kid');

// Create the ParentSchema.
var ParentSchema = new mongoose.Schema({
    parentEmail: {type: String, unique: true, required: true},
    password: {type: String},
    kids : [{
     type: mongoose.Schema.ObjectId,
     ref: 'Kids'
   }]
});

ParentSchema.set('toJSON', {
  transform: function(doc, ret, options) {
    var returnJson = {
      id: ret._id,
      codename: ret.parentEmail,
      kids: ret.kids,
    };
    return returnJson;
  }
});

ParentSchema.pre('save', function(next) {
  this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  next();
});

ParentSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};


// Export the model.
module.exports = mongoose.model("Parent", ParentSchema);
