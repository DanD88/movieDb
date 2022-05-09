import React from "react";

function MovieCard({ movie }) {
    return (

        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title + ' poster'}
                />
                </div>
                <div className="card-back">
                    <h1 className="card-title">{movie.title}</h1>
                    <ul>
                        <li className="release">
                            <p>RELEASE DATE: {movie.release_date}</p>
                        </li>
                        <li className="rating">
                            <p>RATING: {movie.vote_average}</p>
                        </li>
                        <li className="overview">
                            <p>{movie.overview}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        // <div className="card">
        //     <div className="card-inner">
        //         <div className="card-front">
        //             <img className="card--image" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title + ' poster'}
        //             />
        //         </div>
        //         <div className="card-back">
        //             <h3 className="card--title">{movie.title}</h3>
        //             <p className="release"><small>RELEASE DATE: {movie.release_date}</small></p>
        //             <p className="rating"><small>RATING: {movie.vote_average}</small></p>
        //             <p className="card--desc">{movie.overview}</p>
        //         </div>
        //     </div>
        // </div>

    )
}

export default MovieCard;