import React, { useContext, useState } from 'react'
import { MatchPc9 } from '../../../../../util/levi_datatbase_util';
import { Context } from '../../../../store/appContext';
import ArchiveModalForm from './archive_form';

const ArchiveFilter = ({ archiveFilterOn, setArchiveFilterOn, pc9Match, setPc9Match, closeFilterModal}) => {
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
        setPc9Match(MatchPc9(pc9Input));
        setArchiveFormOpen(false)
        setArchiveFilterOn(true);
        closeFilterModal();
      }

    return(
        <div>
            {archiveFormOpen ? 
                <ArchiveModalForm 
                    waistInput={waistInput}
                    updateWaistInput={updateWaistInput}
                    lengthInput={lengthInput}
                    updateLengthInput={updateLengthInput}
                    pc9Input={pc9Input}
                    updatePc9Input={updatePc9Input}
                    closeArchiveForm={closeArchiveForm}
                    pc9Match={pc9Match}
                    submitForm={submitForm}
                />
            :
                <></>
            }
    
            {!archiveFormOpen && pc9Match ? 
              <div>
                <div>
                  You have selected {pc9Match.Product_Name_Taxonomy_US} in size {waistInput} x {lengthInput} as your best fitting jeans.
                  <span className='link' onClick={resetArchiveForm}>Click here</span> to change your best fitting jeans.
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

    )
}

export default ArchiveFilter;


