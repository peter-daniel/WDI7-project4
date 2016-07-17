var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var authenticationController = require('../controllers/authenticationController');
var agentsController = require('../controllers/parentsController');

router.post('/login', authenticationController.login);
router.post('/register', authenticationController.signup);

router.route('/parents')
  .get(parentsController.indexParent)
  .post(parentsController.createParent)

router.route('/[parents]/:id')
  .get(parentsController.showParent)
  .put(parentsController.updateParent)
  .delete(parentsController.deleteParent)

module.exports = router;
