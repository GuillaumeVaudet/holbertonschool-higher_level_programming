document.addEventListener('DOMContentLoaded', () => {
  const apiUrl = 'https://hellosalut.stefanbohacek.com/';
  let languageCodeSelector = document.getElementById('language_code');
  let translateBtn = document.getElementById('btn_translate');
  let helloDiv = document.getElementById('hello');

  translateBtn.addEventListener('click', async () => {
    let value = languageCodeSelector.value;

    let fullApiUrl = `${apiUrl}?lang=${value}`;

    try {
      const response = await fetch(fullApiUrl);
      const data = await response.json();
      helloDiv.textContent = data.hello;
    } catch (error) {
      console.log(error);
    }
  })
})
