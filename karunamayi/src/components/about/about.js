import React from "react";
import "./about.css";
import { useNavigate } from "react-router-dom";

import about from "../../assests/about.jpg";
import vision from "../../assests/vision.jpg";
import mission from "../../assests/c8.jpeg";
import mission2 from "../../assests/c2.jpg";
import doc1 from "../../assests/doc1.jpg";
import doc2 from "../../assests/doc2.jpg";
import doc3 from "../../assests/doc3.jpg";
import doc4 from "../../assests/doc4.jpg";
import doc5 from "../../assests/doc5.jpg";
import { motion } from "framer-motion";

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="abtContainer">
        <div className="firstSection">
          <motion.img
            src={about}
            alt="about"
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
            }}
          />
          <div>
            <motion.div
              className="infoHeading"
              initial={{
                opacity: 0,
                x: 15,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
                ease: "backInOut",
              }}
            >
              About Us
            </motion.div>
            <motion.div
              className="infoPara"
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                ease: "backInOut",
                delay: 0.5,
              }}
            >
              Karunamayi Sewa Sansthan is a non profit & non government
              organization (NGO) & registered society, which has been in
              existence since 23 January 2020 as per Indian society registration
              act 1860.br Our organization is founded by{" "}
              <a
                href="https://www.facebook.com/profile.php?id=100092040473857&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mr. Vishnu Gupta
              </a>{" "}
              &{" "}
              <a
                href="https://www.facebook.com/vs.singhvishal?mibextid=2JQ9oc"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mr. Vishal Singh
              </a>{" "}
              and is being run by group of youth friends from Ayodhya. Our
              registration number is <strong>FAI/09261/2019-2020</strong>. We
              got unique id by NGO-DARPAN (which is started out as an initiative
              of the Prime Minister’s Office, to create and promote a healthy
              partnership between NGOs and the Government of India and managed
              at present by NITI Aayog) for our organization which is{" "}
              <strong>UP/2020/0256054</strong>. To know our team{" "}
              <span
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/team");
                  window.scrollTo(0, 0);
                }}
              >
                Click here
              </span>
              .
            </motion.div>
          </div>
        </div>
        <div className="midSection">
          <motion.p
            initial={{
              opacity: 0,
              x: 15,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
            }}
          >
            Our Vision:
          </motion.p>
          <motion.div
            className="sloke"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
            }}
          >
            आत्मार्थं जीवलोकेऽस्मिन् को न जीवति मानवः ।<br />
            परं परोपकारार्थं यो जीवति स जीवति ॥
          </motion.div>
          <motion.div
            className="means"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
              delay: 0.5,
            }}
          >
            That’s mean “Who did not win for themselves in this life? <br />
            But, the one who lives for philanthropy, he is the true living.”
          </motion.div>
        </div>
        <div className="visionBox">
          <motion.div
            className="infoPara"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
            }}
          >
            The vision of our Karunamayi Sewa Sansthan is inspired by this
            verse. As we know that compassion and philanthropy have a very close
            relationship, because philanthropy is not possible without
            compassion. So the aim of our organization is to “establish a
            healthy society by instilling compassion in the heart and mind of
            all sections of society.” In regarding to which our founders & all
            members of our organization are implementing.
          </motion.div>
          <motion.img
            src={vision}
            alt="vision"
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
            }}
          />
        </div>
        <div className="missionBox">
          <motion.img
            src={mission}
            alt="mission"
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
            }}
          />
          <motion.div
            className="infoPara"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
            }}
          >
            Karunamayi Sewa Sansthan is a multifaceted non government startup
            organization. We are trying to working in different fields of social
            welfare like that Agriculture, Nature Care, Art & Culture, Children,
            Civic Issues, Dalit Upliftment, Differently Abled, Disaster
            Management, Drinking Water, Education & Literacy, Aged/Elderly,
            Environment & Forests, Health & Family Welfare, Human Rights, Labour
            & Employment, Legal Awareness & Aid, Minority Issues, New &
            Renewable Energy, Nutrition, Panchayati Raj, Right to Information &
            Advocacy, Rural Development & Poverty Alleviation, Sports, Tribal
            Affairs, Urban Development & Poverty Alleviation, Water Resources,
            Women’s Development & Empowerment, Youth Affairs, Any Other etc.{" "}
          </motion.div>
        </div>
        <div className="missionBox">
          <motion.div
            className="infoPara"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
            }}
          >
            We believe that if population is controlled, many problems of the
            society can be eradicated. Therefore, we are also trying to work in
            terms of population control and also trying to find new options for
            population control and encouraging people to do the same. Apart from
            this, we are also trying to work in other areas of social welfare,
            where we feel that we can contribute something. To know our present
            or past activity & program{" "}
            <motion.span
              onClick={(e) => {
                e.preventDefault();
                navigate("/activity");
                window.scrollTo(0, 0);
              }}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                ease: "backInOut",
              }}
            >
              Click here
            </motion.span>
            .
          </motion.div>
          <motion.img
            src={mission2}
            alt="mission"
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
            }}
          />
        </div>

        <motion.div
          class="image-gallery"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
            delay: 0.5,
          }}
        >
          <img src={doc1} alt="doc1" />
          <img src={doc2} alt="doc2" />
          <img src={doc5} alt="doc5" />
          <img src={doc3} alt="doc3" />
          <img src={doc4} alt="doc4" />
        </motion.div>
      </div>
    </>
  );
};

export default About;
