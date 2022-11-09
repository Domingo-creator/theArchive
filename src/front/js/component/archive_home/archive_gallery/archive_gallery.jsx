import React, { useContext, useState } from 'react'
import { Context } from '../../../store/appContext';
import ArchiveGalleryFit from './archive_gallery_fit';
import ArchiveGalleryMeasurements from './archive_gallery_measurements';
import ArchiveGalleryStyle from './archive_gallery_style';
import ArchiveGalleryWash from './archive_gallery_wash';

const ArchiveGallery = ({}) => {
    const headlines = [ "WHAT IS YOUR JEAN STYLE", 
                        "WHAT IS YOUR JEAN FIT",
                        "WHAT IS YOUR JEAN WASH", 
                        "WHAT ARE YOUR JEAN MEASUREMENTS"]
    const [curCategoryIndex, setCurCategoryIndex] = useState(0);
    const [style, setStyle] = useState();
    const [fit, setFit] = useState();
    const [wash, setWash] = useState();
    const [lengthInput, setLengthInput] = useState();
    const [waistInput, setWaistInput] = useState();
    const { store, actions } = useContext(Context);

    const updateStyle = (selectedStyle) => setStyle(selectedStyle)       
    const updateFit = (selectedFit) => setFit(selectedFit)    
    const updateWash = (selectedWash) => setWash(selectedWash)
    const updateWaistInput = (e) => setWaistInput(e.target.value)
    const updateLengthInput = (e) => setLengthInput(e.target.value)
    
    const advanceGallery = () => setCurCategoryIndex(curCategoryIndex + 1)

    const submitSelections = () => {
        let selectionObject = { 
                                Gender_Taxonomy_US: "Women", // Default
                                Fit_Taxonomy_US: style,
                                Color_Group_Taxonomy_US: wash,
                                Size_Group_Taxonomy_US: "Womens",  // Default
                              }
        console.log(selectionObject)
        actions.addWaist(waistInput)
        actions.addLength(lengthInput)
        actions.addPc9Match(selectionObject);
        sessionStorage.setItem('archiveFilterOn', true);
    }

    const getCurrentCategoryList = () => {
        switch (curCategoryIndex) {
            case 0:
                return <ArchiveGalleryStyle updateStyle={updateStyle} advanceGallery={advanceGallery}/>
            case 1:
                return <ArchiveGalleryFit updateFit={updateFit} advanceGallery={advanceGallery}/>
            case 2:
                return <ArchiveGalleryWash updateWash={updateWash} advanceGallery={advanceGallery}/>
            case 3:
                return <ArchiveGalleryMeasurements 
                            waistInput={waistInput} 
                            lengthInput={lengthInput} 
                            updateWaistInput={updateWaistInput} 
                            updateLengthInput={updateLengthInput}
                            submitSelections={submitSelections}
                        />
            default:
                return
        }
    }

    return (
        <div>
            <div className="gallery-headline">{headlines[curCategoryIndex]}</div>
            {getCurrentCategoryList()}
        </div>
    )
}

export default ArchiveGallery;