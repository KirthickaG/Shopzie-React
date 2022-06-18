import { Link } from 'react-router-dom';
import ProductCard from '../../components/productCard/product-card.component'
import './category-preview.styles.scss'

const CategoryPreview =  ({title,products}) =>
{
    return (
        <div className="category-preview-container">
                <Link className='title' to={title}>
                    {title.toUpperCase()}
                </Link>
            <div className='preview'>
                {
                    products.filter((_ , index) => index < 4 )
                    .map(prod => <ProductCard key={prod.id} product={prod}/>)
                }
            </div>
        </div>
    )
}

export default CategoryPreview;