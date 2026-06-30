const characterDiv = document.getElementById('character');

fetch('https://swapi-api.hbtn.io/api/people/5/?format=json')
  .then((response) => response.json())
  .then((data) => {
    const name = data.name;
    characterDiv.textContent = name;
  })
  .catch((error) => console.log(error));
