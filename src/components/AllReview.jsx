import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getReview } from "../store/actions/review";
import { addReview } from "../store/actions/submitReview";
import "../styles/PostReview.css";
import { Button, Form, Card, CardImg } from "react-bootstrap";
import StarRating from "./StarRating";
import ChangeReview from "./ChangeReview";

function AllReview() {
  const dispatch = useDispatch();
  const { review, loading } = useSelector((state) => state.reducerReview);
  const [reviews, setReviews] = useState("");
  const [rating, setRating] = useState(0.0);
  const [headline, setHeadline] = useState("");
  // console.log("reviews", reviews);

  useEffect(() => {
    dispatch(getReview());
  }, []);
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
  const onSubmitReview = async (e) => {
    e.preventDefault();
    if (reviews) {
      await dispatch(
        addReview({ reviews: reviews, isDone: false, rating, headline })
      );
      await dispatch(getReview());
    }
  };
  const ratingInput = (rate) => {
    setRating(rate);
  };
  return (
    <div>
      <div className="card-review">
        <Card className="post-review mb-5" style={{ width: "50em" }}>
          <Card.Body>
            <CardImg />
            <Card.Title>User Name</Card.Title>
            <StarRating
              name="main-rating"
              value={rating}
              setValue={ratingInput}
            />
            <Form onSubmit={onSubmitReview}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  onChange={(e) => setHeadline(e.target.value)}
                  value={headline}
                  // as="text"
                  rows={3}
                  placeholder="Headline"
                />
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
                    <li>{item.headline}</li>
                    <li>{item.content}</li>
                    <li>{item.rating}</li>
                    {/* {console.log(item)} */}
                    <ChangeReview
                      id={item.id}
                      headline={item.headline}
                      content={item.content}
                      rating={item.rating}
                    />
                  </div>
                );
              })}
        </ul>
      </div>
    </div>
  );
}

export default AllReview;
