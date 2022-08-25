function log(text){
   const div = document.createElement('pre');
   div.innerText = text;
   
   div.style.fontFamily = 'TimesNewRoman';
   div.style.paddingLeft = '10px';
   div.style.fontSize = '20px';
   div.style.fontWeight = 'bolder';
   div.style.boxShadow = '0 0 2px #000';
   div.style.padding = '10px';
   div.style.margin = '1px 10px';
   document.body.appendChild(div);




    if(typeof text === 'number'){
        div.style.color = 'blue';
    }

    if(typeof text === 'string'){
        div.style.color = 'red';
    }

    if(typeof text === 'boolean'){
        div.style.color = 'greeen';
    }

    if(typeof text === 'object'){
        div.style.color = 'purple';
        div.innerText = JSON.stringify(text, null, 10);
    }

    if(Array.isArray(text)){
        div.style.color = 'brown';
        div.innerText = JSON.stringify(text, null, 10);
    }

}

log(1);
log(2);
log(3);
log('text');
log(true);
log({
    name: 'john',
    age: 30,
});

log([0, '', false, null, undefined, naN]);
log(new Date());
log(Math.random());

