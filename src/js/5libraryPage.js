const cardLibrary = document.querySelector('.library__list');
const libraryButtonWatch = document.querySelector('.library__btn--watch');
const libraryButtonQueue = document.querySelector('.library__btn--queue');

libraryButtonWatch.addEventListener('click', drawWatchedFilmList);
libraryButtonQueue.addEventListener('click', drawQueueFilmList);
const local = JSON.parse(localStorage.getItem('filmsWatched'));
console.log(lo);



function drawWatchedFilmList(event) {
  if (event.target.nodeName != 'BUTTON') return;
  cardLibrary.innerHTML = '';
  
  local.forEach(el =>
    createLibraryCardFunc(el.poster_path, el.title, el.id, el.vote_average),
  );
  libraryButtonWatch.classList.add("library__btn--active")
  libraryButtonQueue.classList.remove('library__btn--active')
}

function drawQueueFilmList(event) {
  if (event.target.nodeName != 'BUTTON') return;
  cardLibrary.innerHTML = '';
  const local = JSON.parse(localStorage.getItem('filmsQueue'));
  local.forEach(el =>
    createLibraryCardFunc(el.poster_path, el.title, el.id, el.vote_average),
  );
  libraryButtonWatch.classList.remove("library__btn--active")
  libraryButtonQueue.classList.add('library__btn--active')
}

function createLibraryCardFunc(imgPath, filmTitle, movieId, voteAverage) {
  const liLibrary = `<li class ="library__list-item">
<img src="https://image.tmdb.org/t/p/w500${imgPath}" js-id="${movieId}" alt="poster film">
<p class="library__vote">${voteAverage}</p>
<p class="library__nameFilm">${filmTitle}</p>
</li>`;

  cardLibrary.innerHTML += liLibrary;

  // li.addEventListener('click', activeDetailsPage(movieId, bool));
}
