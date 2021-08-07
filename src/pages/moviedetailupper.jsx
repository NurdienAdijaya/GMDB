import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { BASE_YOUTUBE_EMBED } from "../store/actions/types";
import { Modal } from "react-bootstrap";
import Iframe from "react-iframe";
import { Tabs, Tab } from "react-bootstrap";
import StarRatings from "react-star-ratings";
import "./moviedetailuper.css";
import AllReview from "../components/AllReview";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetail } from "../store/actions/movieDetail";

const MovieDetailUpper = () => {
  const dispatch = useDispatch();
  const { detail, loading } = useSelector((state) => state.movie.detailMovie);
  const MovieImages = "https://image.tmdb.org/t/p/w500";
  const { id } = useParams();
  useEffect(() => {
    dispatch(getMovieDetail(id));
  }, [dispatch, id]);

  const token = localStorage.getItem("Token");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {loading ? (
        "loading..."
      ) : detail.data && detail.data ? (
        <div className="detail">
          <div
            className="Fullbgimage"
            style={{
              backgroundImage: `url("${detail.data.banner}")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="container">
              <div className="upper">
                <div className="poster">
                  <img
                    className="path"
                    src={MovieImages + detail.poster_path}
                    alt={detail.title}
                  />
                </div>
                <div className="detailfilm">
                  <h1 className="header">{detail.title}</h1>
                  <StarRatings
                    rating={detail.vote_average ? detail.vote_average / 2 : 0}
                    starRatedColor="yellow"
                    numberOfStars={5}
                    starDimension="35px"
                    starSpacing="10px"
                  />
                  <h5>Review {detail.vote_count}</h5>
                  <p>{detail.overview}</p>
                  <button
                    className="trailer"
                    type="button"
                    onClick={handleShow}
                  >
                    Watch Trailer
                  </button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Body>
                      <Iframe
                        className="content-youtube"
                        width="100%"
                        height="315"
                        url={`${BASE_YOUTUBE_EMBED}${detail.trailer}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      />
                    </Modal.Body>
                  </Modal>
                  {token ? (
                    <button className="watchlist">Add to Watch List</button>
                  ) : null}
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
                    <p>{detail.overview}</p>
                  </div>
                  <h2>Movie Info</h2>
                  <div>
                    <p>Release Date : {detail.release_date}</p>
                    <p>Popularity : {detail.popularity}</p>
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
      ) : null}
    </>
  );
};
export default MovieDetailUpper;
