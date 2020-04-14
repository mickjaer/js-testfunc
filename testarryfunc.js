// https://medium.com/@PurpleGreenLemon/simplify-your-javascript-with-these-6-array-methods-db4c278f08c9
// Pas på, Der var fejl i kode eksemplerne
exports.Reduce2 = function () {
  let animals = [
    {name: 'Tibbers', type: 'cat', isNeutered: true, age: 22},
    {name: 'Fluffball', type: 'rabbit', isNeutered: false, age: 11},
    {name: 'Strawhat', type: 'cat', isNeutered: true, age: 25}
  ]

// How old are all the animals combined?
// 0 is the starting value and acts as the first acculmulator value
// will return 8

let totalAge = animals.reduce((acculmulator, animal) => {
    return acculmulator + animal.age;
}, 0);

// lets say you want to find out the oldest animal 
// code below will return {name: 'Strawhat', type: 'cat', isNeutered: true, age: 5}

// (oldest.years || 0) test om oldest.year er not defined eller 0
let oldestPet = animals.reduce((oldest, animal) => {
    return (oldest.age || 0) > animal.age ? oldest : animal;
  }, {});
  return 'Reduce2: oldestPet = ' + oldestPet.name;
}
// ********  RETURN new objects
exports.mapTest = function () {
let animals = [
    {name: 'Tibbers', type: 'cat', isNeutered: true, age: 2},
    {name: 'Fluffball', type: 'rabbit', isNeutered: false, age: 1},
    {name: 'Strawhat', type: 'cat', isNeutered: true, age: 5}
  ]

// what you need: 
// ['Tibbers', 'Fluffball', 'Strawhat']

let animalNames = animals.map(animal => {return animal.name});

// what you need: 
// [{name: 'Tibbers', species: 'cat'}, {name: 'Fluffball', species: 'rabbit'}, {name: 'Strawhat', species: 'cat'}]

let petDetails = animals.map(animal => {
    return {
        name: animal.name, 
        species: animal.type
    };
});
  return petDetails;
}