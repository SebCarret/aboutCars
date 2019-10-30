// appel de la BDD Mongo et du modèle lié à la collection cars
require('./bdd');
var carsModel = require('./car');

// parcourir la BDD pour trouver les voitures avec boîte manuelle uniquement
carsModel.find({automatic: 'auto'}, function(error, cars) {
  if (error) {
    console.log(error)
  } else {
    console.log('voitures filtrées par boîte auto', cars)
  }
});
