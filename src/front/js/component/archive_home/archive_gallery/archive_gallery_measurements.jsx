import React from 'react'
import { Link } from 'react-router-dom';
import wLImg from "../../../../img/PC9-W26_L28.png";

const ArchiveGalleryMeasurements = ({waistInput, lengthInput, updateWaistInput, updateLengthInput, submitSelections}) => {
    
    return(
        <div className='archive-gallery-measurements'>
            <div>Input the waist and length measurments found on the front of your Levi Jean's care tag.</div>
            <img src={wLImg} />
            <div>
                <label>
                    <strong>W:</strong>
                    <input
                        value={waistInput}
                        onChange={(e) => updateWaistInput(e)}
                    />
                </label>
                <label>
                    <strong>L:</strong>
                    <input
                        value={lengthInput}
                        onChange={(e) => updateLengthInput(e)}
                    />
                </label>
            </div>
            <Link to='/jeans' onClick={submitSelections} className='link-button'>Submit</Link>
        </div>
    )
}

export default ArchiveGalleryMeasurements