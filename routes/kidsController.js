var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');



router.use(bodyParser.urlencoded({ extended: true }));
router.use(methodOverride(function(req, res){
      if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method;
        delete req.body._method;
        return method;
      }
}));



/* GET home page. */
router.route('/')
  .get(function (req, res, next){
    mongoose.model('Kid').find({}, function(error, kids){
      if (error) {
        return res.status(404).json({message: 'There are no kids added.'});
      } else {
        res.render('index', {
          'kids' : kids
        });
      }
    });
  });


// creat a kid
router.route('/new')
  .post(function(req, res, next){
  	mongoose.model('Kid').create({
  		kidName: req.body.kid_name,
  		starColor: req.body.star_color,
      day1: 0,
      day2: 0,
      day3: 0,
      day4: 0,
      day5: 0,
      day6: 0,
      day7: 0
  	}, function(err, kid){
  		if(err){
  			return res.status(403).send({message: err.errmsg});
  		} else {
        res.redirect('/');
  		}
  	});
  });


// function updateKid(req, res){
//   var id = req.params.id;
//   Kid.findOneAndUpdate({_id: id}, function(error, agent) {
//     if (error) return res.status(404).send({message: 'There are no kids with that name'});
//     if (req.body.kidName) kid.kidName = req.body.kidName;
//     if (req.body.starColor) kid.starColor = req.body.starColor;
//
//       kid.save(function(error) {
//         if (error) {return res.status(500).send({message: "There seems to be some error in updating."});
//       } else {
//         res.render('pages/index', {
//           //
//         });
//       }
//     });
//   });
// }

router.route('/new')
  .post(function(req, res, next){
  	mongoose.model('Kid').create({
  		kidName: req.body.kid_name,
  		starColor: req.body.star_color,
      day1: 0,
      day2: 0,
      day3: 0,
      day4: 0,
      day5: 0,
      day6: 0,
      day7: 0
  	}, function(err, kid){
  		if(err){
  			return res.status(403).send({message: err.errmsg});
  		} else {
        res.redirect('/');
  		}
  	});
  });


router.route('/delete')
  .delete(function (req, res, next){
    var id = req.params.id;
    mongoose.model('Kid').findOneAndRemove({_id: id}, function(error) {
      if (error) res.status(404).send({message: 'There are no kids with that name'});
      res.status(204);
    });
    return;
  });




// function showKid(req, res){
//   var id = req.params.id;
//   Kid.findById({_id: id}, function(error, agent){
//     if (error) return res.status(404).send({message: 'There are no kids with that name'});
//     return res.status(200).send(agent);
//   });
// }

module.exports = router;
