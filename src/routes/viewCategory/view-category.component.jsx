import { useContext, Fragment } from 'react'
import { CategoriesContext } from '../../contexts/categories.context'

import CategoryPreview from '../../components/categoryPreview/category-preview.component'

const ViewCategory = () =>
{
    const {categoriesMap} = useContext(CategoriesContext)
    
    return(
        <Fragment>
            {
                Object.keys(categoriesMap).map(title =>
                {
                    const products = categoriesMap[title]
                    return(
                        <CategoryPreview key={title} title={title} products={products}/>
                    )
                }
            )}
        </Fragment>
    )
}

export default ViewCategory;