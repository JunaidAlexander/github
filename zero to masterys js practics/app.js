// part 1 fundamentale

// let js = 'amazing';
// if (js === 'amazing') alert('JavaScript is FUN!');

// console.log(40 + 8 + 23 - 10);

// console.log('Jonas');
// console.log(23);

// let firstName = 'Matilda';
// console.log(firstName);

// let jonas_matilda = 'JM';
// let name = 27;
// let PI = 3.1415;

// let myFirstJob = 'Programmer';
// let myCurrentJob = 'Teacher';

// const country = 'South Africa';
// let continent = 'Africa';
// let population = 59.3;

// data types

// javascriptIsFun = true;
// console.log( typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);

// let const var

// let age = 30;
// age = 31;

// const birthYear = 1991;
// birthYear = 1990;

// var job = 'programmer';
// job = 'teacher';

// lastName = 'Schmedtmann';
// console.log(lastName);

// basic operators

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console  .log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// math operators
// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// x--;
// console.log(x);

// comparison operators

// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);
// const isFullAge = ageSarah >= 18;
// console.log(now - 1991 > now - 2018);

// operator precedence

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// console.log(25 - 10- 5);

// let x , y;
// x = y = 25 - 10 - 5;
// x= y = 10;  x = 10
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah,averageAge);

// coding challenge 1

// let markMass = 78;
// let markHeight = 1.69;

// let johnMass = 92;
// let johnHeight = 1.95;

// let markBMI = markMass / markHeight **2;
// let johnBMI = johnMass / johnHeight **2;
// console.log(markBMI, johnBMI);

// let markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

// strings and template literals

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const now = 2037;

// const jonas =
//   "i am" + firstName +  ",a" + (birthYear - now) + "years old" + job + "!";
//   console.log(jonas);

//   const jonasNew = `i am ${firstName} year old ${birthYear - now}  ${job}`;
//   console.log(jonasNew);

//   console.log(`string
//   multiple
//   lines`);

// taking decisions if / else statements

// const age = 15;

// if (age >= 18) {
//   console.log("Sarah can start driving license");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2012;
// let century;
// if (birthYear <= 2000) {
// century = 20;
// } else {
//  century = 21;
// }
// console.log(century);

// type conversion and coercion

// type conversion
// type conversion is when we manually convert from one type to another

// conventing a number to a string
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear), +18);
// console.log(Number("Jonas"));
// console.log(typeof NaN);

// conventing  a string to a number
// console.log(String(23), 23);

// type coercion
// type coercion is when javascript automatically converts types behind the scenes for us

// console.log("i am " + 23 + " years old");

// console.log("i am " + "23" + " years old");
// console.log("23" - "10" - 3);
// console.log("23" / "2");

// let n = "1" + 1;
// "11"
// n = n - 1;
// console.log(n);

// 2 + 3 + 4 + "5";
// 95

// "10" - "4" - "3" - 2 + "5";
// 15

// truthy and falsy values

// 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));
// console.log(Boolean(NaN));

// const money = 0;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log("You should get a job!");
// }

// let height = 0;
// if(height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }

// equality operators: == vs ===

// const age = "18";
// if (age === 18) console.log("You just became an adult :D (strict)");

// perform a type coercion
// if (age == 18)
//  console.log("You just became an adult :D (loose)");

//  const favourite = Number(prompt("What's your favourite number?"));
//   console.log(typeof favourite);
//   console.log(favourite);

//   if(favourite === 23) {
//   console.log("Cool! 23 is an amazing number!");

// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else if (favourite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7 or 9");
// }

// different operator

// if (favourite !== 23)
// console.log("Why not 23?");

// Boolean logic: AND, OR and NOT

// age = 16;

// age >= 20; false
// age < 30; true

// let use operators

// !A= false : true
// A  false AND B :false
// A  false OR B true
// !A true AND B true

// logical operators

// const hasDriverslicense = true;
// const hasGoodVision = false;

