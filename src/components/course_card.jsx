import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button } from "react-bootstrap";

function CourseCard(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="course-card embla__slide d-flex p-3 me-4 rounded-2">
      <div className="card-text">
        <div className="d-flex">
          <div className="my-2" style={{ width: 80 }}>
            <img
              className="w-100"
              alt=""
              src={require("../imgs/Group-6.png")}
            />
          </div>
          <a
            href={props.link}
            className="text-wrap course-card-title ms-3 lh-sm nav-link"
          >
            {props.title} <br /> <span>{props.duration}</span>
          </a>
        </div>
        <div className="d-flex video-btn py-3" onClick={handleShow}>
          <FontAwesomeIcon
            className="fs-1 pe-3"
            icon={faCirclePlay}
            color="rgb(5 74 218)"
          />
          <span className="video-btn-txt text-capitalize">
            play <br /> video
          </span>
        </div>
      </div>
      <div className="course-card-img">
        <img
          alt=""
          src={props.courseImg}
          className="main-card-img"
          width={140}
        />
        <img alt="" src={props.demoImg} className="sec-card-img" width={50} />
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CourseCard;
