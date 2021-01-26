 
 import {combineReducers} from 'redux'
 import {movies} from './movies'
 import {movieDetails} from './movies'




 const rootReducer =  combineReducers ({
     moviesList : movies  ,
     movieDetails
    
 })

 export default rootReducer;