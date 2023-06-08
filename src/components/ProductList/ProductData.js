import shoe0 from "./images/shoe0.jpg"
import shoe1 from "./images/shoe1.jpg"
import shoe2 from "./images/shoe2.jpg"
import shoe3 from "./images/shoe3.jpg"
import shoe4 from "./images/shoe4.jpg"

const products = [];

function getShoe(i) {
    if(i===0) {
        return shoe0;
    }else if(i===1){
        return shoe1;
    }else if(i===2){
        return shoe2;
    }else if(i===3){
        return shoe3;
    }else {
        return shoe4;
    }
}

for(let i=0;i<20;i++) {
    products.push({
        id: i,
        brand: "Nike",
        category: "shoes",
        name: "Nike Mens Air Max Pre-Day Se Running Shoe",
        isDiscounted: true,
        noOfRatings: "11",
        listPrice: "3000",
        sellingPrice: "2800",
        currency: "USD",
        discountType: "percentage",
        isPrimeVerified: true,
        isReturnable: true,
        returnTimeline: "10 Days",
        payOnDeliveryAvailable: true,
        image: getShoe(i%5)       
    })
}

function getProductById(productId) {
    const product = products.find(product => {
        return product.id===Number(productId)
    });
    return product
}

function getDiscountPercent(product) {
    const discount = product.listPrice - product.sellingPrice;
    const discountPercent = Math.floor((discount/product.listPrice) * 100);
    return discountPercent;
}

export {products, getProductById, getDiscountPercent}