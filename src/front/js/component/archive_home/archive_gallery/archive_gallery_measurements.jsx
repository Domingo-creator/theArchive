import React from 'react'
import wLImg from "../../../../img/PC9-W26_L28.png";
import '../../../../styles/archive_home/archive_gallery/archive_gallery_measurements.css'

const ArchiveGalleryMeasurements = ({waistInput, lengthInput, updateWaistInput, updateLengthInput, submitSelections}) => {

    const validateInputs = () => {
        return !Number.isNaN(parseInt(waistInput)) && !Number.isNaN(parseInt(lengthInput))
    }

    const submitMeasurements = () => {
        if(validateInputs()) {
            submitSelections();
        }
    }

    return(
        <div className='archive-gallery-measurements-container'>
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
                    <button className={validateInputs() ? 'gallery-next-button' : 'gallery-next-button disabled'} onClick={() => submitMeasurements()}>
                        Submit
                    </button>
            </div>
        </div>
    )
}

export default ArchiveGalleryMeasurements