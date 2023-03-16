import React, { useCallback } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import useEmblaCarousel from "embla-carousel-react";
import TestimonialsCard from "./testimonialsCard";

function Testimonials() {
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
    <section className="testimonials my-5">
      <Container>
        <div className="row d-flex justify-content-between">
          <div className="col-12 col-md-6 py-3">
            <h3 className="head">
              What Clients Say
              <br />
              About Hafizon
            </h3>
            <img alt="#" src={require("../imgs/Vector-2.png")} />
          </div>
          <div className="review-text justify-content-md-end col-12 col-md-6">
            <p className="poppins fw-light pt-3">
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
            <TestimonialsCard
              userName={"mamadi"}
              userOrigin={"canada"}
              link={"./"}
              userReview={
                "Love everything about them services and the system they work with may allah bless them."
              }
              userRating={3}
            />
            <TestimonialsCard
              userName={"Arabic lesson Practicing on reading"}
              userOrigin={"15:09 min"}
              link={"./"}
              userReview={
                "Love everything about them services and the system they work with may allah bless them."
              }
              userRating={2}
            />
            <TestimonialsCard
              userName={"Mr Cat Teaches Arabic Letters م - ن"}
              userOrigin={"15:09 min"}
              link={"./"}
              userReview={
                "Love everything about them services and the system they work with may allah bless them."
              }
              userRating={5}
            />
            <TestimonialsCard
              userName={"Memorizing Surat At Takathur"}
              userOrigin={"15:09 min"}
              link={"./"}
              userReview={
                "Love everything about them services and the system they work with may allah bless them."
              }
              userRating={4}
            />
            <TestimonialsCard
              userName={"Memorizing Surat At Takathur"}
              userOrigin={"15:09 min"}
              link={"./"}
              userReview={
                "Love everything about them services and the system they work with may allah bless them."
              }
              userRating={5}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;
