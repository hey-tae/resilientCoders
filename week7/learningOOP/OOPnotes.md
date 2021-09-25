use {} to define OBJECT LITERALS 

let spaceship = {} // spaceship is an empty object now

an object gets filled with unordered data called KEY-VALUE PAIRS
key is like a variable name that holds a value 
key value can be any data type including functions or other objects 

making a key value pair 
write the keys name // IDENTIFIER
:
write the value
each key-value pair is separated using a , 
keys are strings, but if there are no special characters you don't need the quotation marks 

//an object literal with 2 key-value pairs 
//2 properties: Fuel Type and Color 
let spaceship = {
    'Fuel Type': 'diesel',
    color: 'silver'
}

//Accessing Object Property

//FIRST WAY dot notation
used to access an objects property
objectsname.propertyname (key)

let spaceship = {
    homePlanet: 'Earth'
    color: 'silver'
}
spaceship.homePlanet // returns 'Earth'
spaceship.color // returns 'silver'

// if you try to access a prtoperty that doesn't exist you will get undefined returned 


//SECOND WAY bracket notation 
pass in the property name as a string 
*we must use bracket notation when accessing keys that have numbers, spaces, or special characters 
you can use a variable inside the brackets to select the keys of an object 

//Property ASSIGNMENT 
we can use dot notation or bracket notation and the assignment operator to add new key value pairs to an object or change existing properties 

spaceship.color = 'gold'
//changes color from 'silver' to 'gold'
if the property already exists on the object, whatever value it had will be replaced 
if it does not exist, a new key will be added to the object 

const spaceship = {type: 'shuttle'};
spaceship.type = 'alien'; // Changes the value of the type property
spaceship.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'

//delete a property
you can delete a property from an object using the delete operator 
const spaceship = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
  mission: 'Explore the universe' 
};

delete spaceship.mission 

//object METHODS
when the data stored on an object is a function 
* a property is what an object has // a method is what an object does 
to include methods in an object the key would be the methods name and the value would be the function expression 
object methods are invoked by appending the objects name with the dot operator followed by the method name and parenthesis 
objectName.methodName()

//this keyword
refers to the object that the method is associated with 
makes the code resuable and easier to read 

//constructor methods 
functions that create new objects 
define properties and behaviors that will belong to the new object 

function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}

//syntaax 
defined with capitalized name 
use the keyword this to set properties of the object they will create 
define properties and behaviors instead of returning a value 

//new keyword
tells javascipt to create a new instance of the object

//passing arguments into constructors 
if you have objects that have shared characteristics and behavior you can use parameters 
function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
now you can pass in arguments such as 
let cardinal = new Bird("Bruce", "red");
so you don't have to change the properties manually for each new object 

//INSTANCEOF
anytime a constructor function creates a new object it becomes an instance of its constructor 
to verify this use instanceOf to compare an object to a constructor 
it will return true or false 

//OWN PROPERTIES ** look up more 
are defined directly on the instance object 
look up in keyword 
object.hasOwnProperty determines whether an object has a property with a specified name 

//PROTOTYPE PROPERTIES
properties in a prototype are shared among all instances of the object 
Bird.prototype.numLegs = 2;
means that in all instances of the Bird object, the numLegs property will be 2 

//change prototype to a new object
Dog.prototype = {

  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

*setting the prototype manually to a new object erases the constructor property so you have to define the contructor within the prototype
Bird.prototype = {
  constructor: Bird,
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name); 
  }
};

all objects have a prototype and all protoypes are themselves an object 

//supertype 
defines behviors by shared objects

//INHEREITANCE ** need to learn more
Object.create(obj) creates a new object, and sets the obj as the new objecst prototype 

//mixins 
best to be used for unrelated objects 

 In JavaScript, a function always has access to the context in which it was created. This is called closure.