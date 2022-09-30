import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <React.Fragment>
      <h1>Directors Page</h1>
      {directors.map((director) => (
        <React.Fragment key={director.name}>
          <div>
            <h2> Name:{director.name}</h2>
          </div>
          <>
            <p> Movies:</p>
            {director.movies.map((movie) => (
              <ul key={movie}>
                <li>
                  {movie}
                </li>
              </ul>
            ))}
          </>
        </React.Fragment>
      ))}
    </React.Fragment>
  )
}



export default Directors;