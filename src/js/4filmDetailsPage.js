const btnWatched = document.querySelector('#btn--watched');
const btnQueue = document.querySelector('#btn--queue');



let selectFilm = {
  //   movieId: 429617,
  //   is: false,
  genres: [{
    name: 'wer'
  }, {
    name: 'wer'
  }, {
    name: 'wer' 
  }],
  id: 12312,
}

let ThisMovie = {
  watched: true,
  queue: true,
}

function showDetails(data) {
  const popularity = document.querySelector('#js-popularity');
  const OriginTitle = document.querySelector('#js-origin-title')
  const Vote = document.querySelector('#js-vote');
  const VoteCount = document.querySelector('#js-votes-count');
  const Gender = document.querySelector('#js-genre');
  const description = document.querySelector('#js-description');
  const FilmTitle = document.querySelector('#js-Film-title');
  const Poster = document.querySelector('#js-poster');
  let genderText = ' ';
  if (data.genres != null) {
    data.genres.forEach((el, i) => {
      genderText += el.name;
      if (i != data.genres.length - 1) {
        genderText += ', ';
      }
    });
    popularity.textContent = data.popularity;
    OriginTitle.textContent = data.original_title;
    Vote.textContent = data.vote_average;
    VoteCount.textContent = data.vote_count;
    FilmTitle.textContent = data.title;
    description.textContent = data.overview;
    Gender.textContent = genderText;
    Poster.setAttribute('src', `https://image.tmdb.org/t/p/w500${data.poster_path}`);
    monitorButtonStatusText();
  }
}

function monitorButtonStatusText() {
  console.log('sssssss');
  
  if (isVarInLocalstorage('filmsQueue', selectFilm.id)) {
    btnQueue.firstChild.setAttribute('src', './images/calendar-minus.png')
    btnQueue.lastChild.textContent = 'Remove from queue';
    ThisMovie.queue = true;
  } else {
    btnQueue.firstChild.setAttribute('src', './images/calendar-plus.png')
    btnQueue.lastChild.textContent = 'Add to queue';
    ThisMovie.queue = false;

  }
  if (isVarInLocalstorage('filmsWatched', selectFilm.id)) {
    btnWatched.firstChild.setAttribute('src', './images/delete-video.png')
    btnWatched.lastChild.textContent = 'Remove from watched';
    ThisMovie.watched = true;
  } else {
    btnWatched.firstChild.setAttribute('src', '/images/video.png')
    btnWatched.lastChild.textContent = 'Add to watched';
    ThisMovie.watched = false;

  }
}

function adtiveAddingBtn(key, test) {
  let arr = JSON.parse(localStorage.getItem(key));
  if (arr == null) {
    arr = []
  }
  if (!test) {
    arr.push(selectFilm);
    localStorage.setItem(key, JSON.stringify(arr));
  } else {
    arr = arr.filter((el) => el.id != selectFilm.id);
    localStorage.setItem(key, JSON.stringify(arr));
  }
  monitorButtonStatusText();
}
/*
function toggleToQueue() {
  let key = 'filmsQueue';
  let arr = queueFilms;
  if (!ThisMovie.queue) {
    console.log('ading   ', selectFilm.movieId);

    arr.unshift(selectFilm.movieId);
    console.log(arr);
    console.log('ading   ', selectFilm.movieId);

    localStorage.setItem(key, JSON.stringify(arr));
  } else {
    arr = arr.filter((el) => el != selectFilm.movieId);
    localStorage.setItem(key, JSON.stringify(arr));
  }
  monitorButtonStatusText();
}

function toggleToWatched() {
  let key = 'filmsWatched';
  if (!ThisMovie.watched) {
    arr.push(selectFilm.movieId);
    localStorage.setItem(key, JSON.stringify(arr));
  } else {
    arr = arr.filter((el) => el != selectFilm.movieId);
    localStorage.setItem(key, JSON.stringify(arr));
  }
  monitorButtonStatusText();
}

*/

function isVarInLocalstorage(key, id) {
  let Storage = JSON.parse(localStorage.getItem(key));
  //   console.log(Storage);

  if (Storage == null) {
    Storage = [];
    // console.log(12);
    return false;
  }
  return Storage.find(el => el.id == id) != undefined;

}

function IsUniqueByKeyInArrOfObjs(key, item) {
  let Storage = JSON.parse(localStorage.getItem(key));
  if (Storage == null) {
    Storage = [];
  }
  return Storage.find(el => el[id] == item) != undefined;

};
// btnQueue.addEventListener('click', toggleToQueue);
// btnWatched.addEventListener('click', toggleToWatched);
showDetails(selectFilm);
btnQueue.addEventListener('click', () => {
  adtiveAddingBtn('filmsQueue', ThisMovie.queue);
});

btnWatched.addEventListener('click', () => {
  adtiveAddingBtn('filmsWatched', ThisMovie.watched);
});