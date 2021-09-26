var morning = "It is morning. I need coffee.";
var lunch = "What should we have for lunch?";
var dinner = "Dinner will be chili.";

var cups = 4;
var plates = 2;
var bowls = 3;

var coffeeReady = true;
var lunchMade = true;
var dinnerReady = false;

var makeCoffee = ['water', 'coffee grounds', 'pinch of salt', 'cinnamon'];
var makeLunch = ['bread', 'tuna', 'mayo'];
var makeDinner = ['ground meat', 'corn', 'diced tomatoes', 'beans', 'spices'];

class Menu {
  constructor(day, meal, ing) {
    this.day = day;
    this.meal = meal;
    this.ingredients = ing;
  }
}

var meal1 = new Menu ('Monday', 'dinner', ['chicken', 'rice', 'corn']);
var meal2 = new Menu ('Tuesday', 'lunch', ['bread', 'chicken', 'mayo']);
var meal3 = new Menu ('Tuesday', 'dinner', [makeDinner]);
