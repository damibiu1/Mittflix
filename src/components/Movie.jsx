import React, {Component} from 'react';

class Movie extends Component {

    state = {
        liked: true
    }

    handleClick = (e, id) => {
        this.setState({id: id, liked: !this.state.liked})
        this.props.movies.forEach((mov)=>{
            if(mov.id===id){
                mov.liked = true;
            }
        })
    }

    render() {

    console.log(this.props.movies)
        return (
            <div className="title">
                <h1 style={{ textAlign: "left" }}>Movies</h1>
                <div className="titles-wrapper">
                    {this.props.movies.map(movie => <div className="movie" key={movie.id}>
                        <img
                            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : "/image-not-available.jpg"}
                            alt="Movie poster"
                        />
                        <div className="overlay">
                            <div className="title">{movie.original_title}</div>
                            <div className="rating">{movie.vote_average}/10</div>
                            <div className="plot">{movie.overview}
                            </div>
                            <div data-toggled={movie.liked} className="listToggle" onClick={(e)=>this.handleClick(e, movie.id)}>
                                <div>
                                    <i className="far fa-heart"></i><i className="fas fa-heart"></i>
                                </div>
                            </div>
                        </div>
                    </div>)}

                </div>
            </div>
        )
    }
}

export default Movie;
