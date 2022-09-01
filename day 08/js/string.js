const letters = [ 'a', 'b', 'c', 'd', 'e', 'f'];

const abcs = 'abcdef';

const index = 0;

console.log(letters[index]);
console.log(abcs[index]);



for(let i = 0; i < 26; i++){
    console.log(letters[i]);
    console.log(abcs[i]);
}


const object = {
    sayHello: function(){}
}
 console.log(object.sayHello());

 letters.pop();
 console.log(letters)

 abcs = abcs.replace('z', '');
 console.log(abcs);
