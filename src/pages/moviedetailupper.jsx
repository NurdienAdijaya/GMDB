import React from "react"
import axios from "axios"
import {useState, useEffect } from "react"
import {BASE_URL_MOVIE} from "../store/actions/types"
import "bootstrap/dist/css/bootstrap.min.css";



const MovieDetailUpper = () => {
    const [DetailMovies,setMovies] = useState([])
    const getMovieDetail = async () => {
        await axios.get(BASE_URL_MOVIE)
        .then((result)=> setMovies(result.data))
        .catch((err)=> console.log(err))
    }
    useEffect(()=> {getMovieDetail()})
    console.log(DetailMovies)
    return (
        <div>
            <h1>this is detail upper movie</h1>
            <h1>
                {DetailMovies.title}
            </h1>
            <p>{DetailMovies.synopsis}</p>
            <h4>Release Date : {DetailMovies.releasedate}</h4>
            <button url="trailer" color="#FE024E">Watch Trailer</button>
            <button>Add to Watchlist</button>
            {/* <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Modal body text goes here.</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal.Dialog> */}
        </div>
    )
}
export default MovieDetailUpper