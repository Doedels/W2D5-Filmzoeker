
//let script = require('./script.js');
//let data = require('./data.js') die data zorgt voor problemen ??

// voorbeeld van een test
test('filterMovies roept displayMovies aan', () => {
    let input = [1,2,3].map( e => e * 2);
    let output = [2,4,6];

    expect(input).toEqual(output);
});


// script.displayMovies(movieArray)
// script.filterMovies(radioButtonId)