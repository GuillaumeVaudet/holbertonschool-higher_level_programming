document.addEventListener('DOMContentLoaded', () => {
  const helloDiv = document.getElementById('hello');
  console.log(helloDiv);

  
  fetch('https://hellosalut.stefanbohacek.com/?lang=fr')
    .then((response) => response.json())
    .then((data) => {
      const hello = data.hello;
      helloDiv.textContent = hello;
      })
    .catch((error) => console.log(error));
})
