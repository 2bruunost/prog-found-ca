//Question
var newString = "gold";
//Question 2
var person = {
	name: "John",
	age: 45,
};
//Question 3
var outOfStock = true;
if (outOfStock === true) {
	console.log("Out of stock");
} else {
	console.log("In stock");
}
//Question 4

var numbers = [1, 2, 3, 4, 5];
var antallNumbers = numbers.length;
for (i = 0; i <= antallNumbers; i++) {
	console.log(i);
}

// Question 5

for (var count = 5; count <= 25; count++) {
	console.log(count);
}

// Question 6
if (count === 20) {
	console.log("Counter is 20");
}

//Question 7

var contender = [
	{
		name: "John",
		age: 80,
		active: true,
	},
	{
		name: "Oliver",
		age: 120,
		active: false,
	},
];

for (var p = 0; p < contender.length; p++) {
	console.log(contender[p].name);
	console.log(contender[p].active);
}

//Question 8
function whatIDontLike(myBeleif) {
	console.log("I don't like " + myBeleif);
}

//Question 9
function subCorrection(numberOne, numberTwo) {
	var sub = numberOne - numberTwo;
	console.log(sub);
}
subCorrection(22, 21);

//Question 10
var locations = [];

function addLocation(myLocation) {
	locations.push(myLocation);
}

addLocation("Paris");
console.log(locations);
