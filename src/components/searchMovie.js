import React, {useState} from "react";

import MovieCard from './movieCard'

function SearchMovie() {

// states input query, movies
const [query, setQuery] = useState('');
const [movies, setMovies] = useState([]);

const searchMovies = async (e) => {
        e.preventDefault();
        console.log("submitting");
        
        
        
        const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&&page=1&include_adult=false`;
        
        try {
            const res = await fetch(url);
            const data  = await res.json();
            
            setMovies(data.results);
        }catch(err){
            console.error(err);
        }
    }

        return (
            <>
                <form className="form" onSubmit={searchMovies}>
                    <label className="label" htmlFor="query">Movie Name:</label>
                    <input className="input" type="text" name="query" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for a movie" />
                    <button className="button" type="submit">Search</button>
                </form>

                <div className="card-list">
                    {movies.filter(movie => movie.poster_path).map(movie => (
                        <MovieCard movie={movie} key={movie.id} />

                    )
                        
                    )}
                </div>
            </>
        )
    }

export default SearchMovie;