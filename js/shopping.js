
function addItemToCart(itemId, priceId) {
    const itemName = document.getElementById(itemId).innerText;
    const itemPrice = parseFloat(document.getElementById(priceId).innerText);
    addToCart(itemName, itemPrice);
};
let totalPrice = 0;
let discountPrice = 0;
let discountTotal = 0;
function addToCart(itemName, itemPrice) {

    const cartItems = document.getElementById('cart-field');
    const count = cartItems.childElementCount;
    // total price update
    totalPrice +=itemPrice;
   if(totalPrice > 200){
         document.getElementById('coupon-container').style.display = 'block';
         document.getElementById('price-container').style.display ='block'
    }
    else{
        document.getElementById('coupon-container').style.display = 'none'
        document.getElementById('price-container').style.display = 'none'
    } 
    // purchase button showing
    if(totalPrice !== 0 ){
        document.getElementById('purchase-btn').style.display = 'block';
    }
    else{
        document.getElementById('purchase-btn').style.display ='none';
    }
    // discountTotal = totalPrice - discountPrice;
    // create and append item to the cart
    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${itemName} ${itemPrice} TK`;
    cartItems.appendChild(p);
    // update total price
    document.getElementById('total-price').innerText =`Total Price :${totalPrice.toFixed(2)} Tk`
}''
// this part is for coupon
document.getElementById('apply-coupon').addEventListener('click', function(){
    const couponCode = document.getElementById('coupon-code').value;
    if(couponCode === 'SELL200' && totalPrice > 200){
        // apply 20% discount
        discountPrice = totalPrice * 0.80;
        const discountAmount = totalPrice - discountPrice;
         document.getElementById('discount-total').innerText =`Discount :${discountAmount.toFixed(2)} Tk`;
         document.getElementById('discount-price').innerText =`Total :${discountPrice.toFixed(2)} Tk`
    }
    else{
        alert('You have to purchase more than 200');
    }
});
// congratulations part
document.getElementById('purchase-btn').addEventListener('click', function(){
    // show the congratulatory msg
    document.getElementById('congrats-msg').style.display = 'block';
    // hide
    // document.getElementById('purchase-btn').style.display = 'none'
});

document.getElementById('card-1').addEventListener('click', function() {
    addItemToCart('item1-name', 'item1-price');
});

document.getElementById('card-2').addEventListener('click', function() {
    addItemToCart('item2-name', 'item2-price');
});

document.getElementById('card-3').addEventListener('click', function() {
    addItemToCart('item3-name', 'item3-price');
});
document.getElementById('card-4').addEventListener('click', function() {
    addItemToCart('item4-name', 'item4-price');
});
document.getElementById('card-5').addEventListener('click', function() {
    addItemToCart('item5-name', 'item5-price');
});
document.getElementById('card-6').addEventListener('click', function() {
    addItemToCart('item6-name', 'item6-price');
});


/* document.querySelectorAll('.card').forEach((card, index) => {
    card.addEventListener('click', function() {
        const itemName = document.getElementById(`item${index + 1}-name`).innerText;
        const itemPrice = parseFloat(document.getElementById(`item${index + 1}-price`).innerText);
        addToCart(itemName, itemPrice);
    });
});

function addToCart(itemName, itemPrice) {
    const cartItems = document.getElementById('cart-field');
    const count = cartItems.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${itemName} ${itemPrice} TK`;
    cartItems.appendChild(p);
}
 */