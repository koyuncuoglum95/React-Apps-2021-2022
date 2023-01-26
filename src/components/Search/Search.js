import React, { Component } from 'react';
import Movie from '../Movie/Movie';
import axios from 'axios';
import './Search.css';

class Search extends Component {
    state = ({
        movieData: [],
        input: ''
    })

    getMovie = this.getMovie.bind(this);


    async getMovie(e) {

        this.setState({
            input: e.target.value
        });

        console.log(this.state.input)


        try {

            const res = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=5717c0ac');
            this.setState({
                movieData: res.data
            })

            console.log(this.state.movieData);

        } catch (error) {
            console.error(error);
        }


    }

   
    render() {

        return (
            <div>
                <input type="text" placeholder="Search for a movie" onChange={this.getMovie} id="inputSearch"/>
                { (this.state.input === '') ? 
                <p id="error">Search for a movie !!!</p> : (
                    <Movie movieList={this.state.movieData}/>
                )}
            </div>
        )
    }
}

export default Search;