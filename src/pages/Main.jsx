import React, { useEffect } from "react";
import Nextbutton from "./Main/Nextbutton";
import Cardm from "./Main/MovieCard";
import ButtonCategory from "./Main/ButtonCategory";
import MovieCarousel from "./Main/MovieCarousel";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../store/actions/movie";
import { Container } from "react-bootstrap";

const Main = () => {
  const dispatch = useDispatch();
  const { movie, loading } = useSelector(
    (state) => state.reducerMovie.listMovie
  );
  console.log("movie", movie);

  const { result, loading: loadingSearch } = useSelector(
    (state) => state.reducerMovie.searchResult
  );
  console.log("result", result);

  useEffect(() => {
    dispatch(getMovie());
  }, [dispatch]);
  return (
    <>
      <MovieCarousel />
      <ButtonCategory />
      <Container className=" d-flex flex-wrap justify-content-evenly">
        {loading ? (
          <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            {loadingSearch ? (
              <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : result.data && result.data.length ? (
              result?.data?.map((item, index) => {
                return (
                  <div key={index}>
                    <Cardm data={item} index={index} />
                  </div>
                );
              })
            ) : (
              movie?.data?.map((item, index) => {
                return (
                  <div key={index}>
                    <Cardm data={item} index={index} />
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
