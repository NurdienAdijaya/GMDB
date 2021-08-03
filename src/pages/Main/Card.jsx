import React, { useState, useEffect} from 'react'

export default function Card() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=324f0eb62ce9dff5e7992ccac011085c")
        .then(res => res.json())
        .then(
            (result) => {
            setIsLoaded(true);
            setItems(result.results);
            },

            (error) => {
            setIsLoaded(true);
            setError(error);
            }
        )
    }, [])

    console.log(items)
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
        <>
            {items.map(item => (
            <div className="container-fluid">
                <div className="container">
                    <div class="row row-cols-1 row-cols-md-4 g-4 text-center mt-3">
                        <div class="card">
                            <img src={item.poster_path} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h1 class="card-title fw-bolder">{item.title}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </>
        );
    }
}