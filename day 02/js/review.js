console.log(name)
test = 1;
console.log(test);
test = 2;
console.log(test);





const test = 1;
let test2 = 2;
var test3 = 3;

test2 = 4;
console.log(test2);


constantVariable = {
    declare: true,
    redeclare: false,
    assign: true,
    reassign: false,
}
const myconst = true;
//myConst = false;
//const myConst = false;



letVariable = {
    declare: true,
    redeclare: false,
    assign: true,
    reassign: true,
}
let myLet = true;
myLet = false;
//let myLet = false;


varVariable = {
    declare: true,
    redeclare: true,
    assign: true,
    reassign: true,
}
var mayVar = true;
myVar = false;
var myVar = false;




whatIsThis = true

//operators
//arithmetic Operators
// + - * / %

console.log('Operators')
console.log(1 + 1);
console.log(10 - 1);
console.log(10 * 2);
console.log(10 / 2);
console.log(7 % 2);


//assignment Operators

// = += -= /= %=
console.log('assignment Operators')
let x = 10;
console.log(x); //10
console.log(2 + x); //12
console.log(x); //10
x += 2; //12
x += 2; //14
console.log(x); //14
x /= 2;

console.log(x);






//Comparison Operators
// == != === !== > < >= <=
// always return boolean


console.log(20 == '20'); //true
console.log(20 != 20); //false
console.log(20 === 20); //true
console.log(20 !=== 20); //false
console.log(20 === '20'); //false