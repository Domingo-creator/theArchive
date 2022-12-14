import React, { useContext } from "react";
import "../../../styles/archiveBox.css";
import MatchBar from "./matchBar";
import ArchiveTxt from "./archiveTxt";
import { CircleProgress } from "react-gradient-progress";
import { getArchiveScore, MatchPc9 } from "../../../util/levi_datatbase_util";
import { Context } from "../../store/appContext";

const ArchiveBox = ({jean}) => {
  const { store, actions } = useContext(Context);
  const archiveScore = jean.match || getArchiveScore(store.pc9Match, jean, store.waist[0], store.length[0])

  return (
    <div className="border border-muted rounded">
      <div className="d-flex p-3">
        <div className="h6 me-4">
          <p className="fw-bold">Archive</p>
          <ArchiveTxt archiveScore={archiveScore}/>
        </div>

        <div className="p-1" id="background">
          <CircleProgress
            percentage={archiveScore}
            strokeWidth={8}
            width={120}
            fontSize={24}
            fontColor={"black"}
            strokeLinecap={"square"}
            primaryColor={["#A6253F", "#A6253F"]}
            secondaryColor={"white"}
          />
        </div>
      </div>

      {/* <div>
        <img src="https://i.imgur.com/3QhESmN.png" width="95%" />
      </div> */}
      <MatchBar />

      <div className="d-flex">
        <a href="" className="text-dark font-weight-bold p-2">
          View Fit Details
        </a>

        <a href="" className="text-danger ml-auto p-2">
          Browse Similar Products
        </a>
      </div>
    </div>
  );
}

export default ArchiveBox;
