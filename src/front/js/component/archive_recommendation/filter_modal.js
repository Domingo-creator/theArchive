import React from "react";

const FilterModal = ({ filterModalOpen, closeFilterModal }) => {
  return <div className={filterModalOpen ? "" : "hide"}></div>;
};

export default FilterModal;
