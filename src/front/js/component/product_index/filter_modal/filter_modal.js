import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import "../../../../styles/archive_recommendation/filter_modal.css";
import { MatchPc9 } from "../../../../util/levi_datatbase_util";
import { Context } from "../../../store/appContext";
import ArchiveFilter from "./archive_filter/archive_filter";
import ArchiveModalForm from "./archive_filter/archive_form";

const FilterModal = ({ filterModalOpen, closeFilterModal, archiveFilterOn, setArchiveFilterOn, pc9Match, setPc9Match }) => {
  
  // if(!filterModalOpen) return <></>
  return (
    <div>
      <div className={filterModalOpen ? 'overlay' : ''} />
      <div className={filterModalOpen ? "filter-modal-open" : "filter-modal-close"}>
        <div className="filter-sort">
          <div >
            <FontAwesomeIcon icon={faArrowRightArrowLeft} />
            <div>Filter / Sort</div>
          </div>
          <button className='modal-close-button' onClick={closeFilterModal}>X</button>
        </div>
        <ArchiveFilter 
          archiveFilterOn={archiveFilterOn}
          setArchiveFilterOn={setArchiveFilterOn}
          pc9Match={pc9Match}
          setPc9Match={setPc9Match}
          closeFilterModal={closeFilterModal}
        />
      </div>
    </div>
  );
};

export default FilterModal;
