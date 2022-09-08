// talking about sending info to a server 

// http protocols :

// - get = means we wanna get stuff from the server
// - put = means we wanna replace stuff on the server
// - patch = means we wanna put something on the server
// - post
// - delete = means we wanna delete stuff on the server















 

 const cards = ['mouse'];


 cards.forEach( function (card){
     const character = document.createElement('div');
     character.classList.add('card', cards);
     document.body.append(card);

 })