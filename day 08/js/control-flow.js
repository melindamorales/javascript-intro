/// truthy
//falseyyy
// if (condition){}


//things that are falsey///
0;
false;
'';
null;
undefined;
NaN;


// if (condition) {}

if (false) {
    console.log('condition is true');
}

if (true) {
    console.log('condition is true');
}

if (0) {
    console.log('condition is true');
}

if (27 > 0) {
    console.log('condition is true');
}


const firstName = prompt();
if (firstName) {
    console.log('you entered a name');
} else {
    console.log('you did not enter a name');
}
else{
    console.log('default condition');
}


if (27 > 0) {
    console.log('condition 1');


}




const answer = 'basic';

switch (answer) {
    case 'a':
        console.log('answer is a');
    case 'b':
        console.log('answer is b');
        break;
    case 'c':
        console.log('answer is c');
    default:
        console.log('answer is not a, b, c');
}



const firstNumber = parseInt(prompt('enter a number'));
const secondNumber = parseInt(prompt('enter another number'));
console.log(firstNumber + secondNumber);

