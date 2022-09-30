import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <React.Fragment>
      <h1>Movies Page</h1>

      {movies.map((movie) => (

        <React.Fragment key={movie.title}>
          <div>
            <h2> Name:{movie.title} </h2>
          </div>
          <div>
            <p> {movie.time}</p>
          </div>
          <>
            <p> Genres:</p>
            {movie.genres.map((genre) => (
              <ul key={genre}>
                <li>{genre}</li>
              </ul>
            ))}
          </>
        </React.Fragment>
      ))}

    </React.Fragment>
  )

}

export default Movies;