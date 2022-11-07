import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { Link, useLocation } from "react-router-dom";
import { leviDatabase } from "../../../util/levi_database";

function ArchiveTxt({archiveScore}) {
  const location = useLocation();
  const { jean } = location.state;
  const { store, actions } = useContext(Context);
  let waistInput = store?.waist[0];
  let pc9Input = store?.pc9[0]?.pc9Input;
  let pc9Match = leviDatabase.filter(
    (product) => product.Identifier == pc9Input
  );
  let waistHomeAvg = pc9Match[0]?.Waist[waistInput];
  let waistStoreAvg = jean?.Waist[waistInput];
  {
    if (waistHomeAvg == waistStoreAvg) {
      return (
        <div>
          <p>
            This item is a<span className="fw-bold"> {archiveScore}% </span>
            match <br />
            as on overall fit, the waist <br /> should fit just right.
          </p>
        </div>
      );
    } else if (waistHomeAvg < waistStoreAvg) {
      return (
        <div>
          <p>
            This item is a<span className="fw-bold"> {archiveScore}% </span>
            match <br />
            as on overall fit, but the waist <br /> may be on the looser side.
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <p>
            This item is a<span className="fw-bold"> {archiveScore}% </span>
            match <br />
            as on overall fit, but the waist <br /> may be on the tighter side.
          </p>
        </div>
      );
    }
  }
}

export default ArchiveTxt;
