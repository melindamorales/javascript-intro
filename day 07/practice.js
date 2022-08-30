const h1 = document.createElement('h1');
h1.innerText = 'albert is da best';
document.body.appendChild(h1);
h1.addEventListener('click', () => {
    h1.style.color = 'pink';
    document.body.style.color = 'white';
    document.body.style.backgroundColor = 'blue';
})

const h2 = document.createElement('h2');
h2.innerText = 'albert meows';
document.body.appendChild(h2);
h1.addEventListener('click', () => {
    h2.style.color = 'purple';
})


h2.removeEventListener('click',);

