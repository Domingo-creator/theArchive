import React, { useContext, useEffect, useState } from 'react'
import { leviDatabase } from '../../../util/levi_database'
import FilterSort from './filter_sort';
import ProductIndexItem from './product_index_item';
import { Context } from "../../store/appContext";
import { MatchPc9 } from '../../../util/levi_datatbase_util';
import PageNavigation from './page_navigation';

const ProductIndex = ({}) => {
    const { store, actions } = useContext(Context);
    const pc9 = store.pc9[0]?.pc9Input  || store.pc9[0];
    const [pc9Match, setPc9Match] = useState(MatchPc9(pc9));
    const [archiveFilterOn, setArchiveFilterOn] = useState( pc9 ? 
        sessionStorage.getItem('archiveFilterOn') === 'true' ? true : false 
        :
        false
        );
    const [curPage, setCurPage] = useState(0);
    const [numPerPage, setNumPerPage] = useState(6)
   

    console.log('archiveFilterOn', archiveFilterOn)
    return(
        <div className='product-list-container'>
            <FilterSort 
                archiveFilterOn={archiveFilterOn} 
                setArchiveFilterOn={setArchiveFilterOn} 
                itemCount={leviDatabase.length}
                pc9Match={pc9Match}
                setPc9Match={setPc9Match}
            />
            <div className='product-list'>
                {leviDatabase.slice(curPage * numPerPage, (curPage * numPerPage) + numPerPage).map( product => (
                    <ProductIndexItem product={product} pc9Match={pc9Match} archiveFilterOn={archiveFilterOn}/>
                ))}
            </div>
            <PageNavigation
                numPages={leviDatabase.length % numPerPage}
                curPage={curPage}
                setCurPage={setCurPage}
            />
        </div>
       
    )
}

export default ProductIndex;
