import { ActionType } from "../constants/action-types";

const initialState = {
    cartItemCount: 0,
    carts: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}

export const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionType.GET_CART_ITEMS_NUMBERS:
            return {
                ...state
            }
        case ActionType.ADD_TO_CART:
            // check if the cart empty no  need to check directly add the cart
            // if not empty check if the product already exist in the cart if exist increase the qty
            // else add the product to the cart with quantity 1
            if (state.carts.length === 0) {
                let item = {
                    ...payload,
                    quantity: 1
                }
                state.carts.push(item);
            } else {
                let isExist = false;
                state.carts.map((item, index) => {
                    if (item.id === payload.id) {
                        state.carts[index].quantity += 1;
                        isExist = true;
                    }
                });
                if (!isExist) {
                    let _item = {
                        ...payload,
                        quantity: 1
                    }
                    state.carts.push(_item);
                }
            }
            state.cartTotalAmount = (parseFloat(state.cartTotalAmount) + parseFloat(payload.price)).toFixed(2);
            return {
                ...state,
                cartItemCount: state.cartItemCount + 1
            }
        case ActionType.DECREASE_QUANTITY: {
            
            const existingIndex = state.carts.findIndex(item => item.id === payload.id);
            if (existingIndex === -1) return state;

            let updatedCarts = [...state.carts];
            const currentItem = updatedCarts[existingIndex];

            state.cartTotalAmount = (parseFloat(state.cartTotalAmount) - parseFloat(payload.price)).toFixed(2);

            //If item is present
            if (currentItem.quantity > 1) {
                updatedCarts[existingIndex] = {
                    ...currentItem,
                    quantity: currentItem.quantity - 1
                }
            } else {
                updatedCarts = updatedCarts.filter(item => item.id !== payload.id);
            }
            return {
                ...state,
                carts: updatedCarts,
                cartItemCount: state.cartItemCount > 0 ? state.cartItemCount - 1 : 0
            }
        }

        case ActionType.INCREASE_QUANTITY: {
            const existingIndex = state.carts.findIndex(item => item.id === payload.id);
            if (existingIndex === -1) return state;

            let updatedCarts = [...state.carts];
            const currentItem = updatedCarts[existingIndex];

            state.cartTotalAmount = (parseFloat(state.cartTotalAmount) + parseFloat(payload.price)).toFixed(2);

            updatedCarts[existingIndex] = {
                ...currentItem,
                quantity: currentItem.quantity + 1
            }
            
            return {
                ...state,
                carts: updatedCarts,
                cartItemCount: state.cartItemCount + 1
            }
        }

        case ActionType.GET_TOTAL_CART_AMOUNT: {
            const { total, quantity } = state.carts.reduce(
                (cartTotal, cartItem) => {
                    const itemTotal = cartItem.price * cartItem.quantity;
                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartItem.quantity;
                    return cartTotal;
                }, { total: 0, quantity: 0 }
            );
            return {
                ...state,
                cartTotalQuantity: quantity,
            }

        }
        case ActionType.EMPTY_CART:
            return {
                ...initialState
            }

        default:
            return state;
    }
}