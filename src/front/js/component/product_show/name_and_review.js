import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalf } from "@fortawesome/free-solid-svg-icons";
import "../../../styles/product_show/name_and_review.css";
function Name_and_review({ jean }) {
  return (
    <div>
      <div className="row backBtn mb-3">
        <div className="col-2 d-flex">
          <Link to="/archive">
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="mt-2 me-2 backArrow"
            ></FontAwesomeIcon>
          </Link>
          <p>Jeans</p>
        </div>
      </div>
      <div className="row name">
        <h1 className="product-title px-4">
          {jean?.Product_Name_Taxonomy_US || "311 Shaping Skinny Women's Jeans"}
        </h1>
      </div>
      <div className="row review float-start mt-1 mb-4 pb-3 fa-stack ms-0 ">
        <div className="col-5"></div>
        <FontAwesomeIcon icon={faStar} className="fa-stack-1x ">
          test
        </FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faStar}
          className="fa-stack-1x star"
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faStar}
          className="fa-stack-1x star2 ps-5"
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faStarHalf}
          className="fa-stack-1x star3"
        ></FontAwesomeIcon>
      </div>
      <span className="numReviews ms-5  position-absolute ">(6)</span>
    </div>
  );
}

export default Name_and_review;
