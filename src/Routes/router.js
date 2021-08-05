import { Switch, Route } from "react-router-dom";
import MovieDetailUpper from "../pages/moviedetailupper";
import Main from "../pages/Main";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Routers = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/signup">
          <Main />
        </Route>
        <Route exact path="/moviedetail">
          <MovieDetailUpper />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="*">
          <div>
            <h1>Page Not Found 404</h1>
          </div>
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default Routers;
