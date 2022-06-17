import { useContext } from 'react'
import ProductCard from '../../components/productCard/product-card.component'

import { ProductContext } from '../../contexts/product.context'

import './shop.styles.scss'

const Shop = () =>
{
    const {products} = useContext(ProductContext)
    return(
        <div className='shop-container'>
        {
            products.map(product =>
            {
                return(<ProductCard key={product.id} product={product}/>)
            })
        }
        </div>
    )
}

export default Shop;