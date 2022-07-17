import {useEffect, useState, Fragment} from 'react'
import {useParams} from 'react-router-dom'

import ProductCard from '../../components/productCard/product-card.component';
import './category.styles.scss'
import {useSelector} from 'react-redux'
import { selectcategoriesMap } from '../../store/category/category.selector';

const Category = () =>
{
    const {category} = useParams();
    const categoriesMap = useSelector(selectcategoriesMap)
    const [products,setProducts] = useState(categoriesMap[category])

    useEffect(() => {

        setProducts(categoriesMap[category])

    },[category,categoriesMap])

    return (
        <Fragment>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            <div className='category-container'>           
                {products &&
                 products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </Fragment>


    )
}

export default Category;