import React, { useContext, useEffect, useState } from "react";
import RecommendationListItem from "./recomendation_list_item";
import "../../../styles/archive_recommendation/recommendation_list.css";
import { MatchPc9, paginateRecommendationList } from "../../../util/levi_datatbase_util";
import PageNavigation from "../product_index/page_navigation";
import FilterSort from "../product_index/filter_sort";
import { Context } from "../../store/appContext";

const RecommendationList = ({ pc9, numPerPage = 6 }) => {
  const { store, actions } = useContext(Context);
  const waistInput = store.waist[0];
  const lengthInput = store.length[0];
  const [pc9Match, setPc9Match] = useState(MatchPc9(pc9));
  const [recommendationList, setRecommendationList] = useState(
    paginateRecommendationList(pc9, numPerPage, waistInput, lengthInput) //
  );
  const [curPage, setCurPage] = useState(0);

  return (
    <div className="recommendation-list-container">
      <FilterSort
        itemCount={recommendationList?.flat().length || 0}
      ></FilterSort>
      <div className="recommendation-list-header">
        <div className="tenPx">Based on the PC9 code</div>
        <div className="fourteenPx">The Archive Reccomends</div>
      </div>
      <div className="recommendation-list">
        {recommendationList[curPage]?.map((match) => (
          <RecommendationListItem product={match} pc9Match={pc9Match}/>
        ))}
      </div>
      <PageNavigation
        numPages={recommendationList.length}
        curPage={curPage}
        setCurPage={setCurPage}
      />
    </div>
  );
};

export default RecommendationList;
