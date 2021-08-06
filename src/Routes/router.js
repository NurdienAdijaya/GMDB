import { Switch, Route } from "react-router-dom";
import Main from "../pages/Main";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MovieDetailUpper from "../pages/moviedetailupper";

const Routers = () => {
  // const token = localStorage.getItem("Token");
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
        <Route exact path="/moviedetail/:id">
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
