import { useNavigate } from "react-router-dom";
import "./ProductTile.css"
import { getDiscountPercent } from "../ProductList/ProductData";

export function ProductTile({product}){
    const navigate = useNavigate();

    function navigateToProductDetailPage(productId) {
        const newTab = window.open(`${window.location.origin}/productdetail/${productId}`, '_blank');
    }

    return (
        <div className="product-tile">
            <div className="product-image-container" onClick={() => navigateToProductDetailPage(product.id)}>
                <img className="product-image" src={product.image
                }></img>
            </div>
            <div className="product-info-container">
                <p className="product-brand-name"><b>{product.brand}</b></p>
                <p className="product-name" onClick={() => navigateToProductDetailPage(product.id)}>{product.name}</p>
                <small className="product-rating">{product.noOfRatings} ratings</small>
                <div className="product-price" onClick={() => navigateToProductDetailPage(product.id)}>
                    <p><b className="product-sp">{product.sellingPrice}</b> M.R.P: <span>{product.listPrice}</span> ({getDiscountPercent(product)}% off)</p>
                </div>
                <p>{product.isPrimeVerified && <span>prime</span>}</p>
            </div>
        </div>
    )
}