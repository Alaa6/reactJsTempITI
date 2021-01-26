
const movieList = [
    {
        id: 1,
        title: 'God Father 1',
        year: 1972
    },
    {
        id: 2,
        title: 'God Father 2',
        year: 1974
    },
    {
        id: 3,
        title: 'God Father 3',
        year: 1990
    }
]

export function getMovies () {
    return {
        type : 'MOVIES_LIST' ,
        payload : movieList
    }
}

export function getMovieByID ( id ) {




    return {
        type : 'MOVIE_DETAILS' ,
        payload : movieList.find ((movie)=> movie.id == id) ? movieList.find ((movie)=> movie.id == id) : null

    }
}