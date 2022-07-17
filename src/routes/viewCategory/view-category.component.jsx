import { Fragment } from 'react'
import CategoryPreview from '../../components/categoryPreview/category-preview.component'
import {useSelector} from 'react-redux'
import { selectcategoriesMap } from '../../store/category/category.selector'

const ViewCategory = () =>
{
    // const {categoriesMap} = useContext(CategoriesContext)
     const categoriesMap = useSelector(selectcategoriesMap)
    
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