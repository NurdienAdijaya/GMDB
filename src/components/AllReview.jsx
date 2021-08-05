import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getReview } from "../store/actions/review";
import { changeReview } from "../store/actions/changeReview";
import "../styles/PostReview.css";
import { Button, Form, Card, CardImg } from "react-bootstrap";
import StarRating from "./StarRating";

function AllReview() {
  const dispatch = useDispatch();
  const { review, loading } = useSelector((state) => state.reducerReview);
  const [reviews, setReviews] = useState("");
  console.log("reviews", reviews);

  useEffect(() => {
    dispatch(getReview());
  }, []);
  const changeReviewItem = (item) => {
    dispatch(
      changeReview(item.id, {
        id: item.id,
        reviews: item.reviews,
        isDone: !item.isDone,
      })
    );
  };
  const changeInput = (e) => {
    setReviews(e.target.value);
  };
  const submitReview = () => {
    if (reviews) {
      dispatch(submitReview({ reviews: reviews, isDone: false }));
      dispatch(getReview());
    }
  };
  return (
    <div>
      <div className="card-review">
        <Card className="post-review mb-5" style={{ width: "50em" }}>
          <Card.Body>
            <CardImg />
            <Card.Title>User Name</Card.Title>
            <StarRating />
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Leave A Review"
                />
              </Form.Group>
            </Form>
            <Button className="post-button" variant="success">
              Submit Review
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div className="list-review">
        <h1>All Reviews</h1>
        <ul>
          {loading
            ? "loading..."
            : review.map((item, index) => {
                return (
                  <div key={index}>
                    <li>{item.content}</li>
                    <li>{item.rating}</li>
                  </div>
                );
              })}
        </ul>
      </div>
    </div>
  );
}

export default AllReview;
