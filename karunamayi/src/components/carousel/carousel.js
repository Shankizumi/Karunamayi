import React, { useEffect } from 'react';
import "./carosuel.css";
import c1 from "../../assests/c1.jpg";
import c2 from "../../assests/c2.jpg";
import c3 from "../../assests/c3.jpg";
import c4 from "../../assests/c4.jpg";
import c5 from "../../assests/c5.jpg";
import c6 from "../../assests/c6.jpg";
import c7 from "../../assests/c7.jpg";
import c8 from "../../assests/c8.jpeg";

const Carousel = () => {
  useEffect(() => {
    const buttons = document.querySelectorAll("[data-carousel-button]");

    const handleButtonClick = (offset) => {
      const slides = document.querySelector("[data-carousel]").querySelector("[data-slides]");
      const activeSlide = slides.querySelector("[data-active]");
      let newIndex = [...slides.children].indexOf(activeSlide) + offset;

      // Add a loop to handle offsets greater than the number of slides
      while (newIndex < 0) {
        newIndex += slides.children.length;
      }
      while (newIndex >= slides.children.length) {
        newIndex -= slides.children.length;
      }

      slides.children[newIndex].dataset.active = true;
      delete activeSlide.dataset.active;
    };

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        handleButtonClick(offset);
      });
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", () => {
          const offset = button.dataset.carouselButton === "next" ? 1 : -1;
          handleButtonClick(offset);
        });
      });
    };
  }, []);

  return (
    <div className="carousel" data-carousel>
      <button className="carousel-button prev" data-carousel-button="prev">
        &#8656;
      </button>
      <button className="carousel-button next" data-carousel-button="next">
        &#8658;
      </button>
      <ul data-slides>
        <li className="slide" data-active>
          <img src={c1} alt="Nature" />
        </li>

        <li className="slide">
          <img src={c2} alt="Nature" />
        </li>

        <li className="slide">
          <img src={c3} alt="Nature" />
        </li>

        <li className="slide">
          <img src={c4} alt="Nature" />
        </li>

        <li className="slide">
          <img src={c5} alt="Nature" />
        </li>

        <li className="slide">
          <img src={c6} alt="Nature" />
        </li>

        <li className="slide">
          <img src={c7} alt="Nature" />
        </li>

        <li className="slide">
          <img src={c8} alt="Nature" />
        </li>

      </ul>
    </div>
  );
};

export default Carousel;
