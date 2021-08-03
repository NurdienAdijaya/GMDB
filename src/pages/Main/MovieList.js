import React from 'react';
import './MovieList.css'

const MovieList = (props) => {
	return (
		<>
			{props.movies.map((movie) => (
				<div className='card'>
					<img src={movie.Poster} className='card-img-top' alt=""/>
					<div className='card-body'>
						<h2 className='card-title fw-bolder'>{movie.Title}</h2>
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;