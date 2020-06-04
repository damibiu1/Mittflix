import React from 'react';

const Movie = (props) => {
    
    return (
        <div className="title">
            <h1 style={{ textAlign: "left" }}>Movies</h1>
            <div className="titles-wrapper">
                {props.movies.map(movie => <div className="movie" key={movie.id}>
                    <img
                        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : "/image-not-available.jpg"}
                        alt="Movie poster"
                    />
                    <div className="overlay">
                        <div className="title">{movie.original_title}</div>
                        <div className="rating">{movie.vote_average}/10</div>
                        <div className="plot">{movie.overview}
                        </div>
                        <div data-toggled="true" className="listToggle">
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

export default Movie;
