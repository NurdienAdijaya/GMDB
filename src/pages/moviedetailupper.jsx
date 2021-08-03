import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL_MOVIE, BASE_YOUTUBE_EMBED } from "../store/actions/types";
// import {useParams} from "react-router-dom"
import { Modal } from "react-bootstrap";
import Iframe from "react-iframe";



const MovieDetailUpper = () => {
  const [DetailMovies, setMovies] = useState([]);
  // const {id}=useParams()
  const getMovieDetail = async () => {
    await axios
      .get(BASE_URL_MOVIE)
      .then((result) => setMovies(result.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getMovieDetail();
  });
  console.log(DetailMovies);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <h1>this is detail upper movie</h1>
      <ul>
        {DetailMovies.map((movies, index) => {
          return (
            <div key={index}>
              <li>{movies.title}</li>

              {movies.rating}
              <li>Sysnopsis :{movies.synopsis}</li>
              <li>Release Date : {movies.releasedate}</li>
              <li>
                <button type="button" onClick={handleShow}>
                  Watch Trailer
                </button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Body>
                    <Iframe
                      width="100%"
                      height="315"
                      url={`${BASE_YOUTUBE_EMBED}${movies.trailer}`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    />
                  </Modal.Body>
                </Modal>
              </li>
            </div>
          );
        })}
      </ul>

      <button>Add to Watchlist</button>
    </div>
  );
};
export default MovieDetailUpper;
