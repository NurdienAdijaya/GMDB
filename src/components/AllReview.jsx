import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getReview } from "../store/actions/review";

function AllReview() {
  const dispatch = useDispatch();
  const { review, loading } = useSelector((state) => state.reducerReview);
  const [reviews, setReviews] = useState("");
  console.log("reviews", reviews);

  useEffect(() => {
    dispatch(getReview());
  }, []);
  return (
    <div className="list-review">
      <h1>ini review film</h1>
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
  );
}

export default AllReview;
