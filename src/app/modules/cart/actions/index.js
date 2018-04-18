import * as TYPE from './../contants/action_type';

export const addCart = (product) => {
    return {
        type : TYPE.ADD_CART,
        product
    }
}

export const listCart = () => {
    return {
        type : TYPE.LIST_CART
    }
}

export const deleteCart = (product_id) => {
    return {
        type : TYPE.DELETE_CART,
        product_id
    }
}