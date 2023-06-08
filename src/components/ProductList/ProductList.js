import "./ProductList.css"
import { products } from "./ProductData";
import { ProductTile } from "../ProductTile/ProductTile";

export default function ProductList() {

    return (
        <div>
            {
                products.length!==0 ? 
                (
                    <ul className="products-list">
                                    {
                                        products.map((product, index) => (
                                            <ProductTile product={product} />
                                        ))
                                    }
                    </ul>
                ) : (
                    <div>Loading</div>
                )
            }
            
        </div>
    )
}