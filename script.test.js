// dit testdocument heeft geen toegang tot de DOM.
// er moet dus een DOM met relevante element gecreerd worden
// bovenaan het document.
document.body.innerHTML = '<div><button></button></div>';

let script = require('./script.js');

// voorbeeld van 2 simpele tests zonder externe afhankelijkheid
test('primitive types', () => {
    let input = 3 * 3;
    let output = 9;

    expect(input).toBe(output);
});

test('array en objects', () => {
    let input = [1,2,3].map( e => e * 2);
    let output = [2,4,6];

    expect(input).toEqual(output);
});

// en dan nu de serieuze tests.

test('GetUnique() returned een ontdubbelde Array met objecten', () => {
    data = [{Title: 'X-Man'}, {Title: 'Avangers'}, {Title: 'Prinsess'}, {Title: 'Avangers'}]
    let input = script.getUnique(data, 'Title');
    let output = [{Title: 'X-Man'}, {Title: 'Avangers'}, {Title: 'Prinsess'}];

    expect(input).toEqual(output);
});




// script.displayMovies(movieArray)
// script.filterMovies(radioButtonId)