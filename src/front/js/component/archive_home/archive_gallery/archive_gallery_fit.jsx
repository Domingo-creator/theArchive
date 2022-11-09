import React from 'react'
import HighLoose from '../../../../img/High_Loose_Fit.png'
import HighLooseTaper from '../../../../img/High_Loose_Taper_Fit.png'
import LooseStraight from '../../../../img/Loose_Straight_Fit.png'


const ArchiveGalleryFit = ({updateFit, advanceGallery}) => {
    const fitChoices =[
        {
         fit: 'High Loose', 
         description: ' It’s a modern interpretation of a classic ‘90s style. These jeans sit super high on your waist and are relaxed through your hip and thigh.', 
         img: HighLoose, 
         key: ''
        },
        {fit: 'High Loose Taper', 
         description: 'The ‘90s are back—in a big, loose, straight way. Equal parts comfortable and cool, these jeans sit easy at the waist and stack at the hem.',
         img: HighLooseTaper,
         key: ''
        },
        {   
         fit: 'Loose Straight', 
         description: 'These jeans are—you guessed it—super-high, loose and tapered, so they’ll flatter your waist and your shoes.',
         img: LooseStraight,
         key: ''
        }
    ]

    const selectFit = (selectedFit) => {
        updateFit(selectedFit)
        advanceGallery();
    }

    return(
        <div className='archive-gallery-fit'>
            {fitChoices.map( fitChoice => (
                <div onClick={() => selectFit(fitChoice.key)} >
                    <img src={fitChoice.img} value={fitChoice.key}/>
                    <div>{fitChoice.fit}</div>
                    <div>{fitChoice.description}</div>
                </div>
            ))}
        </div>
    )
}

export default ArchiveGalleryFit;