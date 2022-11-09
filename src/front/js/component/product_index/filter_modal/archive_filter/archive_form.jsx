 import React, { useContext } from 'react'
// import { MatchPc9 } from '../../../../../util/levi_datatbase_util';
// import { Context } from '../../../../store/appContext';
import '../../../../../styles/product_index/archive_form.css'
import { Context } from '../../../../store/appContext'

 const ArchiveModalForm = ({ waistInput,
  updateWaistInput,
  lengthInput,
  updateLengthInput,
  pc9Input,
  updatePc9Input,
  closeArchiveForm,
  submitForm
 }) => {

    const {store, actions} = useContext(Context)

    return(
        <form className='archive-modal-form' onSubmit={(e) => submitForm(e)}>
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
          <button>See Archive Results</button>
          <button className={store.pc9Match ? '' : 'hide'}type="button" onClick={closeArchiveForm}>Cancel</button>
        </form>
    )
 }

 export default ArchiveModalForm