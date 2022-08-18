//variables///////////////////////////////////////////////////////////////////////////////////////////

const firstname = 'Melinda'
let score = 0;

//var / let / const

// let= you can change 
//const you cannot change once its there you cannot change it



const backticks = `backticks`;

//DATA TYPES//////////////////////////////////////////////////////////////////////////////////////////

const strings = 'single' || "double" || `${backticks}`;
const numbers = 1 || 2.7 || -3.2;
const booleans = true || false //booleans are just true or false answers


//COMPLEX DATA TYPES///////////////////////////////////////////////////////////////////////////////////

const arrays = [1, 2, 3];//making lists



const carMakes = [
    'chevy',
    'dodge',
    'jeep',
    'mazda',
    'audi',
    'suburu'
];
// ^ this is a array



const object1 = {
    name: 'ponyoo',
    age: 25,
    species: 'fish',
    media:[]
};
// ^ object


const objects = {
    firstname: 'Frodo',
    lastname: 'Baggings',
    birthday: '01/01/01',
    gender: 'Male',
    species: 'Hobbit',
    media: [
        'The lord of the rings'
    ]
};
// ^object

console.log(
    Number('27'), 
    strings(9),
    Boolean('hello world'),
    Array(21),
    Object('test')
    );


    
//math uh helper thingies/////////////////////////////////////////////////////////////////////

console.log(Math.max(1, 2, 3, 4, 5));
console.log(max.min(100,2,3,4,5));
console.log(Math.round(2.1));
console.log(Math.ceil(2.1));
console.log(Math.floor(2.9));
console.log(Math.pow(10,2));
console.log(Math.sqrt(100));
console.log(Math.PI);
console.log(Math.E);
console.log(Math.abs(-100));
console.log(Math.sign(-100));

const date = new Date(); //current date
const date2 = new Date(`1/01/2000`); //specific date
const date3 = new Date(200, 0, 1); //specific date
const date4 = new Date(`1/01/2000`)//specific date
console.log(date2,date3,date4);

console.log(date2);


