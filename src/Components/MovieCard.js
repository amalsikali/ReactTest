import React, { useState } from "react";
import movies from "../movies";
import "../App.css";
import { ProgressBar } from "react-bootstrap";
function MovieCard(props) {
  const [isLiked, setLiked] = useState(false);
  const [isDisLiked, setDisLiked] = useState(false);
  const [likes, setLikes] = useState(props.likes);
  const [dislikes, setDislikes] = useState(props.dislikes);

  const LiketoggleClass = () => {
    setLiked(!isLiked);

    if (!isLiked) {
      setLikes(likes + 1);
    } else {
      setLikes(likes + -1);
    }
  };
  const DisLiketoggleClass = () => {
    setDisLiked(!isDisLiked);
    if (!isDisLiked) {
      setDislikes(dislikes + 1);
    } else {
      setDislikes(dislikes + -1);
    }
  };
  const [listOfMovies, setListOfMovies] = useState(movies);
  const DeleteMovie = () => {
    listOfMovies.splice(
      listOfMovies.findIndex(function (o) {
        return o.id === props.id;
      }),
      1
    );
    let test = listOfMovies;
    console.log(listOfMovies);
  };

  const [Rate, setRate] = useState(
    (props.likes * 100) / (props.likes + props.dislikes)
  );
  return (
    <div class="card" style={{ width: "18rem", margin: "3px" }}>
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{props.category}</h6>
        <br />
        <div>
          <ProgressBar now={Rate} />
        </div>
        <br />
        <div></div>
        <div className="felxdispaly">
          <div className="like/dislike">
            <button
              disabled={isDisLiked}
              class="reactionButton"
              className={isLiked ? "isliked" : null}
              onClick={LiketoggleClass}
            >
              <i class="far fa-thumbs-up" style={{ color: "#4ca3dd" }}></i>
              {likes}
            </button>
            <button
              disabled={isLiked}
              id="dislikeButton"
              class="reactionButton"
              className={isDisLiked ? "Disisliked" : null}
              onClick={DisLiketoggleClass}
              style={{ color: "#F70031" }}
            >
              <i class="far fa-thumbs-down"></i>
              {dislikes}
            </button>
          </div>
          <div className="trash" onClick={DeleteMovie()}>
            <button class="btn btn-danger">
              <i class="far fa-trash-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
