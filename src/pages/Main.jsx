import React, { useEffect } from "react";
import Nextbutton from "./Main/Nextbutton";
import ButtonCategory from "./Main/ButtonCategory";
import MovieCarousel from "./Main/MovieCarousel";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../store/actions/movie";
import { Container } from "react-bootstrap";
import MovieCard from "./Main/MovieCard";

const Main = () => {
  const dispatch = useDispatch();
  const { movie, loading } = useSelector(
    (state) => state.reducerMovie.listMovie
  );
  console.log(movie);

  const { result, loading: loadingSearch } = useSelector(
    (state) => state.reducerMovie.searchResult
  );

  const offset = 0;
  useEffect(() => {
    dispatch(getMovie(offset));
  }, [dispatch]);
  return (
    <>
      <MovieCarousel />
      <ButtonCategory />
      <Container className=" d-flex flex-wrap justify-content-evenly">
        {loading ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            {loadingSearch ? (
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : result.data && result.data.length ? (
              result?.data?.map((item, index) => {
                return (
                  <div key={index}>
                    <MovieCard data={item} index={index} />
                  </div>
                );
              })
            ) : (
              movie?.data?.map((item, index) => {
                return (
                  <div key={index}>
                    <MovieCard data={item} index={index} />
                  </div>
                );
              })
            )}
            <Nextbutton />
          </>
        )}
      </Container>
    </>
  );
};

export default Main;
