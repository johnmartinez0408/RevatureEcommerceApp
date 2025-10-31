import { useDispatch, useSelector } from "react-redux";
import OrderSummaryItem from "./OrderSummaryItem";
import { useNavigate } from "react-router-dom";
import { emptyCart } from "../../redux/actions/cart-actions";

const OrderSummary = (props) => {

    const cartData = useSelector((state) => { return state });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const shopAgainHandler = () => {
        dispatch(emptyCart());
        navigate("/");
    }

    return (
        <div className="my-card">
            <div className="row">

                <div className="col-md-1">
                    <button onClick={() => navigate(-1)} className="btn btn-primary back-btn">Back</button>
                </div>
                <div className="col-md-11">
                    <button onClick={shopAgainHandler} className="btn btn-danger back-btn">Empty Cart and Shop again</button>
                </div>


            </div>
            <div className="row marg-top-40">
                <div className="col-md-12 text-center">
                    <h1>Order Placed Successfully!</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h2 className="">Order Summary</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 marg-bot-40">
                    {
                        cartData.carts.map((item) => {
                            return <OrderSummaryItem data={item} key={item.productId} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}


export default OrderSummary;