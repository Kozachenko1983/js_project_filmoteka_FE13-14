
const homePageBtn = document.querySelector('#homePage-js');
const myLibraryPageBtn = document.querySelector('#myLibraryPage-js');
const detailsPageShown = document.querySelector('#detailsPage_show');
const myLibraryPageShown = document.querySelector('#myLibraryPage_show');
const homePageShown = document.querySelector('#homePage_show');


window.onload = showHomePage();

myLibraryPageBtn.addEventListener('click', showLibraryPage);
homePageBtn.addEventListener('click', showHomePage);

function showHomePage() {
    myLibraryPageShown.style.display = 'none';
    detailsPageShown.style.display = 'none';
    homePageShown.style.display = 'block';
    homePageBtn.classList.add('nav-bar__link-hover');
    myLibraryPageBtn.classList.remove('nav-bar__link-hover');
}
function showLibraryPage() {
    homePageShown.style.display = 'none';
    detailsPageShown.style.display = 'none';
    myLibraryPageShown.style.display = 'block';
    myLibraryPageBtn.classList.add('nav-bar__link-hover');
    homePageBtn.classList.remove('nav-bar__link-hover');
}

function activeDetailsPage() {
    homePageShown.style.display = 'block';
    detailsPageShown.style.display = 'none';
    myLibraryPageShown.style.display = 'none';
    let ApiLink = `https://api.themoviedb.org/3/movie/${selectFilm.id}?api_key=8498946f9c7874ef33ac19a931c494c9`;
    fetch(ApiLink)
        .then(Response => Response.json())
        .then(data => {
           selectFilm = data;
           
        })
        .catch(error => console.log(error));
}