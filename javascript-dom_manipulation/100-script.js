document.addEventListener('DOMContentLoaded', () => {
  let myList = document.querySelector('.my_list');
  let addItemDiv = document.getElementById('add_item');
  let removeItemDiv = document.getElementById('remove_item');
  let clearListDiv = document.getElementById('clear_list');

  addItemDiv.addEventListener('click', () => {
    let newListItem = document.createElement('li');
    newListItem.textContent = 'Item';
    myList.appendChild(newListItem);
  })

  removeItemDiv.addEventListener('click', () => {
    let lastItem = myList.lastElementChild;
    if (lastItem) {
      myList.removeChild(lastItem);
    }
  })

  clearListDiv.addEventListener('click', () => {
    myList.innerHTML = '';
  })
})
