

export const movies = (state = null, action) => {

    switch (action.type) {
        case "MOVIES_LIST": {

            return action.payload

        }
       
        default:
            return state  // return new state 
    }

}

export const movieDetails = (state = null, action) => {

    switch (action.type) {
  
        case "MOVIE_DETAILS" :{

            return action.payload
        }
        default:
            return state  
    }

}

