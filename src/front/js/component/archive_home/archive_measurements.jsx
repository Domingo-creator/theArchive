import React, { useContext, useState } from 'react';
import { Context } from '../../store/appContext';
import '../../../styles/archive_home/archive_measurements.css'
import measurementImage from '../../../img/Measurements_Image_.png'
import { Link } from 'react-router-dom';

const ArchiveMeasurements = ({}) => {
    const [waist, setWaist] = useState()
    const [inseam, setInseam] = useState();
    const [hip, setHip] = useState();
    const {store, actions} = useContext(Context)

    const updateWaist = (e) => setWaist(e.target.value);
    const updateInseam = (e) => setInseam(e.target.value);
    const updateHip = (e) => setHip(e.target.value);

    const handleSubmit = () => {
        if(checkValidations) {
            actions.addHip(hip)
            actions.addWaist(waist)
            actions.addLength(inseam)
        }
    }

    const checkValidations = () => {

    }

    return (
        <div className="measurements-container">
            <div className="measurements-headline">
                <div>INPUT YOUR</div>
                <div>MEASUREMENTS</div>
            </div>
            <div className='measurements-main'>
                <div className='measurements-section'>
                    <div className='measurement-details'>
                        <div>
                            <div><strong>Waist</strong></div>
                            <div>Place the tape horizontally around the smallest part of the waist.</div>
                        </div>
                        <div>
                            <div><strong>Hip</strong></div>
                            <div>Place the tape 20mm below the waist. Make sure not to move the tape up and down.</div>
                        </div>
                        <div>
                            <div><strong>Inseam:</strong></div>
                            <div>Place the tape on the inside of the leg and measure from the crotch to the ankle.</div>
                        </div>
                    </div>
                    <div className='measurement-inputs'>
                        <label><strong>W:</strong>
                            <input 
                                value={waist}
                                onChange={(e) => updateWaist(e)}
                            />
                        </label>
                        <label><strong>H:</strong>
                            <input 
                                value={hip}
                                onChange={(e) => updateHip(e)}
                            />
                        </label>
                        <label><strong>I:</strong>
                            <input 
                                value={inseam}
                                onChange={(e) => updateInseam(e)}
                            />
                        </label>
                    </div>
                </div>
                <div className="measurement-image">
                    <img src={measurementImage}/>
                </div>
            </div>
            <Link to='/jeans' onClick={handleSubmit}>Submit</Link>
        </div>
    )
}

export default ArchiveMeasurements;