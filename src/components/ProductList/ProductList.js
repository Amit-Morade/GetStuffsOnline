import "./ProductList.css"
import { products } from "./ProductData";
import shoe1 from "./shoe1.jpg"
import shoe2 from "./shoe2.jpg"
import shoe3 from "./shoe3.jpg"
import shoe4 from "./shoe4.jpg"

export default function ProductList() {

    function getDiscountPercent(product) {
        const discount = product.listPrice - product.sellingPrice;
        const discountPercent = Math.floor((discount/product.listPrice) * 100);
        return discountPercent;
    }

    return (
        <div>
            <ul className="products-list">
                {
                    products.map((product, index) => (
                        <div className="product-tile">
                            <div className="product-image-container">
                                <img className="product-image" src={product.image
                                }></img>
                            </div>
                            <div className="product-info-container">
                                <p className="product-brand-name"><b>{product.brand}</b></p>
                                <p className="product-name">{product.name}</p>
                                <small className="product-rating">{product.noOfRatings} ratings</small>
                                <div className="product-price">
                                    <p><b className="product-sp">{product.sellingPrice}</b> M.R.P: <span>{product.listPrice}</span> ({getDiscountPercent(product)}% off)</p>
                                </div>
                                <p>{product.isPrimeVerified && <span>prime</span>}</p>
                            </div>
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}