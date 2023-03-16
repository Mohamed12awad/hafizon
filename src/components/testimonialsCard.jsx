import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { Button } from "react-bootstrap";

function TestimonialsCard(props) {
  return (
    <div className="Testimonial-card row embla__slide p-3 me-4 rounded-2">
      <div className="col-6 card-text">
        <div className="d-flex">
          <div className="mb-auto" style={{ width: 60 }}>
            <img
              className="w-100"
              alt=""
              src={require("../imgs/Group-6.png")}
            />
          </div>
          <a
            href={props.link}
            className="text-truncate text-capitalize Testimonial-card-title ms-3 my-auto lh-sm nav-link"
          >
            {props.userName} <br /> <span>{props.userOrigin}</span>
          </a>
        </div>
      </div>
      <div className="Testimonial-card-img col-6 text-center">
        {(() => {
          const rating = [];
          for (let i = 1; i <= 5; i++) {
            if (i <= props.userRating) {
              rating.push(
                <FontAwesomeIcon icon={faStar} color="#fe8801" key={i} />
              );
            } else {
              rating.push(<FontAwesomeIcon icon={faStar} key={i} />);
            }
          }
          return rating;
        })()}
        <img
          alt=""
          src={props.courseImg}
          className="main-card-img"
          width={140}
        />
      </div>
      <div className="testimonial-quote col-12 py-3 lh-sm">
        <p>{props.userReview}</p>
      </div>
    </div>
  );
}

export default TestimonialsCard;
