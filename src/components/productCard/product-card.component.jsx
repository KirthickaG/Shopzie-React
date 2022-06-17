import Button from "../button/button.component"
import './product-card.styles.scss'
import { CartContext } from "../../contexts/cart.context"
import { useContext } from "react"

const ProductCard = ({product}) =>
{
    const {name,imageUrl,price} = product
    const {addItemstoCart} = useContext(CartContext)

    const AddProduct = () =>
    {
        addItemstoCart(product)
    }

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button onClick={AddProduct} buttonType="inverted">Add</Button>
        </div>
    )
}

export default ProductCard;