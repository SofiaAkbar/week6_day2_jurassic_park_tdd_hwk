const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park("Jurassic Park", 30);
  });

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park");
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 30);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function() {
    const dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    park.addDinosaur(dinosaur1);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1]);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    const dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    const dinosaur2 = new Dinosaur('triceratops', 'herbivore', 30);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.removeDinosaur(dinosaur1);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur2]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    const dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    const dinosaur2 = new Dinosaur('triceratops', 'herbivore', 30);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    const actual = park.findMostPopularDinosaur();
    assert.strictEqual(actual, dinosaur1)
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    const dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    const dinosaur2 = new Dinosaur('triceratops', 'herbivore', 30);
    const dinosaur3 = new Dinosaur('t-rex', 'carnivore', 40);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);

    const actual = park.findBySpecies("t-rex");
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur3])
  });

  it('should be able to calculate the total number of visitors per day', function() {
    const dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    park.addDinosaur(dinosaur1);
    const dinosaur2 = new Dinosaur('triceratops', 'herbivore', 30);
    park.addDinosaur(dinosaur2);

    const actual = park.totalVisitors();
    assert.strictEqual(actual, 80);
  });

  it('should be able to calculate the total number of visitors per year', function() {
    const dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    park.addDinosaur(dinosaur1);
    const dinosaur2 = new Dinosaur('triceratops', 'herbivore', 30);
    park.addDinosaur(dinosaur2);

    const actual = park.totalVisitorsPerYear();
    assert.strictEqual(actual, 80*365);
  });

  // it('should be able to calculate total revenue for one year');

});
