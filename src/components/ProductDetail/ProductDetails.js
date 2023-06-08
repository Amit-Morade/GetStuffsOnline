import { useNavigate, useParams } from "react-router-dom"
import "./ProductDetails.css";
import productReturn from "./product-return.png"
import { getDiscountPercent, getProductById } from "../ProductList/ProductData";
import { addToCart } from "../../data/cart";

export default function ProductDetails(){
    const {id} = useParams("id");
    const navigate = useNavigate();
    const product = getProductById(id);

    return (
        <div className="product-details">
            <div className="product-details-image-container">
                <img className="product-details-image" src={product.image} />
            </div>
            <div className="product-details-info-container">
                <button onClick={() => {
                    addToCart(product)
                    navigate(`/cartconfirmation/${product.id}`)
                }}>Add to Cart</button>
                <p className="product-details-brand">Brand: {product.brand}</p>
                <p className="product-details-name">{product.name}</p>
                <p>{product.noOfRatings}</p>
                <hr />
                <p>
                    <b className="product-details-sp">
                        {
                            product.isDiscounted && <span className="product-details-discount">-{getDiscountPercent(product)}% </span>
                        }
                        {product.sellingPrice}
                        {
                            product.isDiscounted && <p className="product-details-lp">M.R.P.: {product.listPrice}</p>
                        }
                    </b>
                </p>
                {product.isPrimeVerified && <p className="product-details-prime-display">prime</p>}
                <hr />
                <div className="product-details-icons-container">
                    {product.isReturnable && <div className="product-details-icon-holder">
                        <img className="product-details-icons" src={productReturn} />
                        <p>{product.returnTimeline} Return & Exchange</p>
                    </div>}  
                </div>
                <hr/>
            </div>
        </div>
    )
}