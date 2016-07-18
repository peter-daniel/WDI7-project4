var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var kidController = require('./controllers/kidsController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Please use /api/kids');
});

router.route('api/kids')
  .get(kidController.indexKids)
  .post(kidController.addKid);

router.route('api/kids/:id')
  .get(kidController.showKid)
  .put(kidController.updateKid)
  .delete(kidController.deleteKid);


module.exports = router;
