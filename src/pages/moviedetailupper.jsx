import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_KEY, BASE_YOUTUBE_EMBED } from "../store/actions/types";
import { Modal } from "react-bootstrap";
import Iframe from "react-iframe";
import { Tabs, Tab } from "react-bootstrap";
import StarRatings from "react-star-ratings";
import "./moviedetailuper.css";
import AllReview from "../components/AllReview";

const MovieDetailUpper = () => {
  const MovieImages = "https://image.tmdb.org/t/p/w500";
  const [movies, setMovies] = useState([]);
  const { id } = useParams();
  const getMovieDetail = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then((result) => setMovies(result.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getMovieDetail();
  }, []);
  console.log(movies);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="detail">
      <div
        className="Fullbgimage"
        style={{
          backgroundImage: `url("${MovieImages}${movies.backdrop_path}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="upper">
            <div className="poster">
              <img
                className="path"
                src={MovieImages + movies.poster_path}
                alt={movies.title}
              />
            </div>
            <div className="detailfilm">
              <h1 className="header">{movies.title}</h1>
              <StarRatings
                rating={movies.vote_average ? movies.vote_average / 2 : 0}
                starRatedColor="yellow"
                numberOfStars={5}
                starDimension="35px"
                starSpacing="10px"
              />
              <h5>Review {movies.vote_count}</h5>
              <p>{movies.overview}</p>
              <button calasName="trailer" type="button" onClick={handleShow}>
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

              <button className="watchlist">Add to Watch List</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="eventTabs">
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="Overview" title="Overview">
              <h2>Synopsis</h2>
              <div>
                <p>{movies.overview}</p>
              </div>
              <h2>Movie Info</h2>
              <div>
                <p>Release Date : {movies.release_date}</p>
                <p>Popularity : {movies.popularity}</p>
              </div>
            </Tab>
            <Tab eventKey="Characters" title="Characters">
              <p>Characters</p>
            </Tab>
            <Tab eventKey="Review" title="Review">
              {/* BAGIAN REVIEW */}
              <AllReview />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
export default MovieDetailUpper;
