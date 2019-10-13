// dit testdocument heeft geen toegang tot de DOM.
// er moet dus een DOM met relevante element gecreerd worden
// bovenaan het document.
document.body.innerHTML = '<div id="posters"><button></button></div>';

let script = require('./script.js');

// voorbeeld van 2 simpele tests zonder externe afhankelijkheid
test('primitive types', () => {
    let input = 3 * 3;
    let output = 9;

    expect(input).toBe(output);
});

test('array en objects', () => {
    let input = [1, 2, 3].map(e => e * 2);
    let output = [2, 4, 6];

    expect(input).toEqual(output);
});

// en dan nu de serieuze tests.
movies = [
    {
        "Title": "X-Man",
        "Year": "2017",
        "imdbID": "X-Man"
    },
    {
        "Title": "Avangers",
        "Year": "2014",
        "imdbID": "Avangers"
    },
    {
        "Title": "Prinsess",
        "Year": "2013",
        "imdbID": "Prinsess"
    },
    {
        "Title": "Batman",
        "Year": "1999",
        "imdbID": "Batman"
    }
]

let dubbel = movies.push({
    "Title": "Avangers",
    "Year": "2014",
    "imdbID": "Avangers"
})

test('GetUnique() returned een ontdubbelde Array met objecten', () => {
    let input = script.getUnique(dubbel, 'Title');
    let output = movies;

    expect(input).toEqual(output);
});

test('filterMovies moet een subArray met alleen bepaalde titels teruggeven', () => {
    //const script.displayMovies = jest.fn();
    let input = script.filterMovies(movies, 'Nieuwste');
    let output = movies.slice(0, 2);

    expect(input).toEqual(output);
});

test('filterMovies moet een subArray met alleen bepaalde titels teruggeven', () => {
    //const script.displayMovies = jest.fn();
    let input = script.filterMovies(movies, 'X-Man');
    let output = movies.slice(0, 1);

    expect(input).toEqual(output);
});

test('filterMovies moet een subArray met alleen bepaalde titels teruggeven', () => {
    //const script.displayMovies = jest.fn();
    let input = script.filterMovies(movies, 'Avangers');
    let output = movies.slice(1, 2);

    expect(input).toEqual(output);
});

test('filterMovies moet een subArray met alleen bepaalde titels teruggeven', () => {
    //const script.displayMovies = jest.fn();
    let input = script.filterMovies(movies, 'Prinsess');
    let output = movies.slice(2, 3);

    expect(input).toEqual(output);
});

test('filterMovies moet een subArray met alleen bepaalde titels teruggeven', () => {
    //const script.displayMovies = jest.fn();
    let input = script.filterMovies(movies, 'Batman');
    let output = movies.slice(3, 4);

    expect(input).toEqual(output);
});

test('getMovieString moet een <a><img></a> string teruggeven', () => {
    //const script.displayMovies = jest.fn();
    let input = script.getMovieString(movies);

    expect(input).toMatch(/<a href="https:/);
    expect(input).toMatch(/www.imdb.com/);
    expect(input).toMatch(/" target="_blank"><img src="/);
    expect(input).toMatch(/X-Man/);
    expect(input).toMatch(/Avangers/);
    expect(input).toMatch(/Prinsess/);
    expect(input).toMatch(/Batman/);
});