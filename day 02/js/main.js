//document.querySelector('h1').innerHTML = 'hello world';



firstname = 'john';
score = 100;
isPresent = true;

user1 ={
    firstname: 'john',
    score: 100,
    isPresent: true
}

user2 ={
    firstname: 'joe',
    score: 90,
    isPresent: false
}

users = [user1, user2 ];

numbers = [0, 1 ,2, 3, 4, 5, 6,];
tens = [10, 20, 30, 40, 50, 60];
hundreds = [100, 200, 300, 400, 500, 600];


selectedUser = 0;
selectedItem = 'score';



console.log(users);
console.log(users[1])// access by bracket notation
console.log(users[0].firstname);// access by dot notation
console.log(users[1].score);
console.log(users[1]['score']);
console.log(users[0]['firstname']);// access by both by bracket notation








//strings

let string1 = 'hello';
let string2 = "world";
let string3 = `

${string1}

${string2}     ${10 * 10 + 1}

`;
console.log(string3);

let number1 = 0;
let number2 = 1.27;
let number3 = -1.27;

console.log(200207 * 100_000_000 > Infinity);

console.log(7 * {name: 'joe'});








//symbol


console.log('hello' === 'hello');

let mySymbol = Symbol('mySymbol');
let mySymbol2 = Symbol('mySymbol');

console.log(mySymbol === mySymbol2);






//type of

console.log(typeof'');

console.log(typeof 1);

console.log(typeof true);

console.log(typeof mySymbol);

console.log(typeof myBigInt);






// create an element and append it to the body

const h1 = document.createElement('h1');

//change the text content of the h1 element

h1.innerHTML = user1.firstName;

//append the h1 element to the body

document.body.append(h1);
document.body.append(ul);
ul.append(li);

// remove the h1 element from the body

h1.remove();

// retreive elements from the document

const p = document.querySelector('p')


// interact with the elements from the document 

p.classList.add('red');
p.style.color = 'red';