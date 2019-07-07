const form = document.querySelector('#homePage__search');
const input = document.querySelector('#homePage__search-input');

const pagination = document.getElementById('homePage__pagination');
const prevBtn = pagination.querySelector('[data-action = "prev"]');
const nextBtn = pagination.querySelector('[data-action = "next"]');
const pageValue = pagination.querySelector('.homePage__value');

let inputValue = '';

pageValue.textContent = pageNumber;
const errorMessage = document.createElement('p');
errorMessage.setAttribute('id', 'homePage__search-error-message');
errorMessage.textContent = 'Sorry, no movie matches your request';
errorMessage.hidden = true;

form.append(errorMessage);

form.addEventListener('submit', searchFilms);

pagination.addEventListener('click', plaginationNavigation);

function plaginationNavigation(evt) {
  const target = evt.target;

  if (pageNumber === 2) {
    prevBtn.classList.add('hidden');
  }

  if (target === prevBtn) {
    pageNumber -= 1;
    pageValue.textContent = pageNumber;
    fetchFilms(inputValue, pageNumber);
  }

  if (target === nextBtn) {
    pageNumber += 1;
    pageValue.textContent = pageNumber;
    prevBtn.classList.remove('hidden');
    fetchFilms(inputValue, pageNumber);
  }
}

function searchFilms(evt) {
  evt.preventDefault();
  inputValue = input.value;
  fetchFilms(inputValue);
}

function fetchFilms(inputValue, pageNumber) {
  if (inputValue === '') {
    fetchPopularMoviesList();
  }

  jsList.innerHTML = null;
  errorMessage.hidden = true;

  const api = '8498946f9c7874ef33ac19a931c494c9';
  fetch(
    'https://api.themoviedb.org/3/search/movie?api_key=' +
      api +
      '&language=en-US&page=' +
      pageNumber +
      '&query=' +
      inputValue,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  )
    .then(response => response.json())
    .then(data => {
      const arr = data.results;
      if (inputValue !== '' && arr.length === 0) {
        errorMessage.hidden = false;
        fetchPopularMoviesList();
      }
      arr.forEach(el => createCardFunc(el.backdrop_path, el.title, el.id));
    })
    .catch(error => console.log('ERROR' + error));

    input.value = '';
}
