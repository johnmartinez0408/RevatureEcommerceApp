import { useSelector } from "react-redux";

const CartSummary = (props)=>{
    
    const shipping= 5.9;
    // const cartData = useSelector((state)=>{return state})
    // const {price, quantity} = props.data;
    // let items=0;
    // for(let i=0; i<props.data.length; i++){
    //     items = items + (props.data[i].price * props.data[i].quantity);
    // }
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