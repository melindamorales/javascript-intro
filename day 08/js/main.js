//import * as dataTypes from './data-types';
//import { primitiveTypes } from "./data-types";
//import * as strings from './string';


//import * as classes from './classes';



class pokemon {
    constructor(name);
    this.name = name;
    this.createPokemon();




    fetch('https://pokeapi.co/api/v2/pokemon/ditto').then(Response => {
    return Response.json();
    }).then(data => {
    console.log(data);
    const img = document.createElement('img');
    img.src = data.sprites.font_default;
    document.body.appendChild(img);
    this.height = data.height;

    img.addEventListener('click', () => {
        alert(this.height);



    });
}



const ditto = new Pokemon("ditto");