import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
import Main from "./pages/Main";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
=======
import { Provider } from "react-redux";
import store from "./store";
>>>>>>> 6c176bacb10537e69948a46e5dafe0931d315e64
import { BrowserRouter } from "react-router-dom";
import Routers from "./Routes/router";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
<<<<<<< HEAD
        {/* <Header /> */}
        <Main />
        {/* <Footer /> */}
=======
        <Routers />
>>>>>>> 6c176bacb10537e69948a46e5dafe0931d315e64
      </BrowserRouter>
    </Provider>
  );
}

export default App;
