import React, { useContext, useState } from 'react'
import { MatchPc9 } from '../../../../../util/levi_datatbase_util';
import { Context } from '../../../../store/appContext';
import ArchiveModalForm from './archive_form';
import '../../../../../styles/product_index/archive_filter.css'


const ArchiveFilter = ({ archiveFilterOn, setArchiveFilterOn, pc9Match, setPc9Match, closeFilterModal}) => {
    const { store, actions } = useContext(Context);
    const [waistInput, setWaistInput] = useState(store.waist[0]);
    const [lengthInput, setLengthInput] = useState(store.length[0]);
    const [pc9Input, setPc9Input] = useState(store.pc9[0]?.pc9Input || store.pc9[0]);
    const [archiveFormOpen, setArchiveFormOpen] = useState(!store.pc9[0]?.pc9Input && !store.pc9[0])
    const [archiveErrors, setArchiveErrors] = useState([]);

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
        let matchedPc9 = MatchPc9(pc9Input)
        if(checkValidInputs(matchedPc9)) {
            actions.addPc9(pc9Input);
            actions.addWaist(waistInput);
            actions.addLength(lengthInput);
            setPc9Match(matchedPc9);
            setArchiveFormOpen(false)
            setArchiveFilterOn(true);
            closeFilterModal();
        } 
    }

    const checkValidInputs = (matchedPc9) => {
        let errors = []
        //validate pc9
        if(matchedPc9 == undefined) errors.push('No matching PC9 found')
        //validate waist
        if(waistInput == undefined) errors.push('Please enter waist size')
        //validate length
        if(lengthInput == undefined) errors.push('Please enter length')
        setArchiveErrors(errors);
        console.log(errors)
        return errors.length ? false : true;
    }

    console.log(archiveErrors.map( error => error))
    return(
        <div>
            {archiveFormOpen ? 
                <div>
                    <div className='archive-modal-form-errors'>
                        {archiveErrors.map( error => (
                            <div>ERROR: {error}</div>
                        ))}
                    </div>
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
                </div>
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


