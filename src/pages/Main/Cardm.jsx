import React, { useState, useEffect } from "react";
import { Card, Row, Container } from "react-bootstrap";
import "../../styles/Card1.css";

export default function Cardm() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=324f0eb62ce9dff5e7992ccac011085c"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.results);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  console.log(items);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Container fluid className="py-4">
          <Container>
            <Row>
              {items.map((item) => (
                <Card style={{ width: "13rem" }}>
                  <a href={`/moviedetail/${item.id}`}>
                    <Card.Img
                      variant="top"
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                    </Card.Body>
                  </a>
                </Card>
              ))}
            </Row>
          </Container>
        </Container>
      </>
    );
  }
}
