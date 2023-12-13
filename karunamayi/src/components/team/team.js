import React from "react";
import "./team.css";
import one from "../../assests/1.jpg";
import two from "../../assests/2.jpg";
import three from "../../assests/3.jpg";
import four from "../../assests/4.jpg";
import five from "../../assests/5.jpg";
import six from "../../assests/6.jpg";
import seven from "../../assests/7.jpg";
import eight from "../../assests/8.jpg";
import amrit from "../../assests/amrit.jpg";
import nagesh from "../../assests/nagesh.jpg";
import eleven from "../../assests/11.jpg";
import thirteen from "../../assests/13.jpg";
import fourteen from "../../assests/14.jpg";
import pfp from "../../assests/pfp.png";
import fifteen from "../../assests/15.jpg";
import sixteen from "../../assests/16.jpg";
import seventeen from "../../assests/17.jpg";
import { motion } from "framer-motion";

const Team = () => {
  const mainMembers = [
    {
      name: "Mr. Vishal Singh",
      degree: "B.Sc,LLB",
      position: "President",
      img: one,
    },
    {
      name: "Mr. Vishnu Gupta",
      degree: "B.Pharm., PGDYO, PGDDTN",
      position: "General Secretary / Chief Functionary",
      img: two,
    },
    {
      name: "Mr. Subhash Singh",
      degree: "B.A., M.A.",
      position: "Vice-President",
      img: three,
    },
    {
      name: "Mr. Vaibhav Singh",
      degree: "M.Sc., B.Ed.",
      position: "Spokesperson",
      img: four,
    },
    {
      name: "Er. Md. Muddassir Alam",
      degree: "B.Tech., M.Tech.",
      position: "Secretary",
      img: five,
    },
    {
      name: "Mr. Ashish Kumar Singh",
      degree: "M.A., LLB",
      position: "Secretary (A)",
      img: six,
    },
    {
      name: "Mr. Aftab Ahmad Ansari",
      degree: "B.A., M.A.",
      position: "Treasurer",
      img: seven,
    },
  ];

  const dedicatedTeam = [
    {
      name: "Mr. Akash Gupta",
      position: "Member",
      img: eight,
    },
    {
      name: "Mr. Amrit Raj Singh",
      position: "Member",
      img: amrit,
    },
    {
      name: "Mr. Nagesh Pratap Singh",
      position: "Member",
      img: nagesh,
    },
    {
      name: "Mr. Shikhil Agarawal",
      position: "Member",
      img: eleven,
    },

    {
      name: "Mr. Aman Gupta",
      position: "Member",
      img: thirteen,
    },
    {
      name: "Mr. Krishna Gopal Singh",
      position: "Member",
      img: fourteen,
    },
    {
      name: "Mr. Utkarsh Srivastava",
      position: "Member",
      img: pfp,
    },
    {
      name: "Mr. Ravi Sonkar",
      position: "Member",
      img: pfp,
    },
    {
      name: "Mr. Shivam Srivastava",
      position: "Member",
      img: pfp,
    },
    {
      name: "Mr. Azad Singh",
      position: "Member",
      img: pfp,
    },
    {
      name: "Mr. Ayush Pandey",
      position: "Member",
      img: pfp,
    },
    {
      name: "Mr. Anand Singh",
      position: "Member",
      img: pfp,
    },
  ];

  const supportTeam = [
    {
      name: "Dr. Dipti Gupta",
      degree: "BHMS, DRCH (KMC, Lucknow)",
      position: "Medical Support",
      img: fifteen,
    },
    {
      name: "Dr. Upkar Yadav",
      degree: "BAMS,CCYP(BHU)",
      position: "Medical Support",
      img: sixteen,
    },
    {
      name: "Er. Shashank Gupta",
      degree: "B.Tech(JNTU)",
      position: "Technical Support",
      img: seventeen,
    },
  ];

  return (
    <>
      <div>
        {/* Your existing HTML content */}
        <div className="members-container">
          <motion.div
            className="slogan"
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
            <h1>Management Office Bearers</h1>
          </motion.div>
          {mainMembers.map((member, index) => (
            <div className="text-content" key={index}>
              <div className="b1">
                <motion.img
                  src={member.img}
                  alt=""
                  loading="lazy"
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1.2,
                    ease: "backInOut",
                  }}
                />
              </div>
              <div className="b2">
                <motion.h3
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
                  {member.name}
                </motion.h3>
                <motion.h5
                  initial={{
                    opacity: 0,
                    y: 20,
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
                  {member.position}
                </motion.h5>
              </div>
            </div>
          ))}
          <motion.div
            className="slogan"
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
            <h1>Our Dedicated Members</h1>
          </motion.div>
          {dedicatedTeam.map((member, index) => (
            <div className="text-content" key={index}>
              <div className="b1">
                <motion.img
                  src={member.img}
                  alt=""
                  loading="lazy"
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1.2,
                    ease: "backInOut",
                  }}
                />
              </div>
              <div className="b2">
                <motion.h3
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
                  {member.name}
                </motion.h3>
              </div>
            </div>
          ))}
          <motion.div
            className="slogan"
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
            <h1>Our Support Team</h1>
          </motion.div>
          {supportTeam.map((member, index) => (
            <div className="text-content" key={index}>
              <div className="b1">
                <motion.img
                  src={member.img}
                  alt=""
                  loading="lazy"
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1.2,
                    ease: "backInOut",
                  }}
                />
              </div>
              <div className="b2">
                <motion.h3
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
                  {member.name}
                </motion.h3>
                <motion.h5
                  initial={{
                    opacity: 0,
                    y: 20,
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
                  {member.position}
                </motion.h5>
              </div>
            </div>
          ))}
          <motion.div
            className="details"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.2,
              ease: "backInOut",
              delay: 0.3,
            }}
          >
            <h1>Want to work with us?</h1>
            <p>Next name could be yours</p>
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
    </>
  );
};

export default Team;
