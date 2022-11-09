import React from 'react'
import BootcutImg from '../../../../img/Bootcut_Style.png'
import LooseImg from '../../../../img/Loose_Style.png'
import SkinnyImg from '../../../../img/Skinny_Style.png'
import SlimImg from '../../../../img/Slim_Style.png'
import StraightImg from '../../../../img/Straight_Style.avif'
// import TaperedImg from '../../../../img/Tapered_Style.avif'

const ArchiveGalleryStyle = ({updateStyle, advanceGallery}) => {
    const styleChoices =[
        {style: 'Straight Jeans',img: StraightImg, key: 'Straight'},
        {style: 'Skinny Jeans',img: SkinnyImg ,key: 'Skinny'},
        {style: 'Loose Jeans',img: LooseImg, key: 'Loose'},
        {style: 'Bootcut Jeans',img: BootcutImg, key: 'Bootcut'},
        {style: 'Slim Jeans',img: SlimImg, key: 'Slim'},
        // {style: 'Tapered Jeans',img: TaperedImg},
    ]

    const selectStyle = (selectedStyle) => {
        updateStyle(selectedStyle)
        advanceGallery();
    }

    return(
        <div className='archive-gallery-style'>
            {styleChoices.map( styleChoice => (
                <div onClick={() => selectStyle(styleChoice.key)} >
                    <img src={styleChoice.img}/>
                    <div>{styleChoice.style}</div>
                </div>
            ))}
        </div>
    )
}

export default ArchiveGalleryStyle;