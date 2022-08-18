//control flow////////////////////////////////////////////////////////////////////////////////////////////







if (true) {
    console.log('true');
}
else if(false){
    console.log('backup test1');
}

//falsey//////////////////////////////////////////////////////////

// things in js that have no value are considered falsey
//o is falsey
//empty '' string is falsey
//false is falsey
//null us falsey
//undefined is falsey
//NaN is falsey
//^^ these things will trigger a if else not to run






//truthy////////////////////////////////////////////////////////////

//everything else thats not listed as falsey is truthy
//all other entries are truthy
//all other values


//all strings other than empty are consiudered truthy//////////////////////////////////////////////////



else if(false){
    console.log('backup test2');
}
else if(false){
    console.log('backup test3');
}
else {
    console.log('else');
}


const date = new Date();
const h1 = document.querySelector('h1');

if(date.getHours() > 20){
    h1.textContent = 'Too late!';
    document.body.style.color = 'red';
    document.body.style.backgroundColor = 'black';
}
else if(date.getHours() > 18){
    h1.textContent = 'good evening!';
    document.body.style.color = 'white';
    document.body.style.backgroundColor = 'blue';
}
else if(date.getHours() > 12){
    h1.textContent = 'good afternoon!';
    document.body.style.color = 'brown';
    document.body.style.backgroundColor = 'orange';
}
else if(date.getHours() > 12){
    h1.textContent = 'good morning!';
    document.body.style.color = 'yellow';
    document.body.style.backgroundColor = 'green';
}

const age = prompt('what is your age?');

if (age >= 18){
    alert('you are old enough to use this site');
}
else if(age > 12 && confirm)('you are old enough to use this site?');

else{
    alert('sorry you are too young to use this site!!');
}







///DEBUGGING////////////////////////////////////////////////////////////////////////////////////////////////

