import React from 'react'
import { Link } from 'react-router-dom'

const ArchiveHome = ({}) => {
    return(
        <div>
            <div className="archive-levis-customer">
                <div>
                   <Link className="button" to="/archive/pc9/waist-length">I have it</Link>
                </div>
                <div>
                   <Link className="button" to="/archive/gallery">I dont have it</Link>
                </div>
            </div>
            <div className="archive-new-customer">
                <Link className='button' to="/archive/measurements">Measurements</Link>
            </div>
        </div>
    )
}

export default ArchiveHome