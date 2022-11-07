import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "../../../styles/archive_recommendation/filter_sort.css";
import FilterModal from "./filter_modal/filter_modal";

const FilterSort = ({ itemCount, archiveFilterOn, setArchiveFilterOn, pc9Match, setPc9Match }) => {
  const [filterModalOpen, setFilterModalOpen] = useState(false);

  const openFilterModal = () => setFilterModalOpen(true);
  const closeFilterModal = () => setFilterModalOpen(false);

  return (
    <div className="filter-sort">
      <div onClick={openFilterModal}>
        <FontAwesomeIcon icon={faArrowRightArrowLeft} />
        <div>Filter / Sort</div>
      </div>
      <div>
        {itemCount} item{itemCount == 1 ? "" : "s"}
      </div>
      <FilterModal
        filterModalOpen={filterModalOpen}
        closeFilterModal={closeFilterModal}
        archiveFilterOn={archiveFilterOn}
        setArchiveFilterOn={setArchiveFilterOn}
        pc9Match={pc9Match}
        setPc9Match={setPc9Match}
      />
    </div>
  );
};

export default FilterSort;
