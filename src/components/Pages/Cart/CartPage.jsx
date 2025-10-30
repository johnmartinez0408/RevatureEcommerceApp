import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Common/Navbar";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import { emptyCart } from "../../redux/actions/cart-actions";


const CartPage = () => {

    const cartData = useSelector((state)=>{return state})
    const dispatch = useDispatch();
    console.log(cartData);
    const emptyCartHandler = () => {
        console.log("Emptying cart")
        dispatch(emptyCart());
    }
    return (
        <>
            <Navbar />
            <div className='container wrapper'>
                <div className="row">
                    <div className="col-md-8">
                        <div className="my-card shadow">
                            <div className="row">
                                <div className="col-md-10 marg-0-important">
                                    <h1 className="marg-0-important">Cart</h1>
                                </div>
                                <div className="col-md-2 text-center marg-0-important">
                                    <p>Price / Quantity</p>
                                </div>
                            </div>
                            {
                                cartData.carts.map((item) => {
                                    return <CartItem data={item} key={item.productId} />
                                })
                            }
                            <button className="btn btn-danger" onClick={emptyCartHandler}>Empty Cart</button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="my-card shadow">
                            <CartSummary itemsAmount={cartData.cartTotalAmount} shipping={"5.90"}/>
                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}


export default CartPage;