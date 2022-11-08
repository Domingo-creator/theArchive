import React, { useContext, useEffect, useState } from 'react'
import { leviDatabase } from '../../../util/levi_database'
import FilterSort from './filter_sort';
import ProductIndexItem from './product_index_item';
import { Context } from "../../store/appContext";
import { getArchiveMatches, MatchPc9 } from '../../../util/levi_datatbase_util';
import PageNavigation from './page_navigation';
import ArchiveHeader from '../archive_recommendation/archive_header';
import Pc9Result from '../archive_recommendation/pc9_result';
import RetiredFavorite from '../archive_recommendation/retired_favorite';

const ProductIndex = ({}) => {
    const { store, actions } = useContext(Context);
    const pc9 = store.pc9[0]?.pc9Input  || store.pc9[0];
    console.log("STORE", store.pc9[0], pc9)
    const [pc9Match, setPc9Match] = useState(MatchPc9(pc9));
    const [archiveFilterOn, setArchiveFilterOn] = useState( pc9 ? 
        sessionStorage.getItem('archiveFilterOn') === 'true' ? true : false 
        :
        false
        );
    const [curPage, setCurPage] = useState(0);
    const [numPerPage, setNumPerPage] = useState(6)
    const [products, setProducts] = useState(pc9 ? getArchiveMatches(pc9, store.waist[0], store.length[0]) : leviDatabase)
   
    useEffect( () => {
        if(archiveFilterOn) {
            setProducts(getArchiveMatches(pc9Match, store.waist[0], store.length[0]))
        }
    },[archiveFilterOn])
    
    return(
        <div>
            {archiveFilterOn ? 
                <div>
                    <ArchiveHeader />
                    <Pc9Result matchingJean={pc9Match} />
                    <RetiredFavorite />
                </div>
            :
                 <></>
            }
        <div className='product-list-container'>
            <FilterSort 
                archiveFilterOn={archiveFilterOn} 
                setArchiveFilterOn={setArchiveFilterOn} 
                itemCount={products.length}
                pc9Match={pc9Match}
                setPc9Match={setPc9Match}
            />
            <div className='product-list'>
                {products.slice(curPage * numPerPage, (curPage * numPerPage) + numPerPage).map( product => (
                    <ProductIndexItem product={product} pc9Match={pc9Match} archiveFilterOn={archiveFilterOn}/>
                ))}
            </div>
            <PageNavigation
                numPages={products.length % numPerPage}
                curPage={curPage}
                setCurPage={setCurPage}
            />
        </div> 
        </div>
    )
}

export default ProductIndex;
