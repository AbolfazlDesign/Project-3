// let PageBanner = document.getElementById('page-banner');

// // console.log(PageBanner);

// let title = document.getElementsByClassName('title');

// // console.log(title[1]);

// let lis = document.getElementsByTagName('div');

// // for (let element of lis) {
// //      console.log(element);
// // }
// // console.log(lis[0]);
// let qSelector = document.querySelector('#page-banner');

// qSelector = document.querySelectorAll('.title');

// qSelector = document.querySelectorAll('li');

// console.log(qSelector);
//-------------------------------------------------------------------------------------------------------------
// let result;

// const list = document.querySelector('ul');
// const li = document.querySelector('li');

// // result = list.children[1].children[0].textContent; // Accessing the text content of the second list item
// result = list.children[1].children[0].innerHTML; // Accessing the inner HTML of the second list item

// result = list.firstElementChild; // Accessing the first child of the list
// result = list.lastElementChild; // Accessing the last child of the list
// result = list.childElementCount; // Counting the number of child elements in the list

// result = li.parentElement.parentElement; // Accessing the parent element of the first list item

// console.log(result);
//-------------------------------------------------------------------------------------------------------------
// const heading = document.createElement('h2');

// // heading.className = "mahdi";
// // heading.id = "kazemi";
// // heading.setAttribute('mehdi', 'kazemi');
// // heading.className += 'Kir';

// // heading.innerHTML = `
// // <ul>
// // <li>Aboli</li>
// // <li>FullBombs</li>
// // </ul>
// // `;

// // heading.appendChild(document.createTextNode('Hello World'));

// const ul = document.createElement('ul');
// const li1 = document.createElement('li');
// const li2 = document.createElement('li');

// li1.appendChild(document.createTextNode('Aboli'));
// li2.appendChild(document.createTextNode('FullBombs'));

// ul.appendChild(li1);
// ul.appendChild(li2);

// console.log(ul);
//--------------------------------------------------------------------------------------------------------------
// const NewHeading = document.createElement('h1');

// NewHeading.className = 'title';
// NewHeading.innerHTML = 'لیست کتاب ها';

// const OldHeading = document.querySelectorAll('.title')[1];

// const ParentHeading = document.querySelector('#book-list');

// ParentHeading.replaceChild(NewHeading , OldHeading);

// console.log(OldHeading);
//--------------------------------------------------------------------------------------------------------------
// const li = document.querySelectorAll('li')[2];
// const ul = document.querySelector('ul');

// // li.remove(); // Remove the third list item
// ul.children[2].remove(); // Remove the third list item using children property

// console.log(li);
//------------------------------------------------------------------------------------------------------------------
//  const link = document.querySelector('.button');

//  console.log(link);
//-------------------------------------------------------------------------------------------------------------------
// document.querySelector('.button').addEventListener('click', function(e) {
//     console.log("Hello World");
//     e.preventDefault();

//     let result;
//     result = e; // Accessing the event object
//     result = e.target; // Accessing the target element of the event
//     result = e.type;
    
//     console.log(result);
// });
//-----------------------------------------------------------------------------------------------------------------
// document.querySelector('.button').addEventListener('click', function(e) {
//     console.log("Clicked!");
//     e.preventDefault();
// });

// document.querySelector('.button').addEventListener('dblclick', function(e) {
//     console.log("Double Clicked!");
//     e.preventDefault();
// });

// document.querySelector('.button').addEventListener('mousedown', function(e) {
//     console.log("Mouse Down!");
//     e.preventDefault();
// });

// document.querySelector('.button').addEventListener('mouseup', function(e) {
//     console.log("Mouse Up!");
//     e.preventDefault();
// });

// document.querySelector('.button').addEventListener('mouseenter', function(e) {
//     console.log("Mouse In!");
//     e.preventDefault();
// });

// document.querySelector('.button').addEventListener('mouseout', function(e) {
//     console.log("Mouse Out!");
//     e.preventDefault();
// });

// document.querySelector('.button').addEventListener('mousemove', function(e) {
//     console.log("Mouse Move!");
//     e.preventDefault();
// });

// const heading = document.querySelectorAll('.title')[1];

// document.body.addEventListener('mousemove', function(e) {
//     // console.log(`MouseX = ${e.offsetX}, MouseY = ${e.offsetY}`);
//     heading.innerHTML = `MouseX = ${e.offsetX}, MouseY = ${e.offsetY}`;
//     e.preventDefault();
// });
//--------------------------------------------------------------------------------------------------
// const inputText = document.querySelector('#add-book input');
// const link = document.querySelector('.button');

// inputText.value = '';

// link.addEventListener('click', function(e) {
//     console.log(inputText.value);
//     inputText.value = '';
//     e.preventDefault();
// });

// // inputText.addEventListener('keydown', function(e) {
// //     console.log(inputText.value);
// // });

