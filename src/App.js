
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PostReview from "./components/PostReview";
import AllReview from "./components/AllReview";
import { Provider } from "react-redux";
import store from "./store";
import Main from "./pages/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Main />
        <PostReview />
        <AllReview />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App;
