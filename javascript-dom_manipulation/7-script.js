const titleList = document.getElementById('list_movies');

fetch('https://swapi-api.hbtn.io/api/films/?format=json')
  .then((response) => response.json())
  .then((data) => {
    let results = data.results;
    for (let i = 0; i < results.length; i++) {
      let newListItem = document.createElement('li');
      newListItem.textContent = results[i].title;
      titleList.appendChild(newListItem);
    }
    
  })
  .catch((error) => console.log(error));
