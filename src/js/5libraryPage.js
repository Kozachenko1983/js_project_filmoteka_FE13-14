const cardLibrary = document.querySelector('.library__list');
const libraryButtonWatch = document.querySelector('.library__btn--watch');
const libraryButtonQueue = document.querySelector('.library__btn--queue');

libraryButtonWatch.addEventListener('click', drawWatchedFilmList);
libraryButtonQueue.addEventListener('click', drawQueueFilmList);


function drawWatchedFilmList() {
  cardLibrary.innerHTML = '';
  const local = JSON.parse(localStorage.getItem('filmsWatched'));
 
  if (local == null || local.length === 0){
    cardLibrary.innerHTML = "<p class='text-warning'>You do not have watched movies. Add them.</p>"
  }
  local.forEach(el =>
    createLibraryCardFunc(el.backdrop_path, el.title, el.id, el.vote_average),

  );
  libraryButtonWatch.classList.add('library__btn--active');
  libraryButtonQueue.classList.remove('library__btn--active');
}

function drawQueueFilmList() {
  cardLibrary.innerHTML = '';
  const local = JSON.parse(localStorage.getItem('filmsQueue'));
  if (local == null || local.length === 0){
    cardLibrary.innerHTML = "<p class='text-warning'>You do not have to queue movies to watch. Add them.</p>"
  }
  local.forEach(el =>
    createLibraryCardFunc(el.backdrop_path, el.title, el.id, el.vote_average),
  );
  libraryButtonWatch.classList.remove('library__btn--active');
  libraryButtonQueue.classList.add('library__btn--active');
}

function createLibraryCardFunc(imgPath, filmTitle, movieId, voteAverage) {
  const liLibrary = `<li class ="library__list-item">
<img src="https://image.tmdb.org/t/p/w500${imgPath}" js-id="${movieId}" alt="poster film">
<p class="library__vote">${voteAverage}</p>
<p class="library__nameFilm">${filmTitle}</p>
</li>`;

  cardLibrary.innerHTML += liLibrary;

  // cardLibrary.addEventListener('click', activeDetailsPage(movieId, bool));
}
