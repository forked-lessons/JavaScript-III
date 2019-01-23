/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.

  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

// Build Constructor

function GameObject(GameObjectAttributes) {
  this.createdAt = GameObjectAttributes.createdAt;
  this.dimensions = GameObjectAttributes.dimensions;
}

//prototype methods here

GameObject.prototype.destroy = function () {
  return ('Object was removed from the game.');
}

/*
  === CharacterStats ===
  * healthPoints
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

//Build Constructor

function CharacterStats(CharacterStatsAttributes) {
  this.healthPoints = CharacterStatsAttributes.healthPoints;
  this.name = CharacterStatsAttributes.name;
  GameObject.call(this, CharacterStatsAttributes);
}

//Inheritance
CharacterStats.prototype = Object.create(GameObject.prototype);

//prototype methods here

CharacterStats.prototype.takeDamage = function () {
  return `${this.name} took damage.`;
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

//Humaniod Constructor here

function Humanoid(humanoidAttributes) {
  this.team = humanoidAttributes.team;
  this.weapons = humanoidAttributes.weapons;
  this.language = humanoidAttributes.language;
  CharacterStats.call(this, humanoidAttributes);

}

//Humaniod prototype inheritance 

Humanoid.prototype = Object.create(CharacterStats.prototype);

//prototype methods here
Humanoid.prototype.greet = function () {
  return ` ${this.name} offers a greeting in ${this.language}.`
}

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
    'another wep'
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

// console.log(mage.createdAt); // Today's date
// console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
// console.log(swordsman.healthPoints); // 15
// console.log(mage.name); // Bruce
// console.log(swordsman.team); // The Round Table
// console.log(mage.weapons); // Staff of Shamalama
// console.log(archer.language); // Elvish
// console.log(archer.greet()); // Lilith offers a greeting in Elvish.
// console.log(mage.takeDamage()); // Bruce took damage.
// console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


// Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  

//Villain = Clutter
//Constructor Function

function Villain(villainAttributes) {
  this.opponentHealth = villainAttributes.opponentHealth;
  this.sentimentalAttack = villainAttributes.sentimentalAttack;
  CharacterStats.call(this, villainAttributes);
}

//Inheritance
Villain.prototype = Object.create(Humanoid.prototype);

// METHODS

Villain.prototype.attack = function () {
  this.opponentHealth -= 10;
  return `The Clutter overwhelms you as you look through pictures of your childhood family vacations.`;
};


//Hero = Marie Kondo
//Constructor Function

function Hero(heroAttributes) {
  this.opponentHealth = heroAttributes.opponentHealth;
  CharacterStats.call(this, heroAttributes);
}

//Inheritance
Hero.prototype = Object.create(Humanoid.prototype);

// METHODS

Hero.prototype.joy = function () {
  this.opponentHealth -= 10;
  return `Does this item bring you joy?`;
};

Hero.prototype.letItGo = function () {
  this.opponentHealth -= 40;
  return `Thank it and let it go.`;
};

// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
//METHODS HERE

// * Create two new objects, one a villain and one a hero and fight it out with methods!

//Marie Kondo
const minimalist = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 1,
    height: 1,
  },
  healthPoints: 100,
  opponentHealth: 50,
  name: 'Marie Kondo',
  team: 'Clean Sweep',
  weapons: [
    'Joy',
    ' Thank it and let it go.',
  ],
  language: 'Japanese',
});

//Clutter
const clutter = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 10,
    width: 10,
    height: 10,
  },
  healthPoints: 50,
  opponentHealth: 100,
  name: 'A heap of Junk',
  team: 'Hoarder',
  weapons: [
    'Oh thats where that was',
    ' Sentimental Value',
  ],
  language: 'Earthly Attachment',
});

console.log("Lets get ready to rumbleeeeeee!!!!!")
console.log(`Today ${minimalist.name} will take on a new home filled with ${clutter.name}, will she thank it and let it go, or will it overwhelm her?`);
console.log(clutter.attack())
console.log(`${minimalist.name} has been overwhelmed, ${minimalist.name} now has ${minimalist.opponentHealth} hp.`);
console.log(minimalist.joy());
console.log(`${clutter.name} has been reduced, ${clutter.name} now has ${clutter.opponentHealth} hp.`);
console.log(minimalist.letItGo());
console.log(`${clutter.name} has been reduced, ${clutter.name} now has ${minimalist.opponentHealth} hp.`);

console.log(`${clutter.weapons}`);