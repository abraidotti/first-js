// I'm alerting
/* 
here's a multi-line comment
*/
console.log("Hello world.");

function change(){
	// function body
	document.getElementById('foo').innerHTML = "This is the new text.";
}

// create 3 variables, each with a different basic data-type
var myName = 'Sandro'; //string
var myAge = 37; //integer
var isSandroHere = true; //boolean

//more data-types
var foo = []; // empty array
var bar = {}; // empty object

/*
Arrays and objects are used to create more complex collections
of our basic data-types.
*/

var dogs = ['beagle', 'pom', 'poodle', 
'cerberus', 2.4, 5.7, 2000, true, false];
console.log(dogs[1]); //logs 'pom' to console

function changeDog(){
	document.getElementById('dogSelector').innerHTML = dogs[2];
}

var meat = ['ham', 'turkey', 'boar'];
var fruit = ['apple', 'cherry', 'melon'];
// you can store arrays in arrays.
var food = [meat, fruit];

//here's another way to define an array of two arrays.
var foodReverse = [['melon', 'cherry', 'apple'], ['boar', 'turkey', 'ham']];

console.log(food);
// this is how to log indices of arrays
console.log(food[0][1]);
console.log(food[1][1]);

console.log(foodReverse);




