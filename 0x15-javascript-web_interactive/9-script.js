document.addEventListener('DOMContentLoaded', async function () {
  const helloDiv = document.querySelector('#hello');
  try {
    const response = await fetch('https://hellosalut.stefanbohacek.dev/?lang=fr');
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    const data = await response.json();
    helloDiv.textContent = data.hello;
  } catch (error) {
    helloDiv.textContent = 'Error';
  }
});
