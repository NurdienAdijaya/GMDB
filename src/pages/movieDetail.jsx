import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import Iframe from "react-iframe";
import { Tabs, Tab } from "react-bootstrap";
import StarRatings from "react-star-ratings";
import "./moviedetailuper.css";
import AllReview from "../components/AllReview";
import {useDispatch, useSelector} from "react-redux"
import {getMovieBackend} from "../store/actions/movieBackend"


const MovieDetail = () => {
  const dispatch = useDispatch();
  const {backend, loading} = useSelector((state) => state.movie.detailMovie);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getMovieBackend(id));
  }, [dispatch, id]);

  const token = localStorage.getItem("Token");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    {loading ? "loading..." : backend.data && backend.data ? 
    <div className="detail">
      <div
        className="Fullbgimage"
        style={{
          backgroundImage: `url("${backend.banner}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="upper">
            <div className="poster">
              <img
                className="path"
                src={backend.thumbnail}
                alt={backend.title}
              />
            </div>
            <div className="detailfilm">
              <h1 className="header">{backend.title}</h1>
              <StarRatings
                rating={backend.rating}
                starRatedColor="yellow"
                numberOfStars={5}
                starDimension="35px"
                starSpacing="10px"
              />
              <h5>Release Date : {backend.releasedate}</h5>
              <p>{backend.overview}</p>
              <button className="trailer" type="button" onClick={handleShow}>
                Watch Trailer
              </button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                  <Iframe
                    width="100%"
                    height="315"
                    url={`${backend.trailer}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  />
                </Modal.Body>
              </Modal>
              {token ?  (<button className="watchlist">Add to Watch List</button>) : null }
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
                <p>{backend.synopsis}</p>
              </div>
              <h2>Movie Info</h2>
              <div>
                <p>Release Date : {backend.releasedate}</p>
                <p>Director : {backend.director}</p>
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
    </div> : null
    }
    </>
  );
};
export default MovieDetail;
