let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);

function addItem(e) {
    e.preventDefault();

    let newItem = document.getElementById('item').value;

    let li = document.createElement('li');

    li.className = 'list-group-item';

    li.appendChild(document.createTextNode(newItem));

    let editBtn = document.createElement('button');

    editBtn.className = 'btn btn-primary btn-sm mx-2 float-right'

    editBtn.appendChild(document.createTextNode('edit'));

    li.appendChild(editBtn)

    let deleteBtn = document.createElement('button');

    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'

    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn)

    itemList.appendChild(li);
}

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            let li = e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}