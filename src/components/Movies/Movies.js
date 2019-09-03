import React, {Component} from 'react'
import Axios from 'axios';



export default class Movies extends Component {
    state = {
        movies: []
    }
    componentDidMount(){
        this.getMovies()
    }
    getMovies = () => {
        Axios.get('/api/movies').then(res => {
            this.setState({
                movies: res.data
            })
        })
    }
    render(){
        console.log('this.props', this.props)
        let mappedMovies = this.state.movies.map(elm => {
            return(
                <div key={elm.movie_id} onClick={() => this.props.history.push(`/movie/${elm.movie_id}`)}>
                    <h1>{elm.movie_title}</h1>
                    <h5>{elm.movie_rated}</h5>
                    <p>{elm.movie_info}</p>
                </div>
            )
        })
        return(
            <div>
                {mappedMovies}
            </div>
        )
    }
}
