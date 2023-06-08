const cart = [{
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
}];

function addToCart(cartItem) {
    cart.push(cartItem);
}

function getTotalItemsInCart() {
    return cart.length;
}

function getCartValue(){
    const cartValue = cart.reduce((total, product) => {
        return total + Number(product.sellingPrice);
    }, 0)

    return cartValue;
}


export { cart, addToCart, getTotalItemsInCart, getCartValue }