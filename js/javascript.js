let bananaPrice = 0.25


let applePrice = 0.75


let breadPrice = 3.50


let eggsPrice = 4.00


let milkPrice = 3.00


let cartTotal = 0






function addItem(price, quantity) {
    cartTotal += price * quantity;
}






function removeItem(price, quantity) {
    cartTotal -= price * quantity;
}






function applyDiscount(price, percent) {
    let discountAmount = price * percent;
    return price - discountAmount;
}


function calculateTotal() {
    return cartTotal;
}






let discountedMilkPrice = applyDiscount(milkPrice, 0.10)






addItem(bananaPrice, 5)
addItem(applePrice, 2)
addItem(breadPrice, 1)
addItem(eggsPrice, 1)
addItem(discountedMilkPrice, 1)
removeItem(bananaPrice, 2)




let Total = calculateTotal()
console.log(`Total: $${Total.toFixed(2)}`);
