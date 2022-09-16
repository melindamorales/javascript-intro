// core javascript concepts

// 20/80 club rule

// knowing these 20% of things youll be able to do 80 % of most things

// 1. variables
// nicknames for data




// 2. data types
//strings. numbers. booleans. arrays. objects
//2.a everything is an OBJECT
// 2.b elements are OBJECTS



// (strings and arrays are objects)
// methods for strings and arrays

// array methods that are super useful--
// .push()
// .pop()
// .shift()
// .upshift()
// .splice()
// .slice()
// .filter()
// .map()
// .sort()
// .reverse()
// .every()




//3. functions( anything we do it should be in a function)
// reusable code
// readability
//3.a scope ( where variables are available at)



//4. elements 
// a creating elements
// b. select elements
// c. modify elemenmts
// d. modify elements


// 5. events
// a. listen
// b. trigger functions


//6/ loops
// a. for
// b. while
// c. for each (array)


// 7. conditionals
// a. if
// b. else
// c. else if
// d. switch
// e. tenary


// 8. classes
// a. constructor
// b. methods
// c. properties

// 9. fetch
// a. get
// b. post








// mini connect 4 project--

// 2 players
// take turns
//  dropping a piece
// into a column (6x7)
// check for win




// here is our 7 arays for the rows
const column1 = [];
const column2 = [];
const column3 = [];
const column4 = [];
const column5 = [];
const column6 = [];
const column7 = [];


const player1 = 'red';
const player2 = 'black';


let turn = player1;

// create a elememt in a function

function createColumnRowElement(column, i) {
    const columnRow = document.createElement('div');
    column.appendChild(columnRow);
    columnRow.classList.add('column-row');
    columnRow.innerText = i;
    columnRow.classList.add('row-' + i);


    if (column.classList.contains('column-1')){
        column1.push(columnRow);
    }


    if (column.classList.contains('column-2')){
        column2.push(columnRow);
    }


    if (column.classList.contains('column-3')){
        column3.push(columnRow);
    }


    if (column.classList.contains('column-4')){
        column4.push(columnRow);
    }


    if (column.classList.contains('column-5')){
        column5.push(columnRow);
    }


    if (column.classList.contains('column-6')){
        column6.push(columnRow);
    }


    if (column.classList.contains('column-7')){
        column7.push(columnRow);
    }











    if (i === 0) {
        console.log("i", i);
        columnRow.addEventListener('click', function () {

            if (!column.querySelector('.row-5').classList.contains('full')) {
                createPiece(turn, column.querySelector('.row-5'));
            } else if (!column.querySelector('.row-4').classList.add('full')) {
                createPiece(turn, column.querySelector('.row-4'));
            } else if (!column.querySelector('.row-3').classList.contains('full')) {
                createPiece(turn, column.querySelector('.row-3'));
            } else if (!column.querySelector('.row-2').classList.contains.('full')) {
                createPiece(turn, column.querySelector('.row-2'));
            } else if (1 column.querySelector('row-0').classList.contains('full')){
            create.piece(turn, column.querySelector('row-0'));
        } else {
            alert('column is full');
        }

        if (turn === player1) {
            turn = player2;
        } else {
            turn = player1;
        }
    })
}
}

function createColumnRowElement() {
    const column = document.createElement('div');
    document.body.appendChild(column);
    column.classList.add('column');
    for (let i = 0; i < 6; i++) {
        createColumnRowElement(column, i);
    }
}



for (let i = 0; i < 7; i++) {
    createColumnRowElement();
}


function createPiece(color, columnRow) {
    const piece = document.createElement('div');
    columnRow.appendChild(piece);
    piece.classList.add('piece');
    piece.classList.add(color);
    columnRow.classList.add('full');
    columnRow.classList.add(color);

    checkForWin();
}

function checkForWin() {
 checkVerticalForBothPlayers(column1);
 checkVerticalForBothPlayers(column2);
 checkVerticalForBothPlayers(column3);
 checkVerticalForBothPlayers(column4);
 checkVerticalForBothPlayers(column5);
 checkVerticalForBothPlayers(column6);
 checkVerticalForBothPlayers(column7);

}

function checkForWinVertical(columnArray, index, player){
    if(columnArray.slice(index,index+4).every(el => el.classList.contains(player))){
        alert(player + 'wins');
    }
}

function checkVerticalForBothPlayers(column){
    checkForWinVertical(column, 0, player1);
    checkForWinVertical(column, 1, player1);
    checkForWinVertical(column, 2, player1);
    checkForWinVertical(column, 0, player2);
    checkForWinVertical(column, 1, player2);
    checkForWinVertical(column, 2, player2);
}


const zipCodePattern= /a/;

const string = 'a';

const result = zipCodePattern.test(string);

console.log(result);