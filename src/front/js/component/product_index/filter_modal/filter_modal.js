import React, { useContext, useState } from "react";
import "../../../../styles/archive_recommendation/filter_modal.css";
import { MatchPc9 } from "../../../../util/levi_datatbase_util";
import { Context } from "../../../store/appContext";

const FilterModal = ({ filterModalOpen, closeFilterModal, archiveFilterOn, setArchiveFilterOn, pc9Match, setPc9Match }) => {
  const { store, actions } = useContext(Context);
  const [waistInput, setWaistInput] = useState(store.waist[0]);
  const [lengthInput, setLengthInput] = useState(store.length[0]);
  const [pc9Input, setPc9Input] = useState(store.pc9[0]?.pc9Input || store.pc9[0]);
  const [archiveFormOpen, setArchiveFormOpen] = useState(!store.pc9[0]?.pc9Input && !store.pc9[0])

  const updateWaistInput = e => setWaistInput(e.target.value)
  const updateLengthInput = e => setLengthInput(e.target.value)
  const updatePc9Input = e => setPc9Input(e.target.value)
  const closeArchiveForm = () => setArchiveFormOpen(false)
  const resetArchiveForm = () => {
    setArchiveFormOpen(true)
    setWaistInput('')
    setLengthInput('')
    setPc9Input('')
  }
  const updateArchiveFilterOn = () =>  {
    sessionStorage.setItem('archiveFilterOn', !archiveFilterOn)
    setArchiveFilterOn(!archiveFilterOn)
  }


  const submitForm = (e) => {
    e.preventDefault();
    actions.addPc9(pc9Input);
    actions.addWaist(waistInput);
    actions.addLength(lengthInput);
    setPc9Match(MatchPc9(pc9Input))
    setArchiveFormOpen(false)
    // closeFilterModal();
  }

  return (
    <div className={filterModalOpen ? "filter-modal" : "hide"}>
      {archiveFormOpen ? 
        <form onSubmit={(e) => submitForm(e)}>
          <input
            type="text"
            placeholder="Waist"
            value={waistInput}
            onChange={updateWaistInput}
          />
          <input
            type="text"
            placeholder="Length"
            value={lengthInput}
            onChange={updateLengthInput}
          />
          <input
            type="text"
            placeholder="PC-9"
            value={pc9Input}
            onChange={updatePc9Input}
          />
          <button>Set as Archive Perfect Fit jean</button>
          <button className={pc9Match ? '' : 'hide'}type="button" onClick={closeArchiveForm}>Cancel</button>
        </form>
        :
          <></>
      }

      {pc9Match ?
          <div>
            <div>
              You have selected {pc9Match.Product_Name_Taxonomy_US} in size {waistInput} x {lengthInput} as your best fitting jeans.
              <span onClick={resetArchiveForm}>Click here</span> to change your best fitting jeans.
            </div>
            <div className='filter-switch'>
              <label class="switch">
                <input type="checkbox" onChange={updateArchiveFilterOn} checked={archiveFilterOn}/>
                <span class="slider round"></span>
              </label>
            </div>
          </div>
        :
          <></>
      }

    </div>
  );
};

export default FilterModal;
