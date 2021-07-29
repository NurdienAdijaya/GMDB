import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./Routers/router"

function App() {
  return (
    <BrowserRouter>
    <Router/>
    </BrowserRouter>
  );
}

export default App;
