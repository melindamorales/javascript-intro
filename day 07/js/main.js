const h1 = document.querySelector('h1');
console.log('h1', h1);



h1.style.color = 'red';

h1.innerHTML = '<span>goodbye</span>';


h1.addEventListener('click', () => {
    h1.style.color = 'green'; /////when click it turns the text green
});

h1.addEventListener('mouseenter', () => {
    h1.style.color = 'red';
});

h1.addEventListener('mouseleave', () => {
    h1.style.center = 'red';
});



h1s.forEach(h1 => {
    h1.addEventListener('click', () => {
        h1.style.color = 'green';
    });

    h1.addEventListener('mouseleave', () => {
        h1.style.color = 'red';
        console.log('hover')
    });
    h1.innerHTML = 'Goodbye'
});




///////////for loop////////////////////////////
for(let i = 0; i < 10; i++) {
    console.log(i);
}



//////////////while loop//////////////////////
console.log('********')
let x = 0;
while (x < 10) {
    console.log(x);
    x++;
}







for(let i = 0; i < 10; i++){
    const h1 = document.createElement('h1');
    h1.innerHTML = 'hello world';
    document.body.appendChild(h1);
    h1.addEventListener('click', () => {
        h1.style.color = 'red';
    });
}

fetch('').then ((response) => {
    return response.json();
}).then((data) => {
    data.results.forEach((pokemon) => {
        const h1 = document.createElement('h1');
        h1.innerText = pokemon.name;
        document.body.appendChild(h1);
    });
})