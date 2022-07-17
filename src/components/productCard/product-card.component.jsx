import Button from "../button/button.component"
import './product-card.styles.scss'

import { useDispatch, useSelector } from "react-redux"

import { selectCartItems } from "../../store/cart/cart.selector"
import { addItemstoCart } from "../../store/cart/cart.action"

const ProductCard = ({product}) =>
{
    const {name,imageUrl,price} = product
    const cartItems = useSelector(selectCartItems);

    const dispatch = useDispatch();

    const AddProduct = () => dispatch(addItemstoCart(cartItems, product));

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`}/>
            <div className="footer">
                <span className="name">{name}</span>
                 <span className="price">{`$${price}`}</span>
            </div>
            <Button onClick={AddProduct} buttonType="inverted">Add</Button>
        </div>
    )
}

export default ProductCard;