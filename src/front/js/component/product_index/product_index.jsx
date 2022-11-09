import React, { useContext, useEffect, useState } from 'react'
import { leviDatabase } from '../../../util/levi_database'
import FilterSort from './filter_sort';
import ProductIndexItem from './product_index_item';
import { Context } from "../../store/appContext";
import { getArchiveMatches, getArchiveMeasurementMatches, MatchPc9 } from '../../../util/levi_datatbase_util';
import PageNavigation from './page_navigation';
import ArchiveHeader from '../archive_recommendation/archive_header';
import Pc9Result from '../archive_recommendation/pc9_result';
import RetiredFavorite from '../archive_recommendation/retired_favorite';

const ProductIndex = ({}) => {
    const { store, actions } = useContext(Context);
    const pc9 = store.pc9[0]?.pc9Input  || store.pc9[0];
    const [archiveFilterOn, setArchiveFilterOn] = useState( store.pc9Match ? 
        sessionStorage.getItem('archiveFilterOn') === 'true' ? true : false 
        :
        false
        );
    const [curPage, setCurPage] = useState(0);
    const [numPerPage, setNumPerPage] = useState(6)
    const [products, setProducts] = useState(store.pc9Match ? 
        getArchiveMatches(store.pc9Match, store.waist[0], store.length[0]) : 
        store.Hip ? getArchiveMeasurementMatches(store.waist[0]. store.length[0], store.hip)
        : leviDatabase)
   
    const orderProducts = () => setProducts(getArchiveMatches(store.pc9Match, store.waist[0], store.length[0]))

    useEffect( () => {
        if(archiveFilterOn) {
            console.log('im here', store.pc9Match )
            orderProducts();
        }
    },[archiveFilterOn])
    

    console.log(store)
    return(
        <div>
            {archiveFilterOn && store.pc9.length ? 
                <div>
                    <ArchiveHeader />
                    <Pc9Result />
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
                orderProducts={orderProducts}
            />
            <div className='product-list'>
                {products.slice(curPage * numPerPage, (curPage * numPerPage) + numPerPage).map( product => (
                    <ProductIndexItem 
                        product={product} 
                        archiveFilterOn={archiveFilterOn}
                    />
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
