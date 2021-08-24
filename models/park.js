const Park = function (name, ticketPrice) {
    this.name = name
    this.ticketPrice = ticketPrice
    this.dinosaurs = []
}

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaur){
    const indexOfDinosaur = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(indexOfDinosaur, 1)
};

Park.prototype.findMostPopularDinosaur = function(){
    let mostVisitors = this.dinosaurs[0];
    for (dinosaur of this.dinosaurs){
        if (dinosaur.guestsAttractedPerDay > mostVisitors.guestsAttractedPerDay) {
            mostVisitors = dinosaur
        }
    }
    return mostVisitors
}

Park.prototype.findBySpecies = function(species) {
    results = [];
    for (dinosaur of this.dinosaurs){
        if (dinosaur.species == species){
            results.push(dinosaur);
        }
    }
    return results;
}

Park.prototype.totalVisitors = function() {
    let total = 0;
    for (dinosaur of this.dinosaurs) {
        total += dinosaur.guestsAttractedPerDay;
    }
    return total
};

Park.prototype.totalVisitorsPerYear = function() {
    return this.totalVisitors() * 365;
};

Park.prototype.totalAnnualRevenue = function() {
    return this.totalVisitorsPerYear() * this.ticketPrice;
};


module.exports = Park;