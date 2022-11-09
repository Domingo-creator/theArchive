import React from 'react'
import BlackWash from '../../../../img/Black_Wash.png'
import DarkBlueWash from '../../../../img/Dark_Blue_Wash.png'
import LightWash from '../../../../img/Light_Wash.png'
import MediumBlueWash from '../../../../img/Medium_Blue_Wash.png'

const ArchiveGalleryWash = ({ updateWash, advanceGallery}) => {
    const washChoices =[
        {wash: 'Black', img: BlackWash, key: 'Black'},
        {wash: 'Dark Blue', img: DarkBlueWash, key: 'Dark Wash'},
        {wash: 'Light', img: LightWash, key: 'Light Wash'},
        {wash: 'Medium Blue', img: MediumBlueWash, key: 'Medium Wash'},
    ]

    const selectWash = (selectedWash) => {
        // console.log(e.target)
        updateWash(selectedWash)
        advanceGallery();
    }

    return(
        <div className='archive-gallery-wash'>
            {washChoices.map( washChoice => (
                <div className='archive-gallery-choice' onClick={() => selectWash(washChoice.key)} value={washChoice.key}>
                    <img src={washChoice.img} />
                    <div>{washChoice.wash}</div>
                </div>
            ))}
        </div>
    )
}

export default ArchiveGalleryWash