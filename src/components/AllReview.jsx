import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getReview } from "../store/actions/review";
import { addReview } from "../store/actions/submitReview";
import "../styles/PostReview.css";
import { Button, Form, Card, CardImg } from "react-bootstrap";
import StarRating from "./StarRating";

function AllReview() {
  const dispatch = useDispatch();
  const { review, loading } = useSelector((state) => state.reducerReview);
  const [reviews, setReviews] = useState("");
  const [rating, setRating] = useState(0);
  // console.log("reviews", reviews);

  useEffect(() => {
    dispatch(getReview());
  }, [dispatch]);
  // const changeReviewItem = (item) => {
  //   dispatch(
  //     changeReview(item.id, {
  //       id: item.id,
  //       reviews: item.reviews,
  //       isDone: !item.isDone,
  //     })
  //   );
  // };
  const changeInput = (e) => {
    setReviews(e.target.value);
  };
  const onSubmitReview = (e) => {
    e.preventDefault();
    // console.log("submit");
    if (reviews) {
      dispatch(addReview({ reviews: reviews, isDone: false, rating }));
      dispatch(getReview());
    }
  };
  const ratingInput = (rate) => {
    setRating(rate);
    console.log("udah bisa");
  };
  return (
    <div>
      <div className="card-review">
        <Card className="post-review mb-5" style={{ width: "50em" }}>
          <Card.Body>
            <CardImg />
            <Card.Title>User Name</Card.Title>
            <StarRating value={rating} setValue={ratingInput} />
            <Form onSubmit={onSubmitReview}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  onChange={changeInput}
                  value={reviews}
                  as="textarea"
                  rows={5}
                  placeholder="Leave A Review"
                />
              </Form.Group>
              <Button type="submit" className="post-button" variant="success">
                Submit Review
              </Button>
            </Form>
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
