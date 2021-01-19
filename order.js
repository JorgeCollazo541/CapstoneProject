let removeCartItemButton = document.getElementsByClassName("cartButton");
for (var i = 0; i < removeCartItemButton.length; i++){
    var button = removeCartItemButton[i]
    button.addEventListener('click', function(){
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal
    })
}

function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-item')[0]
    cartItemContainer.getElementsByClassName('cart-row')
}