/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - In the global scope "this" will return the window object. 
* 2. Implicit Binding - Always look to the left of the last dot to find where this is bound.
* 3. New Binding - Using the new keyword to create a constructor function to create unique objects to store the binding.
* 4. Explicit Binding - Using the call or apply method automatically points this back to those methods by definition. 
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function greetMe(name) {
    console.log('Hello ' + name);
    console.log(this);
}

greetMe('John');
// Principle 2
// code example for Implicit Binding

var greetMe = {
    greeting: 'Hello ',
    speak: function (name) {
        console.log(this.greeting + name);
        console.log(this);
    }
}

greetMe.speak('John');
// Principle 3
// code example for New Binding
function CordialPerson(name) {
    // this.greeter = name;
    // this.greeter = greeter;
    this.greeting = "Hello";
    this.speak = function () {
        console.log(`${this.greeting}, ${this.greeter}`)
    }
}

const jerry = new CordialPerson('Newman');
const newman = new CordialPerson('Jerry');


// Principle 4
// code example for Explicit Binding
const person = {
    name: 'Daniel'
}

const newPerson = {
    name: 'Riley'
}

const activity = ['Pets', 'Netflix', 'More Pets'];

function introduce(activity1, activity2, activity3) {

    console.log(`Hello! My name is ${this.name}, and I enjoy: ${activity1}, ${activity2}, and ${activity3}`)
}
const useLater = introduce.bind(person, ...activity);

useLater();
