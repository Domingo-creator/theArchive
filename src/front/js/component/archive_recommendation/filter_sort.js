import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "../../../styles/archive_recommendation/filter_sort.css";
import FilterModal from "./filter_modal";

const FilterSort = ({ itemCount, filterOn }) => {
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
      />
    </div>
  );
};

export default FilterSort;
