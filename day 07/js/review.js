//primitive data stypes below///////



string = '';
boolean = true;
number = 1;


//if you dnt name the variable it sets it to var so do not use var /////////

//ex: var string = '';//////

//most example code will use var so if you see tuto9rials bewareeee dnt use varrr use const let/////



//below are declared with const let var////
const string = '';
let boolean = true;
var number = 1; //DO NOT USE VAR!!!!!!!!!


const array = [
    'string',
    true,
    1,
    {
        key: 'value'
    },
    [{ array: [1, 2, 3] }]
];
const object = {
    key: 'value'
};




/////////////////////// falsey and truthy


const falsey = [
    false,
    0,
    '',
    null,// null is falsey
    undefined,// undefiend
    NaN,// not a number
];

const user = {} // an empty object is truthy



////////////////////////////// date and math



const date = new Date();
console.log('get date', date.getDate());
console.log('get day', date.getDay());
console.log('get d', date.getDate());
console.log('get date', date.getDate());
console.log('get date', date.getDate());
console.log('get date', date.getDate());
console.log('get date', date.getDate());
console.log('get date', date.getDate());
console.log('get date', date.getDate());






const math = math;
console.log('random', math.random());
console.log('random', math.random());



////////////////////////////////////////// control flow

if (true) {
    console.log('run this code');
}

if (false) {
    console.log('dont run this code');
}

const age = 18;
const parentPermission = true;


else if (parentsPermission) {
    console.log('run this code');
}


else if (true) {
    console.log('run this code');
}


switch(age){
    case 18:
    console.log('do not run this code');
    break;

    case 19:
    console.log('run this code');
    break;

    case 20:
    console.log('run this code');
    break;
    
}



////////////////////////////////////////////////functions


function sayHello(){
    console.log('hello');
    return true;
}

const result = sayHello();
console.log('result', 'result');


///////////////////////////////////////////////////method


const user1 = {
    name: 'john',
    sayHello: function(hello) {
        console.log(text, this.name);
    }
}


//////////////////////////////////////////////////////////arrow function

const sayHello2 = (hello) => {
    console.log(hello);
}


function myFunction(callback){
    //callback is a function that is passed toa nother function
    callback();
}



myFunction(() => {console.log('this is an arrow function')});
myFunction(() => {console.log('this is another arrow function')});




//////////////////////////////////////////////////////////////////////////promises



const orderPizzaPromise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        reslove('pizza is ordered');
    }, 10000);
});

function deliverPizza (){
    return new Promise(() => {
        console.log('pizza is ready');
        setTimeout(() => {
            reslove('pizza is ready');
        }, 2000)
    });
}


orderPizzaPromise.then((result) => {
    console.log(result);
    return deliveryPizza();
}); then((result) => {
    console.log(result);
})

const baseUrl = 'ttps://api.thecatapi.com/v1/images/search';
const endPoint = '';
fetch(baseUrl + endPoint).then((response) => {
    console.log(response);
})