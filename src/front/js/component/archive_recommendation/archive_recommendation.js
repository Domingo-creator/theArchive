import React, { useEffect, useState, useContext } from "react";
import { ArchiveMatch, getArchiveMatches, MatchPc9 } from "../../../util/levi_datatbase_util";
import ArchiveHeader from "./archive_header";
import PageNavigation from "../product_index/page_navigation";
import Pc9Result from "./pc9_result";
import { Context } from "../../store/appContext";
import RecommendationList from "./recommendation_list";
import RetiredFavorite from "./retired_favorite";
import ProductIndex from "../product_index/product_index";

const ArchiveRecommendation = ({}) => {
  const { store, actions } = useContext(Context);
  const pc9 = store.pc9[0]?.pc9Input;  
  const waistInput = store.waist[0] 
  const lengthInput = store.length[0]
  const [matchingJean, setMatchingJean] = useState(pc9 ? MatchPc9(pc9) : null);
  sessionStorage.setItem('archiveFilterOn', true);
  
  return (
    <div>
      <ArchiveHeader />
      <Pc9Result matchingJean={matchingJean} />
      <RetiredFavorite />
      {/* <RecommendationList pc9={pc9} /> */}
      {matchingJean ?
        <ProductIndex products={getArchiveMatches(matchingJean, waistInput, lengthInput)}/>
        :
        <></>
      }
    </div>
  );
};

export default ArchiveRecommendation;
