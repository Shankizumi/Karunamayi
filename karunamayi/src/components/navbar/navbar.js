import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assests/Karunamayi Logo Blue Background.png";
import HM from "../../assests/Hm.png";
import "./navbar.css";
import {
  easeInOut,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const openVariants = {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.5 },
  };

  const closedVariants = {
    display: "none",
    opacity: 0,
    height: 0,
  };

  return (
    <div>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: easeInOut }}
      >
        <div className="navbar" id="navbar">
          <motion.div
            className="logo"
            initial={{
              y: -20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
            }}
          >
            <img src={Logo} alt="logo" />
          </motion.div>
          <div className="headers">
            <motion.ul
              initial={{
                y: -20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1,
                ease: "backInOut",
              }}
            >
              <li>
                <NavLink to="/" activeClassName="active">
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="active">
                  ABOUT US
                </NavLink>
              </li>
              <li>
                <NavLink to="/team" activeClassName="active">
                  TEAM KARUNAMAYI
                </NavLink>
              </li>
              <li>
                <NavLink to="/donation" activeClassName="active">
                  DONATION
                </NavLink>
              </li>
              <li>
                <NavLink to="/activity" activeClassName="active">
                  ACTIVITY & EVENTS
                </NavLink>
              </li>
            </motion.ul>
          </div>
          <div className="menu" id="menu">
            <img
              src={HM}
              alt="hamburger"
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>
          <div
            className="headers-menu"
            style={{ display: showMenu ? "flex" : "none" }}
          >
            <motion.ul animate={showMenu ? openVariants : closedVariants}>
              <li onClick={() => setShowMenu(false)}>
                <NavLink to="/" activeClassName="active">
                  HOME
                </NavLink>
              </li>
              <li onClick={() => setShowMenu(false)}>
                <NavLink to="/about" activeClassName="active">
                  ABOUT US
                </NavLink>
              </li>
              <li onClick={() => setShowMenu(false)}>
                <NavLink to="/team" activeClassName="active">
                  TEAM KARUNAMAYI
                </NavLink>
              </li>
              <li onClick={() => setShowMenu(false)}>
                <NavLink to="/donation" activeClassName="active">
                  DONATION
                </NavLink>
              </li>
              <li onClick={() => setShowMenu(false)}>
                <NavLink to="/activity" activeClassName="active">
                  ACTIVITY & EVENTS
                </NavLink>
              </li>
            </motion.ul>
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
