import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import PostReview from "./components/PostReview";
import AllReview from "./components/AllReview";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <PostReview />
      <AllReview />
    </Provider>
  );
}

export default App;
