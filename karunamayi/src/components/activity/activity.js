import React, { useEffect } from "react";
import "./activity.css";
import certificate from "../../assests/karunamayi-1.webp";
import cr2 from "../../assests/karunamayi-ayodhya-1-3.jpeg";
import cr4 from "../../assests/karunamayi-ayodhya3.jpeg";
import cr5 from "../../assests/karunamayi-eye-camp-1.jpeg";
import cr7 from "../../assests/karunamayi-eye-camp-4.jpeg";
import cr8 from "../../assests/karunamayi-eye-camp-7.jpeg";
import cr9 from "../../assests/img-20210113-wa0000.webp";
import cr10 from "../../assests/karunamayi-plantation-2.webp";
import cr11 from "../../assests/karunamayi-plantation-4.webp";
import cr12 from "../../assests/karunamayi-plantation.webp";
import cr13 from "../../assests/t1.webp";
import cr14 from "../../assests/t2.webp";
import cr15 from "../../assests/t3.webp";
import cr16 from "../../assests/t4.webp";
import { motion } from "framer-motion";

const Activity = () => {
  useEffect(() => {
    const buttons = document.querySelectorAll("[data-carousel-button]");

    const handleButtonClick = (offset) => {
      const slides = document
        .querySelector("[data-carousel]")
        .querySelector("[data-slides]");
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
    <>
      <div className="activityContainer">
        <motion.div
          className="sloganA"
          initial={{
            opacity: 0,
            x: 15,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1.2,
            ease: "backInOut",
          }}
        >
          Activity and Events
        </motion.div>
        <motion.div
          className="activityBox"
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
            ease: "backInOut",
          }}
        >
          Our Events annoucement and photos are shared and announced across
          facebook and other social media platforms.
        </motion.div>

        <motion.div
          class="activity-event"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
            ease: "backInOut",
            delay: 0.5,
          }}
        >
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fkarunamayi.kss%2F&tabs=timeline&width=500&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            title="Facebook Page Plugin"
            width="500"
            height="800"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </motion.div>

        <motion.div
          className="activityBox"
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
            ease: "backInOut",
          }}
        >
          Few images from the events we have conducted
        </motion.div>

        <motion.div
          className="carousell"
          data-carousel
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
            ease: "backInOut",
            delay: 0.5,
          }}
        >
          <button className="carousel-button prev" data-carousel-button="prev">
            &#8656;
          </button>
          <button className="carousel-button next" data-carousel-button="next">
            &#8658;
          </button>
          <ul data-slides>
            <li className="slidee" data-active>
              <img src={cr2} alt="Nature" />
            </li>
            <li className="slidee">
              <img src={cr4} alt="Nature" />
            </li>
            <li className="slidee">
              <img src={cr5} alt="Nature" />
            </li>
            <li className="slidee">
              <img src={cr7} alt="Nature" />
            </li>
            <li className="slidee">
              <img src={cr8} alt="Nature" />
            </li>
            <li className="slidee">
              <img src={cr9} alt="Nature" />
            </li>
            <li className="slidee">
              <img src={cr10} alt="Nature" />
            </li>
            <li className="slidee">
              <img src={cr11} alt="Nature" />
            </li>
            <li className="slidee">
              <img src={cr12} alt="Nature" />
            </li>
            <li className="slidee">
              <img src={cr13} alt="Nature" />
            </li>
            <li className="slidee">
              <img src={cr14} alt="Nature" />
            </li>
            <li className="slidee">
              <img src={cr15} alt="Nature" />
            </li>
            <li className="slidee">
              <img src={cr16} alt="Nature" />
            </li>
          </ul>
        </motion.div>

        <motion.div
          class="certificate"
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
            ease: "backInOut",
          }}
        >
          <img src={certificate} alt="certificate" />
        </motion.div>
      </div>
    </>
  );
};

export default Activity;
