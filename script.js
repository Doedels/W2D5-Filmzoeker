
// verwijder dubbele titels (Avengers: Endgame). functie gevonden op:
// https://reactgo.com/removeduplicateobjects/
const getUnique = function (array, compare) {
    const unique = array.map(e => e[compare])
        // store the keys of the unique objects
        .map((e, i, final) => final.indexOf(e) === i && i)
        // eliminate the dead keys & store unique objects
        .filter(e => array[e]).map(e => array[e]);
    return unique;
}
// Aanroepen getUniue() met de array 'data', compare het 'Title' property in de objecten
let movies = getUnique(data, 'Title');

const filterMovies = function (radioButtonId) {
    switch (radioButtonId) {
        case 'Nieuwste': displayMovies(movies.filter(e => e.Year >= 2014));
            break
        default: displayMovies(movies.filter(e => e.Title.includes(radioButtonId)));
    }
}
let radioButtons = document.querySelectorAll('input')

radioButtons.forEach((item) => {
    item.addEventListener('click', (event) => {
        filterMovies(event.target.id);
    });
});

document.querySelector('button').onclick = (event) => {
    displayMovies(movies);
    radioButtons.forEach( (item) => {
        item.checked = false;
    });
}

const displayMovies = function (movieArray) {
    document.querySelector('#posters').innerHTML = movieArray.reduce((acc, item) => {
        return acc + `<a href="https://www.imdb.com/title/${item.imdbID}/" target="_blank"><img src="${item.Poster}" alt="film poster ${item.Title}"></a>`
    }, "");
}

document.addEventListener('DOMContentLoaded', function (event) {
    displayMovies(movies);
})

module.exports = {
    displayMovies: displayMovies,
    filterMovies: filterMovies,
    getUnique: getUnique
}
