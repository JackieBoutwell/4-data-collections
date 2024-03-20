// console.log("Hello CodeSandbox");

// const names = ["John", "Abagail", "Jerome", "Cynthia"];
// const greetings = [];

// for (let i = 0; i < names.length; i++) {
// greetings[i] = "Hello, " + names[i] + "!";
// console.log(greetings[i]);
// }
// indexes: 0, 1, 2
let nums = [2, 4, 18];
//
let movies = ["Space Jam", "Fury", "Shawshank Redemption", "Dune", "Mad Max"];

let firstMovie = movies[0];
// console.log(firstMovie);

// console.log(movies.length); //5

// //  to change the index
// movies[1] = "BATMAN";
// // add the the end of the array
// // movies.push("Spiderman");
// movies[movies.length] = "Superman";
// // add movies to the 10th element
// movies[10] = "Hulk";
// // have an array of 10 elements

// console.log(movies);

for (let i = 0; i < movies.length; i++) {
  //   console.log(movies[i]);
}
let yourMovies = ["Caddyshack", "Interstellar", "Scarface"];
let myMovies = ["Batman", "The Count of Monte Cristo", "Shrek"];

let ourMovies = yourMovies.concat(myMovies);

// console.log(ourMovies);

let movieString = myMovies.join(", ");
// console.log("movieString:", movieString);

myMovies.push("Caddyshack");
// console.log("mymovies:", myMovies);

myMovies.unshift("Star Wars");
// console.log("mymovies:", myMovies);

let last = myMovies.pop();
let sentence = myMovies.join(", ") + ", and " + last;
// console.log("sentence:", sentence);

// splice
let removedMovies = myMovies.splice(3, 1, "spaceballs", "Alien");
// console.log(myMovies);

// slice
let middleMovies = myMovies.slice(1, 3);
// console.log(myMovies);

// at
let myMovie = myMovies.at(-1);
// console.log(myMovie);

// reverse
myMovies.reverse();
// console.log(myMovie);
let numArray = [
  // 0, 1,  2
  [1, 2, 3], //0
  [4, 5, 6], //1
  [7, 8, 9], //2
];
// console.log(numArray[1][1]); // for 5
// console.log(numArray[2][0]); // for 7

let numArrayTwo = [
  [1, 2, 3], // 0
  [4, 5, 6], // 1
  [
    //2
    [7, 8, 9], // 0
    [10, 11, 12], // 1
    [13, 14, 15], //2
  ],
];

// console.log(numArrayTwo[2][2][2]); // 15
// console.log(numArrayTwo.flat());

//arrays can take anything
// [1, true,'test',[], function];

// sort arrays

// let numArray = [4, 8, 1, 0, -14, 22, 77, 1388, 20];
// let movies = ['Shrek', 'Caddyshack', 'Batman', 'Interstellar', 'Scarface', 'Spaceballs', 'Alien', 'The Count of Monte Cristo'];

// numArray.sort(); // [-14, 0, 1, 1388, 20, 22, 4, 77, 8]
// movies.sort(); // ['Alien', 'Batman', 'Caddyshack', 'Interstellar', 'Scarface', 'Shrek', 'Spaceballs', 'The Count of Monte Cristo']

// indexof method to get index #
// console.log(myMovies);
// console.log(myMovies.indexOf("Alien"));

// forach method
myMovies.forEach((movie, i) => {
  //   console.log(movie);
});

// forof  loop
// for (let movie of myMovies  vies) {
	// if ( myMovie === 'Shrek') break;
	// console.log(myMovie);

//  most important useful ones are 
// .map()
// .reduce()
// .find() 
// .every()

// let myMovies = [ 'Spaceballs', 'The Sting', 'Alien' ];
// let moreMovies = ['Interstellar', ...myMovies, 'Contact'];

// let myMovies = [ 'Spaceballs', 'The Sting', 'Alien' ];
// let moviesCopy = [...myMovies];

// newMovies.length;

// length is the key
// the number it returns is the value

// array literal
const arr = [];

// object literal
const obj = {};

const vehicle = {
	color: "blue",
	hp: 4000,
	year: 1989
}

vehicle.hp;  // dot notation
vehicle["hp"];

// // uniquie keys

// const borough = {
// 	name: "Brooklyn",
// 	name: "The Bronx"
// }

// // console.log(borough); // { name: "The Bronx" }


// // Changing Object Properties and Values

// // const vehicle = {
// 	color: "blue",
// 	hp: 4000,
// 	year: 1989,
// 	"active registration": true
// }

vehicle.color = "red"; // changing an existing property value
vehicle.make = "Audi"; // adding a new key:value pair
delete vehicle["active registration"]; // removing an existing property

// console.log(vehicle); // {color: 'red', hp: 4000, year: 1989, make: 'Audi'}


 const vehicle = {
	color: "blue",
	hp: 4000,
	year: 1989,
	make: "Audi"
}

for (const key in vehicle) {
	console.log(vehicle[key]);
}