// both are true so the output will be true
// console.log(hasDriverslicense && hasGoodVision);

// is true is enough to make output true
// console.log(hasDriverslicense || hasGoodVision);

// false is not operator
// console.log(!hasDriverslicense);

// if(hasDriverslicense && hasGoodVision) {
//   console.log(`Sarah is able to drive!`)
// } else {
//   console.log(`Someone else should drive...`)
// }

// const isTired = false
// console.log(hasDriverslicense && hasGoodVision && !isTired);

// challenge 3

// scoreDolphins = (96 + 108 + 89) / 3;
// console.log(scoreDolphins);

// scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy");
// } else if (scoreKoalas > scoreDolphins) {
//   console.log("Koalas win the trophy");
// } else if (scoreKoalas === scoreDolphins) {
//   console.log("Both win the trophy");
// }

// switch statements

// const day = "wednesday";

// switch(day) {
//   case "monday":
//     console.log("plan course structure")
//     console.log("go to codding meetup")
//     break;
//     case "tuesday":
//     console.log("work");
//     break;
//     case "wednesday":
//       case "wednesday":
//         console.log("work");
//         break;
//         case "Friday":
//           console.log("weekend ")
//           break;

//         default:
//           console.log("not a valid day")

// }

// const day = "wednesday"

// if (day === "monday") {
//   console.log("plan course structure && go to codding meetup")
// } else if (day === "tuesday") {
//   console.log("work");
// } else if (day === "wednesday" || "Thursday") {
//   console.log("work")
// } else if (day === "Friday") {
//   console.log(weekend)
// }

// statement and expressions

// expressions

// 3 + 4
// 1991
// true && false && !false

// statements
// if(23 > 10) {
//   const str = "23 is bigger";
// }

// The Conditional (Ternary) Operator

// const age = 23;
// age >= 18 ? console.log("I like to drink wine") : console.log("I like to drink water");

// (Ternary) Operator
// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

// if statement
// let drink2;
// if(age >= 18) {
//   drink2 = "wine";
// }
// else {
//   drink2 = "water";
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

// coding challenge 4

// const bill = 430;
// console.log(`The Bill is ${bill <= 300  && bill >= 50   ? bill * 0.15 : bill * 0.2}`);

// part 2 fundamentals

// strict mode

// "use strict";

// let hasDriverslicense = false;
// const passTest = true;

// if (passTest)
// hasDriverlicense = true;

// if (hasDriverslicense)
// console.log("I can drive");

// const interface = "Audio";

// const private = 534;

// functions

// function logger(){
//   console.log("My name is Jonas");
// }
// calling / running / invoking function
// logger();
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);

// const num = Number("23");

// function Declaration vs Expressions

// fuction declaration
// function calAge(birthYear) {
//   return 2037 - birthYear;
// }

// const age = calAge(1991);

// function expression
// anonymous function
// const calAge1 = function (birthYear) {
// return 2037 - birthYear;

// };

// const age1 = calAge1(1991);

// console.log(age, age1);

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// }
// const age3 = calAge2(1991);
// console.log(age3);

// Arrow functions

// const calAge3 = birthYear => 2037 - birthYear;
// const age3 = calAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991,  'Jonas'));
// console.log(yearsUntilRetirement(2000,'Bob'));

// functions calling other functions

// function cutfruitPieces(fruits) {
//   return fruits * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutfruitPieces(apples);
//   const orangePieces = cutfruitPieces(oranges);

//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

// Reviewing functions

// const calAge = function(birthYear) {
//   return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
// const age =  calAge(birthYear);
// const retirement = 65 - age;

// if(retirement > 0) {
//   return retirement;
//   console.log(`${firstName} retires in ${retirement} years`);
// } else {
//   return -1;
//   console.log(`${firstName} has already retired`);
// }

// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(2000, 'Sarah'));

// codding Challenge #1

