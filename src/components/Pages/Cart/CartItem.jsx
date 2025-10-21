import { useState } from "react";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../../redux/actions/cart-actions";
import { Link } from "react-router-dom";

const CartItem = (props) => {

    const cartItem = props.data;
    const dispatch = useDispatch();

    const incrementItemHandler = () => {
        dispatch(increaseQuantity(cartItem));
    }

    const decrementItemHandler = () => {

        dispatch(decreaseQuantity(cartItem));
    }

    return (
        <>

            <div className="row marg-top-20">
                <div className="col-md-12">
                    <h3>{cartItem.title}</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <Link to={`/products/${cartItem.id}`} className="text-dark">
                        <img className="rounded" src={cartItem.images ? cartItem.images[0] : null} style={{ width: "100%" }} alt="" />
                    </Link>
                </div>
                <div className="col-md-6">
                    <p>{cartItem.description}</p>
                </div>
                <div className="col-md-2">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            ${cartItem.price}
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <button className="cart-quantity-btn" onClick={decrementItemHandler}>-</button>
                            {cartItem.quantity}
                            <button className="cart-quantity-btn" onClick={incrementItemHandler}>+</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


export default CartItem;