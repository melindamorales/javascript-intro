const primitives = {
    Number: 0,
    string: '',
    boolean: true,
    undefined: undefined,//not sure, empty
}
//these are the answers


const others = {
    symbol: symbol(),
    BigInt: BigInt(0),
}
//for the computer


const compound {
    arrary:[],
    object: {},
   // null: null //decided, empty. purposely set to null
}
//way to organize them




const option1 = 'Ryu';
const option2 = 'ken';

let selectedCharacter = null;

function selectedCharacter(character){
    selectedCharacter = character;
}
function unselectedCharacter(){
    selectedCharacter = null;
}




//scope
//redeclaration


//var selectedStage = null;
//selectedTeammate = null;

//Do not use var unless you have a good reason to do so



//operators
let x = 1;



//Arithmetic
// + - * / %
console.log(x + 1);
console.log(x - 1);
console.log(x * 10);
console.log(x / 2);
console.log(x); //s is not change
console.log(x % 1);


//comparison
// < > <= >= == !=
console.log(x < 1);
console.log(x > 1);
console.log(x <= 1);
console.log(x >= 1);
console.log(x == 1);
console.log(x != 1);




//logical
// && || !
// && means and
// || means or
// ! means not
console.log(x < 1 && x > 1 && x != 6);//false //combinding the two 
console.log(x < 1 || x > 1 || x != 5);//true
console.log(!(x != 5)) //true




//Conditiona; Operators
//if else
//switch case
//ternary operator







//Asignment Operators
// = += -= *= /= %=
console.log(x += 1); //changed to 1
console.log(x -= 1); //changed to 1
console.log(x *= 10); // changed to 10
console.log(x /= 2); //changed to 2
console.log(x); // x has changed




// a function is 


// a method is a function