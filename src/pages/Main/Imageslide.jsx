import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getMoviePlaying } from "../../store/actions/movie";

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
        {loading
          ? "loading..."
          : playing.data &&
            playing.data.map((item, index) => {
              return (
                <Carousel.Item>
                  <a href={`/movie-detail/${item.id}`}>
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
            })}
      </Carousel>
    </>
  );
};

export default MovieCarousel;
