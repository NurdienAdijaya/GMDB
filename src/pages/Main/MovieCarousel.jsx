import React, { useEffect } from "react";
import { Carousel, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getMovieBanner } from "../../store/actions/movie";

const MovieCarousel = () => {
  const dispatch = useDispatch();
  const { playing, loading } = useSelector((state) => state.reducerMovieBanner);
  console.log(playing);
  useEffect(() => {
    dispatch(getMovieBanner());
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
                    src={
                      item.banner ? (
                        `${item.banner}`
                      ) : (
                        <Spinner animation="grow" variant="danger" />
                      )
                    }
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
