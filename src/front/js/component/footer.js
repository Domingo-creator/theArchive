import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/footer.css'
import FooterImage from '../../img/footer_image.png'

const Footer = ({}) => {
  const [email, setEmail] = useState();
  const updateEmail = (e) => setEmail(e.target.value)

  return (
    <footer className="footer">
      <div className='footer-header'>#LIVEINLEVIS</div>
      <div className="footer-image">
          <img src={FooterImage}/>
      </div>
      <div className='footer-large'>
        <div>Shipping</div>
        <div>20% OFF + FREE</div>
      </div>
      <div className="footer-small">For All New Levi's Email Subscribers.</div>
      <input
        value={email}
        onChange={(e) => updateEmail(e)}
        placeholder="Email"
      />
      <div className='footer-small'>
        <div>Send me news and offers from the LS&Co. Group of Companies. I</div>
        <div>can <Link >unsubscribe</Link></div>
        <div>at any time. I have read the LS&Co. <Link>Privacy Policy.</Link> Offer details,</div>
        <div>financial incentives and exclusions available <Link>here</Link></div>
      </div>
      <div className="center">
        <button>Sign Up</button>
      </div>
      <div className='footer-medium'>
        <div>Special Discounts</div>
        <div>Support</div>
        <div>Company</div>
        <div>Store</div>
        <div>Our Brands</div>
      </div>
      <div>Download the Levi's App</div>
      <div>
        <img src=''/>
        <img src=''/>
      </div>
      <div>
        <div>CA Do Not Sell My Personal Information</div>
        <div>Sitemap</div>
        <div>Privacy Policy</div>
        <div>Terms Of Use</div>
        <div>Offer Terms</div>
        <div>CA Suppy Chain</div>
      </div>
      <div>
        <div>2022 LEVI STRAUSS & CO</div>
      </div>
    </footer>
  )
};

export default Footer;
