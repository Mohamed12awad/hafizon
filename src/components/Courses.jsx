import React, { useCallback } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import useEmblaCarousel from "embla-carousel-react";
import CourseCard from "./course_card";
import img1 from "../imgs/Group-7.png";
import img2 from "../imgs/Group-6.png";

function Courses() {
  const OPTIONS = {
    dragFree: true,
    containScroll: "trimSnaps",
    align: "start",
    // loop: true,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="courses">
      <Container>
        <div className="row d-flex justify-content-between">
          <div className="py-3 col-12 col-md-6">
            <h3>
              Case Studies with
              <br />
              Our Students
            </h3>
            <img alt="#" src={require("../imgs/Vector-2.png")} />
          </div>
          <div className="review-text justify-content-md-end col-12 col-md-6">
            <p className="poppins fw-light pt-md-3">
              Reviews from our customers for
              <br /> online Quran classes drive results.
            </p>
            {/* embla slider Previous & Next Buttons */}
            <div className="embla__viewport d-flex">
              <button
                className="embla__prev btn bg-light rounded-5 ms-auto ms-md-0 me-3"
                onClick={scrollPrev}
              >
                <FontAwesomeIcon icon={faAngleLeft} />
              </button>
              <button
                className="embla__next btn bg-light rounded-5"
                onClick={scrollNext}
              >
                <FontAwesomeIcon icon={faAngleRight} />
              </button>
            </div>
          </div>
        </div>
        <div className="embla my-3" ref={emblaRef}>
          <div className="embla__container">
            <CourseCard
              title={"Memorizing Surat At Takathur"}
              link={"./"}
              duration={"15:09 min"}
              courseImg={img1}
              demoImg={img2}
            />
            <CourseCard
              title={"Arabic lesson Practicing on reading"}
              link={"./"}
              duration={"15:09 min"}
              courseImg={img1}
              demoImg={img2}
            />
            <CourseCard
              title={"Mr Cat Teaches Arabic Letters م - ن"}
              link={"./"}
              duration={"15:09 min"}
              courseImg={img1}
              demoImg={img2}
            />
            <CourseCard
              title={"Memorizing Surat At Takathur"}
              link={"./"}
              duration={"15:09 min"}
              courseImg={img1}
              demoImg={img2}
            />
            <CourseCard
              title={"Memorizing Surat At Takathur"}
              link={"./"}
              duration={"15:09 min"}
              courseImg={img1}
              demoImg={img2}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Courses;
