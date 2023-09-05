// console.dir(document);
// console.log(document.domain);
// console.log(document.title);
// //document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

//GETELEMENTBYID

// console.log(document.getElementById('header-title'));
// let headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// headerTitle.innerHTML = '<h3>Hello</h3>';
// headerTitle.style.border = "2px solid #000";



//GETELEMENTSBYCLASSNAME
// let elemets = document.getElementsByClassName('list-group-item');
// console.log(elemets);
// console.log(elemets[1]);
// elemets[1].textContent = 'Hello2';
// elemets[1].style.backgroundColor = 'yellow';
// elemets[4].style.backgroundColor = 'yellow';



// let items = document.getElementsByClassName("title");
// items[0].style.fontWeight = 'bold';
// items[0].style.color = 'green';


//GETELEMENTSBYTAGNAME

// let li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'hello2';
// li[2].style.backgroundColor = '#008000';
// li[4].style.backgroundColor = '#008000';
// li[2].style.fontWeight = 'bold';
// for (let i = 0; i < li.length; i++) {
//     li[i].style.fontWeight = 'bold';
// }

//QUERYSELECTOR

// let header = document.querySelector('#main-header');
// header.style.borderBottom = '4px solid black'

// let input = document.querySelector('input');
// input.value = 'Hello World';

// let submit = document.querySelector('input[type="submit"]');
// submit.value = 'Send';

// let item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

let secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green';

let thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.display = 'none';


//QUERYSELECTOR ALL
let titles = document.querySelectorAll('.title');
console.log(titles)

let listItems = document.querySelectorAll('.list-group li');
listItems[1].style.color = 'green';

let odd = document.querySelectorAll('li:nth-child(odd)');
for (let i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = 'green';
}