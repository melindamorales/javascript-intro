//storing data


//can save it in the browser (global storage)

//or in local storage




/* ex. how to save data LOCALLY 

localStorage.setItem('players', JSON.stringify([player1, player2]));
*/



////////////////////////////////////////////////////////////////////


//creating the elements in js

const h1 = document.createElement("h1");
const input = document.createElement("input");
const button = document.createElement("button");
const list = document.createElement("ul");


// after declaring the elements n creating them yu put them, on the document by using APPEND,document and body (document.body.append(""))

document.body.append(h1);
document.body.append(input);
document.body.append(button);
document.body.append(list);


//adding text to the button element & h1 using TEXTCONTENT

button.textContent = 'add';
h1.textContent = 'To Do List';



// creating a local storage

const items = JSON.parse(localStorage.getItem('items')) || [];
items.forEach(item => {
    console.log(item)
    addItem(item);
})



button.addEventListener('click', function(){
    const item ={value: input.value, checked: false}
    items.push(item);
    addItem(item);
});



function addItem(item) {
    localStorage.setItem('items', JSON.stringify(items));
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const label = document.createElement('label');
    label.innerText = item.value;
    if(item.checked) {
        checkbox.checked = true;
    }

 //saving the value of the input

 input.value = '';
 checkbox.type = 'checkbox';
 li.append(checkbox);
 li.append(label);

 list.append(li);

 checkbox.addEventListener('change', function () {
     item.checked = checkbox.checked;
     localStorage.setItem('items', JSON.stringify(items))
 });


}


