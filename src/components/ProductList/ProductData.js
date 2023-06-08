import shoe0 from "./shoe0.jpg"
import shoe1 from "./shoe1.jpg"
import shoe2 from "./shoe2.jpg"
import shoe3 from "./shoe3.jpg"
import shoe4 from "./shoe4.jpg"

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
        brand: "Nike",
        category: "shoes",
        name: "Nike Mens Air Max Pre-Day Se Running Shoe",
        noOfRatings: "11",
        listPrice: "3000",
        sellingPrice: "2800",
        currency: "USD",
        discountType: "percentage",
        isPrimeVerified: true,
        isReturnable: true,
        returnTimeline: "10 Days",
        image: getShoe(i%5)       
    })
}

export {products}