import { useParams } from "react-router-dom"
import { getProductById } from "../ProductList/ProductData"
import "./ProductDetails.css";
import productReturn from "./product-return.png"
import { getDiscountPercent } from "../ProductList/ProductData";

export default function ProductDetails(){
    const {id} = useParams("id")
    const product = getProductById(id)
    console.log(product)

    return (
        <div className="product-details">
            <div className="product-details-image-container">
                <img className="product-details-image" src={product.image} />
            </div>
            <div className="product-details-info-container">
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