// // inputText.addEventListener('keyup', function(e) {
// //     console.log(inputText.value);
// // });

// // inputText.addEventListener('focus', function(e) {
// //     console.log("Selected!");
// // });

// // inputText.addEventListener('blur', function(e) {
// //     console.log("Unselected!");
// // });

// const checkBox = document.querySelector('#hide input');
// const heading  = document.querySelectorAll('.title')[1];
// const ul = document.querySelector('ul');
// console.log(checkBox);

// // checkBox.checked = true;
// // checkBox.checked = false;

// checkBox.addEventListener('click', function(e){
//     if(checkBox.checked)
//     {
//         heading.style.display = 'none';
//         ul.style.display = 'none';
//     }
//     else
//     {
//         heading.style.display = 'block';
//         ul.style.display = 'initial';
//     }
// });
//---------------------------------------------------------------------------------------------------------------------------
// const link = document.querySelector('.button');
// const inputText = document.querySelector('#add-book input');
// const ul = document.querySelector('ul');

// const spanDelete = '<span class="delete">حذف</span>';

// link.addEventListener('click' , function(e){

//     const li = document.createElement('li');
//     const spanName = document.createElement('span');

//     spanName.className = 'name';
//     spanName.textContent = inputText.value;

//     li.appendChild(spanName);
//     li.innerHTML += spanDelete;

//     ul.appendChild(li);

//     inputText.value = '';
//     e.preventDefault();
// });

// // localStorage.setItem('Key1' , 'Value1');
// // localStorage.setItem('Key2' , 'Value2');
// // localStorage.setItem('Key3' , 'Value3');
// // const name = localStorage.getItem('Key');
// // console.log(name);

// // localStorage.removeItem('Key2');

// const arr = ['Abol1' , 'Abol2']
// const Obj = {name : "Abolfazl" , age: 18};

// localStorage.setItem('Array' , arr);
// localStorage.setItem('Object', /*Obj*/ JSON.stringify(Obj));

// const MyArray = localStorage.getItem('Array').split(',');
// const MyObject = JSON.parse(localStorage.getItem('Object'));

// console.log(MyObject);
//--------------------------------------------------------------------------------------------------------------------------------
const link = document.querySelector('.button');
const inputText = document.querySelector('#add-book input');
const ul = document.querySelector('ul');
const checkBox = document.querySelector('#hide input');
const inputSearch = document.querySelector('#search-books input');

const spanDelete = `<span class="delete">حذف</span>`;

link.addEventListener('click' , function(e){

    const spanName = document.createElement('span');
    spanName.className = 'name';
    spanName.textContent = inputText.value;

    const li = document.createElement('li');

    li.appendChild(spanName);
    li.innerHTML += spanDelete;

    ul.appendChild(li);

    storeToLocalStorage(inputText.value);

    inputText.value = '';
    e.preventDefault();
});

ul.addEventListener('click' , function(e){
    if(e.target.className === 'delete')
    {
        e.target.parentElement.remove();
        removeFromLocalStorage(e.target.parentElement.children[0].textContent);
    }
});

checkBox.addEventListener('change' , function(e){
    if(checkBox.checked == true)
        ul.style.display = 'none';
    else
        ul.style.display = 'block';
});

inputSearch.addEventListener('keyup' , function(e){
    for(let book of ul.children)
    {
        if(book.firstElementChild.textContent.indexOf(inputSearch.value) !== -1)
        {
            book.style.display = 'block';
        }
        else
        {
            book.style.display = 'none';
        }
    }
});

document.addEventListener('DOMContentLoaded' , function(e){
    let tasks;
    if(localStorage.getItem('tasks') === null)
    {
        tasks = [];
    }
    else
    {
        tasks = localStorage.getItem('tasks').split(',');
    }
    for(let item of tasks)
    {
        const spanName = document.createElement('span');
        spanName.className = 'name';
        spanName.textContent = item;

        const li = document.createElement('li');

        li.appendChild(spanName);
        li.innerHTML += spanDelete;

        ul.appendChild(li);
    }
});

function storeToLocalStorage(task)
{
    let tasks;
    if(localStorage.getItem('tasks') === null)
    {
        tasks = [];
    }
    else
    {
        tasks = localStorage.getItem('tasks').split(',');
    }

    tasks.push(task);

    localStorage.setItem('tasks' , tasks);
}

function removeFromLocalStorage(task)
{
    let tasks;
    if(localStorage.getItem('tasks') === null)
    {
        tasks = [];
    }
    else
    {
        tasks = localStorage.getItem('tasks').split(',');
    }

    for(let i = 0; i <tasks.length;i++)
    {
        if(tasks[i] === task)
        {
            tasks.splice(i , 1);
        }
    }

    if(tasks.length === 0)
    {
        localStorage.clear();
    }
    else
    {
        localStorage.setItem('tasks' , tasks);
    }
}