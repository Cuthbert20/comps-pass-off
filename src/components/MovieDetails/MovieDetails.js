import React, { Component } from 'react'
import axios from 'axios'

export default class MovieDetails extends Component {
    state= {
        movieInfo: {}
    }
    componentDidMount(){
        this.getMovieDetails()
    }
    getMovieDetails(){
        axios.get(`/api/movie/${this.props.match.params.movie_id}`)
        .then(res => {
            this.setState({
                bookInfo: res.data
            })
        })
    }
    render() {
        console.log(this.props.match)
        let { movie_title, movie_rated, movie_info } = this.state.movieInfo
        return (
            <div>
                <h2>{movie_title}</h2>
                <h5>{movie_rated}</h5>
                <p>{movie_info}</p>
            </div>
        )
    }
}
