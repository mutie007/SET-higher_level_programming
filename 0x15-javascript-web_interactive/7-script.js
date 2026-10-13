async function fetchCharacter () {
  const characterDiv = document.querySelector('#character');
  try {
    const response = await fetch('https://swapi-api.alx-tools.com/api/people/5/?format=json');
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    const data = await response.json();
    characterDiv.textContent = data.name;
  } catch (error) {
    characterDiv.textContent = 'Error';
  }
}

fetchCharacter();
