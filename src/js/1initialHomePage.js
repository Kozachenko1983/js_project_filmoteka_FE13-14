'use strict';


const jsList = document.querySelector('#js-list');
let renderFilms;
let pageNumber = 1;
let ganre;


window.onload = fetchPopularMoviesList();

let selectFilm = {};



function fetchPopularMoviesList() {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=8498946f9c7874ef33ac19a931c494c9&language=en-US&page=' + `${pageNumber}`)
        .then(response => {
            if (response.ok) return response.json();

            throw new Error(`Error while fetching: ${response.statusText}`);
        })
        .then(data => {
            

            let result = data.results;
            result.forEach(element => {
                createCardFunc(element.poster_path, element.title, element.id);

            });



        })
        .catch(error => console.log(error));
}


function createCardFunc(imgPath, filmTitle, movieId) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const p = document.createElement('p');
    img.setAttribute('src', `https://image.tmdb.org/t/p/w500` + `${imgPath}`);
    img.setAttribute('js-id', `${movieId}`);
    p.textContent = `${filmTitle}`;
    li.append(img);
    li.append(p);
    jsList.append(li);
    img.classList.add('homePage__img');
    li.classList.add('homePage__items');
    p.classList.add('homePage__text');
    
    
}