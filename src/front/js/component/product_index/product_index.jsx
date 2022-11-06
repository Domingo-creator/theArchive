import React, { useContext, useState } from 'react'
import { leviDatabase } from '../../../util/levi_database'
import FilterSort from '../archive_recommendation/filter_sort';
import ProductIndexItem from './product_index_item';
import { Context } from "../../store/appContext";
import { MatchPc9 } from '../../../util/levi_datatbase_util';
import PageNavigation from '../archive_recommendation/page_navigation';

const ProductIndex = ({}) => {
    const { store, actions } = useContext(Context);
    const pc9 = store.pc9[0]?.pc9Input;
    const [pc9Match, setPc9Match] = useState(MatchPc9(pc9));
    const [filterOn, setFilterOn] = useState(false);
    const [curPage, setCurPage] = useState(0);
    const [numPerPage, setNumPerPage] = useState(6)

    return(
        <div className='product-list-container'>
            <FilterSort 
                filterOn={filterOn} 
                setFilterOn={setFilterOn} 
                itemCount={leviDatabase.length}
            />
            <div className='product-list'>
                {leviDatabase.slice(curPage * numPerPage, (curPage * numPerPage) + numPerPage).map( product => (
                    <ProductIndexItem product={product} pc9Match={pc9Match} filterOn={filterOn}/>
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
