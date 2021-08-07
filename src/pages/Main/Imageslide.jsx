import React, { useEffect } from "react";
import { Carousel, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getMoviePlaying } from "../../store/actions/movie";
import { BASE_URL_MOVIE_IMG } from "../../store/actions/types";

const MovieCarousel = () => {
  const dispatch = useDispatch();
  const { playing, loading } = useSelector((state) => state.reducerMovieNurd);
  console.log("playing", playing);

  useEffect(() => {
    dispatch(getMoviePlaying());
  }, [dispatch]);
  return (
    <>
      <Carousel fade>
        {loading ? (
          <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          playing.data &&
          playing.data.map((item, index) => {
            return (
              <Carousel.Item>
                <a href={`/moviedetail/${item.id}`}>
                  <img
                    className="d-block w-100"
                    src={`${item.banner}`}
                    alt="First slide"
                  />
                </a>
                <Carousel.Caption>
                  <h3>{item.title}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })
        )}
      </Carousel>
    </>
  );
};

export default MovieCarousel;
