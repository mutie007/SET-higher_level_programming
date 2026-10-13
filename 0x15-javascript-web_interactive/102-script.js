document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#btn_translate').addEventListener('click', async function () {
    const lang = document.querySelector('#language_code').value;
    const helloDiv = document.querySelector('#hello');
    try {
      const response = await fetch('https://hellosalut.stefanbohacek.dev/?lang=' + lang);
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      const data = await response.json();
      helloDiv.textContent = data.hello;
    } catch (error) {
      helloDiv.textContent = 'Error';
    }
  });
});
