import React from 'react'
import HighLoose from '../../../../img/High_Loose_Fit.png'
import HighLooseTaper from '../../../../img/High_Loose_Taper_Fit.png'
import LooseStraight from '../../../../img/Loose_Straight_Fit.png'
import '../../../../styles/archive_home/archive_gallery/archive_gallery_fit.css'

const ArchiveGalleryFit = ({fit, updateFit, advanceGallery}) => {
    const fitChoices =[
        {
         fit: 'High Loose', 
         description: ' It’s a modern interpretation of a classic ‘90s style. These jeans sit super high on your waist and are relaxed through your hip and thigh.', 
         img: HighLoose, 
         key: 'High Loose'
        },
        {fit: 'High Loose Taper', 
         description: 'The ‘90s are back—in a big, loose, straight way. Equal parts comfortable and cool, these jeans sit easy at the waist and stack at the hem.',
         img: HighLooseTaper,
         key: 'High Loose Taper'
        },
        {   
         fit: 'Loose Straight', 
         description: 'These jeans are—you guessed it—super-high, loose and tapered, so they’ll flatter your waist and your shoes.',
         img: LooseStraight,
         key: 'Loose Straight'
        }
    ]


    return(
        <div className='archive-gallery-fit-container'>
            <div className='archive-gallery-fit'>
                {fitChoices.map( fitChoice => (
                    <div onClick={() => updateFit(fitChoice.key)} >
                        <img src={fitChoice.img} className={fit === fitChoice.key ? 'highlight' : ''}/>
                        <div>{fitChoice.fit}</div>
                        <div>{fitChoice.description}</div>
                    </div>
                ))}
            </div>
            <button className={fit ? 'gallery-next-button' : 'gallery-next-button disabled'} onClick={() => advanceGallery(fit)}>Next</button>
        </div>
    )
}

export default ArchiveGalleryFit;