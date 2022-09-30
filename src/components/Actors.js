

import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <React.Fragment>
      <h1>Actors Page</h1>
      {actors.map((actor) => (
        <React.Fragment key={actor.name}>
          <div>
            <h2>Name: {actor.name}</h2>
            <p> Movies: </p>
            {actor.movies.map((movie) => (
              <ul key={movie}>
                <li>
                  {movie}
                </li>
              </ul>
            ))}
          </div>
        </React.Fragment>
      ))}
    </React.Fragment>
  )

}

export default Actors;