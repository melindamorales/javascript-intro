let score = 0;
score += 1;

setTimeout(function ()) {
    console.log('Hello');
    console.log(score);
}

console.log(score);



score += 1;

console.log(score);





//callback function
//a function that is passed to another function as an argument


//below is a pizza example of a callback ///////////////////////////////////////////////////

/*function orderPizza(){
    console.log('order pizza');
    setTimeout(function(){
        console.log('done ordering pizza')
        Callback1(callback2,callback3);
    }) 4000)
}

function makePizza(callback){
    console.log('making pizza');
    setTimeout(function(){
        console.log('done making pizza')
        callback2(callback3);
    })
}

function bakePizza(){
    console.log('baking pizza');
    setTimeout(function(){
        console.log('done baking pizza')
        callback3();
    })
}

function deliverPizza(){
    console.log('delivering pizza');
}


function deliverPizza(){
    console.log('delivering pizza');
}*/








//promises

//below isa  a example of a promise//////////////////////////////////////////////




const orderPizzapromise = new Promise(function(resolve, reject){
    console.log('order pizza')
    setTimeout(function(){
        resolve('done ordering pizza');
    })
});




orderPizzapromise.then(function(result){
    console.log(result){
        return makePizza();
    };
});

function orderPizza(){
    return new Promise(function(resolve, reject){
        console.log('ordering pizza');
        setTimeout(function(){
            resolve('done ordering pizza');
        })
    });
}

function makepizza(){
    return new Promise(function(resolve, reject){
        console.log('making pizza');
        setTimeout(function(){
            resolve('done making pizza');
        })
    });
}

function bakePizza(){
    return new Promise(function(resolve, reject){
        console.log('baking pizza');
        setTimeout(function(){
            resolve('done baking pizza');
        })
    });
}

function deliverPizza(){
    return new Promise(function(resolve, reject){
        console.log('delivering pizza');
        setTimeout(function(){
            resolve('done delivering pizza');
        })
    });
}

fetch().then(function(data){
    console.log(data);
    return data.json();
}).then(function(data){
    console.log(data);
})


