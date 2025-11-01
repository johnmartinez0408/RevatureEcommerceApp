import { useEffect } from "react";
import Navbar from "../../Common/Navbar";
import OrderSummary from "./OrderSummary";
import { useSelector } from "react-redux";


const OrderPlaced = (props) => {

    const cartData = useSelector((state) => { return state })

    const placeOrder = (token) => {

        const payload = createOrderPayloadFromCart();

        //TODO fix this endpoint
        fetch("http://localhost:9191/api/order/place-multiple", {
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then((results) => results.json())
            .then((data) => console.log(data))
            .catch((error) => {
                console.log(error);
                // navigate("/login");
            })
    }

    const createOrderPayloadFromCart = () => {
        const payload = [];
        cartData.carts.forEach(product => {
            let singleOrderPayload = {
                productId: `${product.productId}`,
                quantity: `${product.quantity}`,
                amount: `${product.quantity}`,
                paymentMethod: "CREDIT"
            }
            payload.push(singleOrderPayload)
        });
        console.log("Payload: " + JSON.stringify(payload))
        return payload;
    }

    useEffect(() => {
        if (cartData.carts.length > 0) {
            const token = localStorage.getItem("token")
            if (token) {
                placeOrder(token);
            } else {
                console.log("No token available!")
            }
        } else {
            console.log("Cart is empty");
        }

    }, [])

    return (
        <>
            <div>
                <Navbar />
                <div className='container wrapper shadow bg-light'>
                    <OrderSummary />
                </div>
            </div>
        </>
    )
}


export default OrderPlaced;