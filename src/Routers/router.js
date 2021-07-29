import {Switch, Route} from 'react-router-dom'
import MovieDetailUpper from "../pages/moviedetailupper"
import Navbar from '../components/Navbar'

const Routers = () => {
   return (
    <Switch>
        <Route exact path = "/">
            <Navbar/>
        </Route>
        <Route exact path = "/detailmoive">
            <MovieDetailUpper/>
        </Route>
    </Switch>
)

}

export default Routers;