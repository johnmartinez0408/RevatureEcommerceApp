import { useSelector } from "react-redux";

const CartSummary = (props)=>{
    

    return(
        <>  
        <   div className="row">
                <div className="col-md-12">
                    <p>Order Summary:</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-7">
                    Items:
                </div>
                <div className="col-md-5 text-right">
                    ${props.itemsAmount}
                </div>
            </div>
            <div className="row">
                <div className="col-md-7">
                    Shipping:
                </div>
                <div className="col-md-5 text-right">
                    ${props.shipping}
                </div>
            </div>
            <div className="row">
                <div className="col-md-7">
                    <b>Total:</b>
                </div>
                <div className="col-md-5 text-right">
                    ${(parseFloat(props.shipping) + parseFloat(props.itemsAmount)).toFixed(2)}
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <button className="btn btn-primary marg-top-40">Proceed to Checkout</button>
                </div>
            </div>
        </>
    )
}


export default CartSummary;