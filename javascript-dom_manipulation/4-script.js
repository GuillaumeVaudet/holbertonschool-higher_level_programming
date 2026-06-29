const addItemDiv = document.getElementById('add_item');
const myList = document.querySelector('.my_list');


addItemDiv.addEventListener('click', () => {
    let newListElement = document.createElement('li');
    newListElement.textContent = 'Item';
    myList.appendChild(newListElement);
})