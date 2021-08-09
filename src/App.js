import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Routers from "./Routes/router";
import { Provider } from "react-redux";
import store from "./store";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routers />
        {/* <UserProfile /> */}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
