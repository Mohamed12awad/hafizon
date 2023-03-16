import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Card } from "react-bootstrap";

function PostsCard(props) {
  return (
    <div className="Testimonial-card">
      <Card className="border-0" style={{ width: "100%" }}>
        <div className="top-post-card w-100 ">
          <div className="position-relative">
            <div>
              <Card.Img
                className="rounded-3"
                variant="top"
                src={props.postImg}
              />
            </div>
            <div className="position-absolute post-card-layer d-flex align-center">
              <div>
                <img
                  src={require("../imgs/logo-white.svg").default}
                  style={{ width: 80 }}
                  className="position-absolute"
                  alt=""
                />
              </div>
              <div className="post-group my-auto mx-3 text-white text-center">
                <span className="post-title py-1 fw-semibold px-5 text-capitalize">
                  {props.postGroup}
                </span>
                <p className="pt-2">{props.postTitle}</p>
              </div>
            </div>
          </div>
        </div>
        <Card.Body className="px-0">
          <Card.Title className="fs-4 fw-semibold">
            {props.postTitle}
          </Card.Title>
          <Card.Text className="text-justify lh-sm">{props.postDesc}</Card.Text>
          <Card.Link href={`./` + props.postId}>Read More</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PostsCard;
