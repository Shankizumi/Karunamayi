import React from 'react'
import "./footer.css";
import { useNavigate } from "react-router-dom";
import footerImg from "../../assests/d3.png";



const Footer = () => {

  const navigate = useNavigate();

  return (
    <div>
      <div className="footer">
  <img src={footerImg} alt="" />
  <div className="container">
    <div className="social">
      <a href="https://www.facebook.com/karunamayi.kss/" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-facebook fa-2x"></i>
      </a>
      <a href="https://www.instagram.com/karunamayi.kss/" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-instagram fa-2x"></i>
      </a>
      <a href="https://mobile.twitter.com/KarunamayiKSS" target="_blank" rel="noreferrer"
        ><i className="fa-brands fa-square-x-twitter fa-2x"></i>
      </a>
      <a href="https://chat.whatsapp.com/IMr73LeZzA57X6uI6a8DBd" target="_blank" rel="noreferrer"
        ><i className="fa-brands fa-whatsapp fa-2x"></i
      ></a>
      <a href="https://www.linkedin.com/company/karunamayi-kss/" target="_blank" rel="noreferrer"
        ><i className="fa-brands fa-linkedin fa-2x"></i
      ></a>
    </div>
    <div className="address">
      <h3>
        <i className="fa-solid fa-location-dot"></i> &nbsp;
        Reg. Office: 621, Takshal, Chowk, Ayodhya - 224001 (UP) Bharat
      </h3>
      <h3>
        <i className="fa-solid fa-location-dot"></i> &nbsp;
        Admin. Office: Maa Jalpa Pharmacy, Deokali Fatehganj Road, Ayodhya - 224001 (UP) Bharat      </h3>
      <h3><i className="fa-solid fa-envelope"></i> karunamayi.kss@gmail.com</h3>
      <h3><i className="fa-solid fa-phone"></i> 9450063566, 9026784739</h3>
    </div>
    <div className="copyright">
      <div className="signature"><p>@Copyright Karunamayi Sewa Sansthan</p></div>
      <div className="policy">
        <p  onClick={(e) => {
                  e.preventDefault();
                  navigate("/disclaimer");
                  window.scrollTo(0, 0);
                }}>Disclaimer</p>
        <p  onClick={(e) => {
                  e.preventDefault();
                  navigate("/privacy");
                  window.scrollTo(0, 0);
                }}>Privacy Policy</p>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Footer
