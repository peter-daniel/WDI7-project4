var Kid = require('../models/kids');


function indexKids(req, res){
  Kid.find(function(error, agents){
    if (error) return res.status(404).json({message: 'There are no kids added.'});
    return res.status(200).json(kids);
  });
}

function addKid(req, res){
  var kid = new Kid(req.body);
  kid.save(function(error){
    if (error) return res.status(403).send({message: "Try again"});
    return res.status(200).send(kid);
  });
}

function showKid(req, res){
  var id = req.params.id;
  Kid.findById({_id: id}, function(error, agent){
    if (error) return res.status(404).send({message: 'There are no kids with that name'});
    return res.status(200).send(agent);
  });
}

function updateKid(req, res){
  var id = req.params.id;
  Kid.findById({_id: id}, function(error, agent) {
    if (error) return res.status(404).send({message: 'There are no kids with that name'});

    if (req.body.kidName) kid.kidName = req.body.kidName;
    if (req.body.starColor) kid.starColor = req.body.starColor;

    kid.save(function(error) {
      if (error) return res.status(500).send({message: "There seems to be some error in updating."});
      return res.status(200).send(kid);
    });
  });
}

function deleteKid(req, res){
  var id = req.params.id;
  Kid.remove({_id: id}, function(error) {
    if (error) res.status(404).send({message: 'There are no kids with that name'});
    res.status(204);
  });
  return;
}

module.exports = {
  indexKids: indexKids,
  addKid: addKid,
  showKid: showKid,
  updateKid: updateKid,
  deleteKid: deleteKid
};
