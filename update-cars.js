// appel de la BDD Mongo et du modèle lié à la collection cars
require('./bdd');
var carsModel = require('./car');

// mettre à jour l'année des voitures de marque Renault
carsModel.updateMany(
  {brand: 'Renault'},
  {year: 2019},
  function(error, cars) {
    if (error) {
      console.log(error)
    } else {
      console.log('MAJ de l\'année des voitures Renault', cars)
    }
});
