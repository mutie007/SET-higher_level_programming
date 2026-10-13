async function fetchMovies () {
  const list = document.querySelector('#list_movies');
  try {
    const response = await fetch('https://swapi-api.alx-tools.com/api/films/?format=json');
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    const data = await response.json();
    data.results.forEach(function (movie) {
      const li = document.createElement('li');
      li.textContent = movie.title;
      list.appendChild(li);
    });
  } catch (error) {
    const li = document.createElement('li');
    li.textContent = 'Error';
    list.appendChild(li);
  }
}

fetchMovies();
