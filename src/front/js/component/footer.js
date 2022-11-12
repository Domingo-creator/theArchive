import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/footer.css'

const Footer = ({}) => {
  const [email, setEmail] = useState();
  const updateEmail = (e) => setEmail(e.target.value)

  return (
    <footer className="footer">
      <div>#LIVEINLEVIS</div>
      <div>
          <img src=''/>
      </div>
      <div>
        <div>Shipping</div>
        <div>20% OFF + FREE</div>
      </div>
      <div>For All New Levi's Email Subscribers.</div>
      <input
        value={email}
        onChange={(e) => updateEmail(e)}
        placeholder="Email"
      />
      <div>
        <div>Send me news and offers from the LS&Co. Group of Companies. I</div>
        <div>can <Link >unsubscribe</Link></div>
        <div>at any time. I have read the LS&Co. <Link>Privacy Policy.</Link> Offer details,</div>
        <div>financial incentives and exclusions available <Link>here</Link></div>
      </div>
      <button>Sign Up</button>
      <div>
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
