import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import "../../../styles/archive_recommendation/recommendation_list_item.css";
import { getArchiveScore, getRandomJeanImage } from "../../../util/levi_datatbase_util";
import ArchiveMatchScore from "../archive_recommendation/archive_match_score";
import { Context } from "../../store/appContext";

const ProductIndexItem = ({product, pc9Match, filterOn}) => {
    if (!("ImgFront" in product)) product.ImgFront = getRandomJeanImage();
    if (!("Price" in product)) product.Price = 98.0;
    const { store, actions } = useContext(Context);
    const waistInput = store.waist[0];
    const lengthInput = store.length[0];


    return (
      <div className="product-list-item-container">
        <Link to="/browsingPage" state={{ jean: product }}>
          <div className="product-list-item-image">
            {filterOn ?
                <ArchiveMatchScore 
                    archiveRating={getArchiveScore(pc9Match,product,waistInput, lengthInput)} 
                />
            :
                <div className='hide'></div>
            }
            <img src={product?.ImgFront} />
          </div>
          <div className="product-list-item-details">
            <div>{product?.Product_Name_Taxonomy_US}</div>
            <div>
              <strong>${product?.Price.toFixed(2)}</strong>
            </div>
          </div>
        </Link>
      </div>
    );
}

export default ProductIndexItem;