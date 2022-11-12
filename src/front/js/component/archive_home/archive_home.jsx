import React from 'react'
import { Link } from 'react-router-dom'
import '../../../styles/archive_home/archive_home.css'
import ArchiveHomeImage from '../../../img/The_Archive_Landing_Page_Video.png'

const ArchiveHome = ({}) => {
    return(
        <div className='archive-home-container'>
            <div className="archive-home-header">
                <div className='archive-home-title'>The Archive</div>
                <div>A destination where evryone of all sizes and body types 
                    can find their best fitting Levi's jeans in just a few simple steps.
                </div>
            </div>
            <div className='archive-home-main-image'>
                <img  src={ArchiveHomeImage} />
            </div>
            <div clasName='archive-home-details'>
                <div className='archive-home-large'>LEVI'S JEANS: TAG OR NO TAG?</div>
                <div>By inputting the <strong>PC9 code or style, wash, and 
                    size of your jeans</strong>, the Archive will be able to 
                    generate results that are <strong>accurate</strong> to your 
                    preferences.
                </div>
            </div>
            <div className="archive-levis-customer">
                <div className='archive-levis-customer-left'>
                    <div>
                        <div className='archive-home-pc9-tag'>
                            <div>- - - - - - - -</div>
                            <div>PC-53797-0008</div>
                            <div>W 26 L 32</div>
                        </div>
                        <div className='archive-home-large'>PC9 Code</div>
                        <div className='archive-home-small'>PC9 Code is found on your jeans tag and holds all key details needed</div>
                    </div>
                    <Link to="/archive/pc9/waist-length"><button>I have it</button></Link>
                </div>
                <div>
                    <div>
                        <div className='archive-home-large'>No PC9 Code</div>
                        <div className='archive-home-small'>Find your specific jeans amongst our virtual gallery</div>
                    </div>
                    <Link to="/archive/gallery"><button>I don't have it</button></Link>
                </div>
            </div>
            <div className="archive-new-customer">
                <div className='archive-home-large'>NEW CUSTOMER</div>
                <div className='archive-home-medium'>
                    If you are a new Levi's owner, all you need to 
                    do is <strong>input your measurements</strong> and the 
                    Archive will be able to generate results that are 
                    <strong>close to your desired fit.</strong>
                </div>
                <Link to="/archive/measurements"><button>Measurements</button></Link>
            </div>
        </div>
    )
}

export default ArchiveHome