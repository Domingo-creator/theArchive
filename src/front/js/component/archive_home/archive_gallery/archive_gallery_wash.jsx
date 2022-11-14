import React from 'react'
import BlackWash from '../../../../img/Black_Wash.png'
import DarkBlueWash from '../../../../img/Dark_Blue_Wash.png'
import LightWash from '../../../../img/Light_Wash.png'
import MediumBlueWash from '../../../../img/Medium_Blue_Wash.png'
import '../../../../styles/archive_home/archive_gallery/archive_gallery_wash.css'


const ArchiveGalleryWash = ({ wash, updateWash, advanceGallery}) => {
    const washChoices =[
        {wash: 'Black', img: BlackWash, key: 'Black'},
        {wash: 'Dark Blue', img: DarkBlueWash, key: 'Dark Wash'},
        {wash: 'Light', img: LightWash, key: 'Light Wash'},
        {wash: 'Medium Blue', img: MediumBlueWash, key: 'Medium Wash'},
    ]

    return(
        <div className='archive-gallery-wash-container'>
            <div className='archive-gallery-wash'>
                {washChoices.map( washChoice => (
                    <div onClick={() => updateWash(washChoice.key)} >
                        <img src={washChoice.img} className={wash === washChoice.key ? 'highlight' : ''}/>
                        <div>{washChoice.wash}</div>
                    </div>
                ))}
            </div>
            <button className={wash ? 'gallery-next-button' : 'gallery-next-button disabled'} onClick={() => advanceGallery(wash)}>Next</button>
        </div>
    )
}

export default ArchiveGalleryWash