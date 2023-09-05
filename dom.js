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
let headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// headerTitle.innerHTML = '<h3>Hello</h3>';
headerTitle.style.border = "2px solid #000";



//GETELEMENTSBYCLASSNAME
let elemets = document.getElementsByClassName('list-group-item');
// console.log(elemets);
// console.log(elemets[1]);
// elemets[1].textContent = 'Hello2';
// elemets[1].style.backgroundColor = 'yellow';

let items = document.getElementsByClassName("title");
items[0].style.fontWeight = 'bold';
items[0].style.color = 'green';




