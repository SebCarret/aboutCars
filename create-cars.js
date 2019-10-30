// appel de la BDD Mongo et du modèle lié à la collection cars
require('./bdd');
var carsModel = require('./car');

// Création de la 1ère voiture
var newCar = new carsModel({
  brand: 'Renault',
  model: 'Clio',
  year: 2017,
  color: 'rouge',
  automatic: 'manuelle'
});

newCar.save(function(error, car) {
  if (error) {
    console.log(error)
  } else {
    console.log('nouvelle voiture créée en BDD', car)
  }
});

// Création de la 2ème voiture
var newCar = new carsModel({
  brand: 'Audi',
  model: 'A1',
  year: 2016,
  color: 'grise',
  automatic: 'auto'
});

newCar.save(function(error, car) {
  if (error) {
    console.log(error)
  } else {
    console.log('nouvelle voiture créée en BDD', car)
  }
});

// Création de la 3ème voiture
var newCar = new carsModel({
  brand: 'Renault',
  model: 'Megane',
  year: 2018,
  color: 'orange',
  automatic: 'auto'
});

newCar.save(function(error, car) {
  if (error) {
    console.log(error)
  } else {
    console.log('nouvelle voiture créée en BDD', car)
  }
});
