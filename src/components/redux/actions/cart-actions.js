import { ActionType } from "../constants/action-types";

export const addToCart = (product) => {
    return {
        type: ActionType.ADD_TO_CART,
        payload: product,
    }
}

export const decreaseQuantity = (product) => {
    return {
        type: ActionType.DECREASE_QUANTITY,
        payload: product,
    }
}

export const increaseQuantity = (product) => {
    return {
        type: ActionType.INCREASE_QUANTITY,
        payload: product,
    }
}

export const deleteFromCart = (product) => {
    return {
        type: ActionType.DELETE_FROM_CART,
        payload: product,
    }
}

export const getCartTotalAmount = () => {
    return {
        type: ActionType.GET_TOTAL_CART_AMOUNT,
    }
}

export const emptyCart = () => {
    return {
        type: ActionType.EMPTY_CART,
    }
}