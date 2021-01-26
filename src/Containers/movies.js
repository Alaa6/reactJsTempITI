
import { Component } from 'react';
import DB from '../db.json';

import * as actions from '../actions';
import { connect } from 'react-redux';

// import Provider from 'redux'



import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Button } from 'react-bootstrap';


class Movies extends Component {

    constructor() {
        super()

        this.state = {

            showMovies: false , 
            ID : '', 
            movie : {}


        }
    }




    componentDidMount() {

        console.log(this.props.getMovies(), "props");

      

    }

    componentDidUpdate() {
        const {ID} = this.state
        const {movieList} =this.props

      this.props.getMovieByID( this.state.ID  )

        

     
    }


    renderMovies = ({ movieList }) => {



        return (
            <div>
                {movieList ? (
                    <div>
                        {
                            movieList.map((movie) => {
                                return (

                                    <div>
                                        <h4 >  {movie.title}  </h4>
                                        <p> {movie.year}</p>

                                    </div>

                                )

                            })
                        }
                    </div>
                ) : (
                        <div>
                            No Movies Available
                        </div>
                    )

                }
            </div>
        )
    }

  



    render() {

        const {movie , ID} = this.state 
        const {movieDetails} = this.props
        let value ;

        return (
            <div className="d-flex flex-column align-items-center ">

                <Button onClick={() => this.setState({ showMovies: true })}> Get Movies </Button>

                {this.state.showMovies ? this.renderMovies(this.props) : (
                    <div> No movies Available </div>
                )}

                {
                    <div>
                        <input type="number"  value ={value} onChange ={(e)=> value = e.target.value}></input>
                        <Button onClick= { ()=>this.setState({ ID : value})} > Get Movie Details</Button>
                    </div>
                }
                {  movieDetails && (
                    <div>
                         <h3>{movieDetails.title}</h3>
                         <p>{movieDetails.year}</p>

                    </div>
                )
                }


            </div>


        );

    }

}

const mapReduxStateToComponentProps = (state) => {
    console.log(state, 'statessss ');

    return {
        movieList: state.moviesList  ,
        movieDetails : state.movieDetails
    }

}

export default connect(mapReduxStateToComponentProps, actions)(Movies);
