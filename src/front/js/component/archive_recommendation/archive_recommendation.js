import React, { useEffect, useState, useContext } from "react";
import { ArchiveMatch, MatchPc9 } from "../../../util/levi_datatbase_util";
import ArchiveHeader from "./archive_header";
import PageNavigation from "./page_navigation";
import Pc9Result from "./pc9_result";
import { Context } from "../../store/appContext";
import RecommendationList from "./recommendation_list";
import RetiredFavorite from "./retired_favorite";

const ArchiveRecommendation = ({}) => {
  const { store, actions } = useContext(Context);
  const pc9 = store.pc9[0]?.pc9Input;
  const [matchingJean, setMatchingJean] = useState(MatchPc9(pc9));
  console.log("store", store);
  return (
    <div>
      <ArchiveHeader />
      <Pc9Result matchingJean={matchingJean} />
      <RetiredFavorite />
      <RecommendationList pc9={pc9} />
    </div>
  );
};

export default ArchiveRecommendation;
