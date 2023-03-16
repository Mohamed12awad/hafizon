import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button, Container, Row, Col } from "react-bootstrap";
import PostsCard from "./posts_card";
import p1 from "../imgs/p1.jpg";
import p2 from "../imgs/p2.jpg";
import p3 from "../imgs/p3.jpg";
import p4 from "../imgs/p4.png";

function Posts() {
  return (
    <section className="posts my-5">
      <Container>
        <div className="py-3 my-3 d-flex justify-content-between">
          <div className="w-50  ">
            <h3 className="fw-bolder fs-3">Latest Posts</h3>
            <p className="fw-light pt-2">
              We provides helpful tips and guidance to students and teachers
            </p>
            <img alt="#" src={require("../imgs/Vector-2.png")} />
          </div>
          <div className="about-btn py-4">
            <Button
              href="#"
              variant="outline-dark"
              className="book-button border-dark fs-5 mt-auto mt-0 px-md-5 py-2"
            >
              See All <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </div>
        </div>
        <div className="post-sect">
          <Row>
            <Col lg={3} md={6}>
              <PostsCard
                postImg={p4}
                postGroup={"quran"}
                postTitle={
                  "8 Benefits of Tajweed Quran Every Muslim Should Know"
                }
                postDesc={
                  "Your child will learn how to read, recite, and understand the Quran. They will also learn about the Islamic faith and how to apply it intheir everyday lives."
                }
                postId={25}
              />
            </Col>
            <Col lg={3} md={6}>
              <PostsCard
                postImg={p2}
                postGroup={"quran"}
                postTitle={
                  "Rules of Meem Sakinah The Izhar Shafawi, Ikhfa, and Idghaam"
                }
                postDesc={
                  "Your child will learn how to read, recite, and understand the Quran. They will also learn about the Islamic faith and how to apply it intheir everyday lives."
                }
                postId={25}
              />
            </Col>
            <Col lg={3} md={6}>
              <PostsCard
                postImg={p3}
                postGroup={"quran"}
                postTitle={
                  "How to Become a Hafiz of The Quran in 12 Simple Steps?"
                }
                postDesc={
                  "Your child will learn how to read, recite, and understand the Quran. They will also learn about the Islamic faith and how to apply it intheir everyday lives."
                }
                postId={25}
              />
            </Col>
            <Col lg={3} md={6}>
              <PostsCard
                postImg={p1}
                postGroup={"quran"}
                postTitle={
                  "8 Incredible Benefits of Reading Surah Rahman Every Day"
                }
                postDesc={
                  "Your child will learn how to read, recite, and understand the Quran. They will also learn about the Islamic faith and how to apply it intheir everyday lives."
                }
                postId={25}
              />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Posts;
