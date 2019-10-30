// appel de la BDD Mongo et du modèle lié à la collection cars
require('./bdd');
var carsModel = require('./car');

// parcourir la BDD pour supprimer la voiture de couleur rouge
carsModel.deleteOne({color: 'rouge'}, function(error, car) {
  if (error) {
    console.log(error)
  } else {
    console.log('voiture de couleur rouge supprimée', car)
  }
});
