import {Routes, Route} from 'react-router-dom'

import ViewCategory from '../viewCategory/view-category.component'
import Category from '../category/category.component'

import './shop.styles.scss'
import { useEffect } from 'react'
import { getCategoriesDocuments } from '../../utils/firebase/firebase.utils'
import { setProducts } from '../../store/category/category.action'
import {useDispatch} from 'react-redux'

const Shop = () =>
{    
    const dispatch = useDispatch();

    useEffect(() =>{
    const getDocs = async () =>
    {
        const result =  await getCategoriesDocuments();
        dispatch(setProducts(result))
    }
    getDocs();

    },[])

    return(
        <Routes>
            <Route index element={<ViewCategory/>}/>
            <Route path=":category" element={<Category/>}/>
        </Routes>
    )
}

export default Shop;