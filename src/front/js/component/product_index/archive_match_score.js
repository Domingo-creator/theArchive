import React from "react";
import "../../../styles/archive_recommendation/archive_match_score.css";
import { CircleProgress } from "react-gradient-progress";

const ArchiveMatchScore = ({ archiveRating }) => {
  return (
    <div className="archive-score">
      <CircleProgress
        percentage={archiveRating}
        strokeWidth={8}
        width={70}
        fontSize={11.6}
        fontColor={"black"}
        strokeLinecap={"square"}
        primaryColor={["#A6253F", "#A6253F"]}
        secondaryColor={"white"}
      />
    </div>
  );
};

export default ArchiveMatchScore;
