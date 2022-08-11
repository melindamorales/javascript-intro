document.querySelector('h1').innerHTML = 'hello world';



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

