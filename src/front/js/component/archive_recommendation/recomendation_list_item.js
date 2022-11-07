import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/archive_recommendation/recommendation_list_item.css";
import { getRandomJeanImage } from "../../../util/levi_datatbase_util";
import ArchiveMatchScore from "../product_index/archive_match_score";

const RecommendationListItem = ({ product = {}, pc9Match }) => {
  if (!("ImgFront" in product)) product.ImgFront = getRandomJeanImage();
  if (!("Price" in product)) product.Price = 98.0;
  return (
    <div className="recommendation-list-item-container">
      <Link to="/browsingPage" state={{ jean: product, pc9Match: pc9Match }}>
        <div className="recommendation-list-item-image">
          <ArchiveMatchScore archiveRating={product?.match} pc9Match={pc9Match} />
          <img src={product?.ImgFront} />
        </div>
        <div className="recommendation-list-item-details">
          <div>{product?.Product_Name_Taxonomy_US}</div>
          <div>
            <strong>${product?.Price.toFixed(2)}</strong>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RecommendationListItem;
