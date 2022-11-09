import React, { useContext } from "react";
import "../../../styles/archive_recommendation/pc9_result.css";
import { getRandomJeanImage } from "../../../util/levi_datatbase_util";
import { Context } from "../../store/appContext";

const Pc9Result = ({ }) => {
  const {store, actions} = useContext(Context)
  return (
    <div>
      <img
        src={store.pc9Match?.ImgFront || getRandomJeanImage()}
        className="pc9-result-photo"
      ></img>
      <div className="pc9-result-details">
        {store.pc9Match?.Product_Name_Taxonomy_US}
      </div>
    </div>
  );
};

export default Pc9Result;