// Dolphins scored 44,23 and 71
// Koalas scored 65,54 and 49

// Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

// Test the function with the data 44,23 and 71

// let calcAverage = (a, b, c) => {
//   return (a + b + c) / 3;
// };

// const dolphinsAverage = calcAverage(44, 23, 71);
// console.log(`Dolphins average: ${dolphinsAverage}`);

// const koalasAverage = calcAverage(65, 54, 49);
// console.log(`Koalas average: ${koalasAverage}`);

// Create a function checkWinner that takes the average score of each team as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
// function checkWinner(dolphinsAverage, koalasAverage) {
//   if (dolphinsAverage >= 2 * koalasAverage) {
//     console.log(`Dolphins win (${dolphinsAverage} vs ${koalasAverage})`);
//   } else if (koalasAverage >= 2 * dolphinsAverage) {
//     console.log(`Koalas win (${koalasAverage} vs ${dolphinsAverage})`);
//   } else {
//     console.log(`No one wins`);
//   }
// }

// checkWinner(dolphinsAverage, koalasAverage);


// Arrays

// const friends = ["Michael", "Steven", "Peter"]; 
// console.log(friends)


// const years  = new Array(1991, 1984, 2008, 2020);
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends[friends.length-1]);

// replace element in array
// friends[2] = "Jay";
// console.log(friends);


// cant not do that
// friends = ["Bob", "Alice"];

// array with different data types

// const firstName = "Jonas";
// const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
// console.log(jonas);
// console.log(jonas.length);  

// Exercise
//  const calAge = function(birthYeah) {
//   return 2037 - birthYeah;
//  }

//  const years = [1990, 1967, 2002, 2010, 2018];
// console.log(calAge(years));
// const age1 = calAge(years[0]);
// const age2 = calAge(years[1]);
// const age3 = calAge(years[years-1]);
// console.log(age1, age2, age3);
// const ages = [calAge(years[0]), calAge(years[1]), calAge(years[years.length - 1])];
// console.log(ages);

// array methods


// add elements
// push method 
//  const friends = ["Michael", "Steven", "Peter"];
//  const newlength = friends.push("Jay");
//  console.log(newlength);

//  unshift method
//  friends.unshift("John");
//   console.log(friends);

  // remove elements
  
  // popped method 
  // friends.pop(); 
  // const popped = friends.pop();
  // console.log(popped) 
  // console.log(friends);

  // shift method
  // friends.shift();
  // console.log(friends.indexOf("Steven"));
  // console.log(friends.indexOf("bob")
  //   )

    // console.log(friends.includes("Steven"));
    // console.log(friends.includes("bob"));

    // friends.push(23);
    // console.log(friends.includes(23));

    // if(friends.includes("Steven")) {
    //   console.log("You have a friend called Steven");
    // }

    // const calcTip = function(bill) {
    //   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    // }

    // const bills = [125, 555, 44];
    // const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
    // console.log(bills, tips); 
    // const totals = [bills[0] + tips[0]];
    // console.log(bills,tips,totals);


    // objects

// order doesnt matter in objects
    // const jonas = {
    //   firstName:'jonas',
    //   lastName: 'Schmedtman',
    //   age: 2037 - 1991,
    //   job: 'teacher',
    //   friends: ['Michael', 'Peter', 'Steven']

    // }

    // dot notation
    // console.log(jonas.lastName);

// bracket notation
// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// cant use dot notation to add new properties
// console.log(jonas.'last' + nameKey);


// const interested = prompt("what do u want to know about jonas? choose between firstName, lastName, age, job and friends")
// console.log(jonas[interested]);

// if(jonas[interested]) {
//   console.log(jonas[interested]);
// } else {  
//   console.log('wrong request! choose between firstName, lastName, age, job and friends');
// }

// add new properties using bracket notation
// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);

// excercise

// "Jonas has 3 friends, and his best friend is called Michael"

// jonas.bestFriend = 'Michael';

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.bestFriend}`);

