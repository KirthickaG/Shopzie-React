import {Routes, Route} from 'react-router-dom'

import ViewCategory from '../viewCategory/view-category.component'
import Category from '../category/category.component'

import './shop.styles.scss'

const Shop = () =>
{    
    return(
        <Routes>
            <Route index element={<ViewCategory/>}/>
            <Route path=":category" element={<Category/>}/>
        </Routes>
    )
}

export default Shop;