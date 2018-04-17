import * as TYPE from './../contants/action_type';

var localStorageCarts = JSON.parse(localStorage.getItem('carts'));
var carts             = localStorageCarts ? localStorageCarts : [];
var data              = {
    items           : carts,
    notification    : {}
}

const findProductInCart = (cart, product) => {
    var index = -1;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].product.post_id === product.post_id) {
                index = i;
                break;
            }
        }
    }
    return index;
}

const cart = (state = data , action) => {
    switch (action.type) {
        case TYPE.ADD_CART:
            var product = action.product;
            let index = findProductInCart(carts, product);
            if (index !== -1) {
                carts[index].quantity += 1;
            } else {
                let quantity = 1;
                carts.push({
                    product,
                    quantity
                });
            }
            localStorage.setItem('carts', JSON.stringify(carts));

            return Object.assign({}, state, {
                items: carts,
                notification    : `${product.post_title} đã được thêm vào giỏ hàng`
            });

        case TYPE.LIST_CART:
            return Object.assign({}, state, {
                items: carts,
                notification    : 'Giỏ hàng'
            });   
        default:
            return state;
    }
}

export default cart;