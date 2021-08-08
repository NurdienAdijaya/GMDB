import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import { useEffect } from "react";
import { getActor } from "../store/actions/Actor";
import {useParams} from "react-router-dom"

const CardActor = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { actors, loading } = useSelector((state) => state.reducerActors);

  useEffect(() => {
    dispatch(getActor(id));
  }, [dispatch, id]);

  return (
    <div className="container">
      {loading
        ? "Loading..."
        : actors &&
          actors.map((item, index) => {
            return (
              <div className="container" key={index}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={`${item.image}`} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
    </div>
  );
};

export default CardActor;
