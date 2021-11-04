import React, { useState } from "react";
import movies from "../movies";
import MovieCard from "./MovieCard";
import Category from "./Category";
function Cards() {
  return (
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8" style={{ margin: "20px" }}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            category={movie.category}
            likes={movie.likes}
            dislikes={movie.dislikes}
          />
        ))}
      </div>
      <div className="col-md-2"></div>
    </div>
  );
}

export default Cards;
