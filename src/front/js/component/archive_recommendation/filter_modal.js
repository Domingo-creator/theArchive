import React from "react";

const FilterModal = ({ filterModalOpen, closeFilterModal, filterOn, setFilterOn }) => {
  const updateFilterOn = () => setFilterOn(!filterOn)

  return (
    <div className={filterModalOpen ? "" : "hide"}>
      <div className='filter-switch'>
        <label class="switch">
          <input type="checkbox" onChange={updateFilterOn} checked={filterOn}/>
          <span class="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default FilterModal;
