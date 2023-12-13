import React from "react";
import "./donation.css";
import donation from "../../assests/donation3.jpg";
import QR from "../../assests/PaymentQR.jpg";
import { motion } from "framer-motion";

const Donation = () => {
  return (
    <>
      <div className="donationContainer">
        <div className="donationBox">
          <motion.img
            src={donation}
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
              delay: 0.5,
            }}
          >
            Money is not everything, yet there is a lot. Donate us for support
            our mission. Donations (For Karunamayi Sewa Sansthan) under clause
            (ix) of sub-section (5) of section 80G and under clause (ii) to
            sub-section (1A) of section 35 of the Income-tax Act, 1961.
          </motion.div>
        </div>
        <div className="donationBox">
          <motion.div
            className="infoPara"
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
              delay: 1,
            }}
          >
            Donations to Karunamayi Sewa Sansthan can be made via direct bank
            transfer by following details:
          </motion.div>
        </div>
        <div className="donationDetails">
          <motion.div
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
            <h2>
              Bank: <strong>HDFC Bank</strong>
            </h2>
            <h2>
              Branch: <strong>Amaniganj, Ayodhya, Uttar Pradesh</strong>
            </h2>
            <h2>
              Account holder name: <strong> Karunamayi Sewa Sansthan</strong>
            </h2>
            <h2>
              IFSC: <strong> HDFC0009505</strong>
            </h2>
            <p>Bank Detail of Karunamayi Sewa Sansthan for Donation</p>
          </motion.div>
        </div>

        <div className="donationBox">
          <motion.div
            className="infoPara"
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
            Or donations to Karunamayi Sewa Sansthan can be also made via direct
            bank transfer by following UPI ID:
          </motion.div>
        </div>

        <div className="donationDetails">
          <motion.div
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
            <h2>
              UPI: <strong>karunamayi@hdfcbank</strong>
            </h2>
            <p>UPI ID of Karunamayi Sewa Sansthan for Donation</p>
          </motion.div>
        </div>

        <div className="donationBox">
          <motion.div
            className="infoPara"
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
            Or donations to Karunamayi Sewa Sansthan can be also made via direct
            bank transfer via scan this QR Code by using any UPI payment app:
          </motion.div>
        </div>

        <div className="donationBox">
          <motion.img
            src={QR}
            alt="QR"
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
              delay: 0.3,
            }}
          >
            It is not necessary that you donate money, apart from this you can
            donate any other new or old things that can help someone. Because
            there are many old things which are useless for us but can useful
            for other, in this condition, we will take responsibility of sending
            these things to needy people. So regarding it you can direct contact
            us with the adress provided on footer.{" "}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Donation;
