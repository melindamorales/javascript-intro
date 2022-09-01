console.log('classes')




function random() {
    let randomInt = Math.floor(Math.random() * 100);
    console.log(randomInt);
}

random();
random();
random();
random();
random();
random();
random();
random();



class person{
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.introductionWord = this.introductionWord;
    }
    greeting(){
        console.log(`${this.introductionWord}, my name is ${this.name} and i am ${this.age} years old`);
    }
}

const person = new person('john', 27, 'hello');
const person2 = new person('melinda', 25, 'hoii');
const person3 = new person('albert', 29, 'heyyy');
const person4 = new person('moon', 22, 'helloo');
const person5 = new person('jon', 23, 'hi');
const person6 = new person('johnny', 24, 'hellooo');



const element1 = document.querySelector('h1');
const element2 = document.querySelector('p');

console.dir(element1);
console.dir(element2);





console.log({
    name: 'john',
    age: 30,
    introductionWord: 'hello'
})

console.log(person);


class enemy{
    health = 100;
    strength = 10;
    weakness = 'fire';

    takeDamage(){
        this.health -= 50;
        console.log('take damage');
        this.checkDead()
          
    }

    checkDead(){
        this.health <= 0;
        console.log('this enemy is dead');
    } else{
        console.log('this enemy is still alive');
    }
}


const enemy = new Enemy{
    enemy.takeDamage();
    enemy.takeDamage();
}


class Boss extends Enemy{
    takeDamage(){
        this.health -= 10;
        console.log('take Damage');
        this.checkDead();
    }
}




const person = {
    name: 'melinda',
    age: 25,
    greeting: function() {
        console.log(`hello, my name is ${this.name} and i am ${this.age} years old`);
    }
}


