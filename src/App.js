import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./pages/Main";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
import Routers from "./Routes/router";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main />
        <Routers />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
