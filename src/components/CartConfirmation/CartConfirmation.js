import { useParams } from "react-router"
import { getProductById } from "../ProductList/ProductData";
import "./CartConfirmation.css"
import { cart, getCartValue, getTotalItemsInCart } from "../../data/cart";
import CheckLogo from "./check.png";

export default function CartConfirmation() {
    const { id:productId } = useParams("id");
    const product = getProductById(productId)
    console.log(cart)

    return (
        <div className="cart">
            <div className="cart-left-container">
                <div className="cart-product-image-container">
                    <img className="cart-product-image" src={product.image} />
                </div>
                <div className="cart-product-message">
                    <p><img className="cart-check-logo" src={CheckLogo}/>&nbsp;&nbsp;Added to Cart</p>
                    <span><b>Name: </b>{product.name}</span>
                </div>
            </div>
            <div className="cart-right-container">
                <p>Cart Subtotal: {getCartValue()}</p>
                <button className="cart-buy-button">Proceed to Buy {getTotalItemsInCart()} items</button>
                <button className="cart-redirect-button" onClick={() => alert("hello")}>Go to Cart</button>
            </div>
            
        </div>
        
    )
}