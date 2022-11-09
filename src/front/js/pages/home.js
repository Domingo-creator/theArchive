import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Click_photo from "../component/product_show/click_photo";
import Size_and_color from "../component/product_show/size_and_color";
import { WaistAndLength } from "../component/product_show/waist_and_length";
import Name_and_review from "../component/product_show/name_and_review";
import AddToBag from "../component/product_show/add_to_bag";
import WhatsMySize from "../component/product_show/whats_my_size";
import { Footer } from "../component/footer";
import ProductPrice from "../component/product_show/product_price";
import ShippingAndQuantity from "../component/product_show/shipping_and_quantity";
import ArchiveBox from "../component/product_show/Archive_box";
import { Link, useLocation } from "react-router-dom";
import { getArchiveScore } from "../../util/levi_datatbase_util";

export const Home = ({}) => {
  const location = useLocation();
  const { jean } = location.state;
  const {store, action} = useContext(Context)

  return (
    <div className="container px-0 ">
      {/* navbar in navbar.js and layout.js */}

      <div className="text-center">
        <hr className="solid" />
        <div>
          <p>
            <img src="https://i.imgur.com/Byxw9LD.png" height="20px" />
            Visit the Archive for a perfect fit.{" "}
            <img src="https://i.imgur.com/hVTiMmi.png" height="20px" />
          </p>
        </div>
        <hr class="solid" />
      </div>

      <div className="row reviews px-3">
        <Name_and_review jean={jean} />
      </div>

      <div className="row productPrice hide-in-mobile-view">
        <ProductPrice jean={jean} />
      </div>
      <div className="row clickPhotos">
        <Click_photo jean={jean} />
      </div>

      <br />
      {store.pc9Match ?
          <ArchiveBox jean={jean}/>
        :
          <></>
      }

      <div className="row sizeColor">
        <Size_and_color jean={jean} />
      </div>
      <div className="row whatsMySize">
        <WhatsMySize />
      </div>
      <div className="row waistAndLength">
        <WaistAndLength product={jean} />
      </div>
      <div className="row addToBag hide-in-mobile-view">
        <AddToBag />
      </div>
      <div className="row productPrice hide-in-web-view">
        <ProductPrice jean={jean} />
      </div>
      <div className="row shippingAndQuantity">
        <ShippingAndQuantity />
      </div>
      <div className="hide-in-web-view">
        <AddToBag />
      </div>
    </div>
  );
};
