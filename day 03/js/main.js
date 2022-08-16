function add(a, b) {
    console.log(a + b);
    return a + b;
}

function lotsOfWork(x) {
    console.log(x < 1);
    console.log(x > 1);
    console.log(x <= 1);
    console.log(x >= 1);
    console.log(x == 1);
    console.log(x != 1);
    return x;
}

//usage of functions
//manipulation of variables
//input output

//reason to use functions
//modularity / reuseability
//abstraction
//clarity
//use later / repeate later

add(1, 2); //prints 3
add(5, 2); //prints 7
lotsOfWork(10);
lotsOfWork(20);

let myAnswer = lotsOfWork(10);
myAnswer = localStorage(20);

//methods
//methods are functions that are attached to objects

//string methods
let firstName = "john";
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
console.log(firstName.length());
console.log(firstName.indexOf("n"));
console.log(firstName.endsWith("?"));
console.log(firstName.includes("n"));
console.log(firstName.replace("J", "j"));
console.log(firstname.slice(0, -1));
console.log(firstName.substring(0, -1));
console.log(firstName.split(""));
console.log(firstName.trim());
console.log(firstName.split().trim());

//array methods

// these are popup methods

let alertAnswer = alert("you have a virus"); // statement
//reason to use
//alert / to tell the user something
// does not return anything. we just wanna tell the user something

let confirmAnswer = confirm(
    "you have unsaved work are you sure you want to exit without saving?"
); //ok or cancel
//reason to use
//asl the user for input
//return a boolean

let promptAnswer = prompt("what is your name?"); //input
//reason to use
//ask the user for the input
//returns a string

console.log(alertAnswer, confirmAnswer, promptAnswer);


//these 4 below are cool to use when making generators
Math.floor(9.9);
Math.ceil(9.1);
Math.round(9.5);
Math.random(); //random number between 0 and 1

Math.pow(2, 3);
Math.sqrt(9);
Math.abs(-9);
Math.max(1, 2, 3, 4);
Math.min(1, 2, 3, 4);

const students = [
    'student1',//0
    'student2',//1
    'student3',//2
    'student4',//3
    'student5',//4
    'student6',//5
    'student7',//6
    'student8',//7
    'student9',//8
    'student10'//9
];



const randomDecimal = math.random();
const decimalMultipliedbyStudentslength = randomDecimal * students.length;
const floored = math.floor(decimalMultipliedbyStudentslength);
console.log(students[floored]);



//date object

const date = new Date();

console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth()); // 0 - 11
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.getTime());
console.log(date.getTimezoneOffset());



const date2 = new Date ('8/14/2022');
console.log(date2.getDay());

const days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Friday', 'Saturday'];

const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

date.setMonth(date.getMonth() - 2000);
console.log(date);