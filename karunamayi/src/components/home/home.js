import React from "react";
import "./home.css";
import IntroImg from "../../assests/AS1.jpg";
import donation from "../../assests/donation.jpg";
import member from "../../assests/member.jpg";
import partner from "../../assests/partner.jpg";
import vol from "../../assests/volunteer.jpg";
import Carousel from "../../components/carousel/carousel";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="intro">
        <motion.img
          src={IntroImg}
          alt="img"
          initial={{ scale: 1 }}
          animate={{ scale: 1.2 }}
          transition={{ duration: 2, ease: "easeIn" }}
        />
        <div className="introText">
          <motion.h1
            className="sanskrit"
            initial={{
              opacity: 0,
              y: -30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 2,
              ease: "backInOut",
            }}
          >
            अष्टादशपुराणानां सारं व्यासेन कीर्तितम् |<br />
            परोपकार: पुण्याय पापाय परपीडनम् ||
          </motion.h1>
          <motion.h3
            className="meaning"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 2,
              ease: "backInOut",
              delay: 0.5,
            }}
          >
            Maharishi Ved Vyas as the essence of the Kirti Swaroop eighteen
            Puranas,
            <br />
            said only two things !! Doing others favors is great virtuous and
            suffering is a sin.
          </motion.h3>
          <motion.p
            className="introPara"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 2,
              ease: "backInOut",
              delay: 1,
            }}
          >
            Karunamayi Sewa Sansthan is a multi-faceted non government
            organization (NGO). We shall be looking forward to a peaceful
            healthy society by instilling compassion in the heart & mind off all
            section of society. Our name is inspired by this statement, where
            “Karunamayi” represent “Compassion”. For more: Click here
          </motion.p>
        </div>
      </div>
      <div className="midPart">
        <motion.div
          className="cs"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 2,
            ease: "backInOut",
          }}
        >
          <Carousel></Carousel>
        </motion.div>
        <div className="midText">
          <div className="subInfo">
            <motion.h1
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
              NEW
            </motion.h1>
            <motion.p
              initial={{
                opacity: 0,
                y: 10,
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
              Karunamayi Yoga Challenge for more information just click.{" "}
            </motion.p>
            <motion.p
              initial={{
                opacity: 0,
                y: 10,
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
              प्रशस्ति पत्र कोरोना (COVID-19) कर्मवीरों के लिए:{" "}
              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd0MQ--khm_3vQxOuof8Wz7BM4XQcGt3PB9_ffkevNEb_FSpA/closedform"
                target="_blank"
                rel="noopener noreferrer"
                initial={{
                  opacity: 0,
                  y: 10,
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
              </motion.a>
            </motion.p>
          </div>
          <div className="subInfo">
            <motion.h1
              initial={{
                opacity: 0,
                x: 15,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 2,
                ease: "backInOut",
              }}
            >
              Important Link for COVID-19:
            </motion.h1>
            <motion.p
              initial={{
                opacity: 0,
                y: 10,
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
              Aarogya Setu app is Indian{" "}
              <motion.a
                href="https://www.mygov.in/covid-19"
                target="_blank"
                rel="noopener noreferrer"
                initial={{
                  opacity: 0,
                  y: 10,
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
                COVID-19
              </motion.a>{" "}
              (Corona virus) tracking mobile application developed by the{" "}
              <motion.a
                href="https://www.nic.in/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{
                  opacity: 0,
                  y: 10,
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
                National Informatics Centre
              </motion.a>
              . This app play a very important roll against the COVID-19
              pandemic & it’s also recommended by Government so download by{" "}
              <a
                href="https://www.mygov.in/aarogya-setu-app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here
              </a>
            </motion.p>
          </div>
        </div>
      </div>
      <div className="last">
        <motion.div
          className="heading"
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
          How Can You Help Us:
        </motion.div>
        <div className="lastInfo">
          <motion.img
            src={donation}
            alt="donation"
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
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
              Donation
            </motion.div>
            <motion.div
              className="infoPara"
              initial={{
                opacity: 0,
                y: 10,
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
              Money is not everything, yet there is a lot. Donate us for support
              our mission. It is not necessary that you donate money, apart from
              this you can donate any other new or old things that can help
              someone. Because there are many old things which are useless for
              us but can useful for other, in this condition, we will take
              responsibility of sending these things to needy people. Donations
              (For Karunamayi Sewa Sansthan) under clause (ix) of sub-section
              (5) of section 80G and under clause (ii) to sub-section (1A) of
              section 35 of the Income-tax Act, 1961. So regarding it you can
              direct contact us or{" "}
              <span
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/donation");
                  window.scrollTo(0, 0);
                }}
              >
                Click here
              </span>
            </motion.div>
          </div>
        </div>
        <div className="lastInfo">
          <motion.img
            src={member}
            alt="member"
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
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
              Join us as a Member:
            </motion.div>
            <motion.div
              className="infoPara"
              initial={{
                opacity: 0,
                y: 10,
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
              We welcome individuals and all type of organization & institution
              etc all over the world to become members. Members and non-members
              may share ideas with us. You can direct contact us for joining a
              group of change-makers, a network strong enough to impact positive
              change in every section of society or{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScwNEmTaFtsy5QsKtCJckhyyHcyryiStNOMbbTNxgQYDkOnNw/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here
              </a>
            </motion.div>
          </div>
        </div>
        <div className="lastInfo">
          <motion.img
            src={vol}
            alt="volunteer"
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
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
              Join us as a Volunteer:
            </motion.div>
            <motion.div
              className="infoPara"
              initial={{
                opacity: 0,
                y: 10,
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
              Volunteer to help us set up and implement our mission and our
              member’s projects. Volunteer to carry the message of sustainable
              development and sustainable community development to your
              contacts. Volunteer to help us in any other way you can. Fill this
              form & joining a group of change-makers, a network strong enough
              to impact positive change in every section of society. For join us
              you can direct contact or{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScwNEmTaFtsy5QsKtCJckhyyHcyryiStNOMbbTNxgQYDkOnNw/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here{" "}
              </a>{" "}
            </motion.div>
          </div>
        </div>
        <div className="lastInfo">
          <motion.img
            src={partner}
            alt="partner"
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
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
              Join us out as Partner:{" "}
            </motion.div>
            <motion.div
              className="infoPara"
              initial={{
                opacity: 0,
                y: 10,
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
              You can network and partner with us to exchange ideas,
              information, knowledge, experience and other resources. We welcome
              all types of organization & institutions etc as partner, so please
              mail us on <strong>karunamayi.kss@gmail.com</strong> or{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScwNEmTaFtsy5QsKtCJckhyyHcyryiStNOMbbTNxgQYDkOnNw/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here{" "}
              </a>{" "}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
