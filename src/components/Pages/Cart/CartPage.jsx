import { useSelector } from "react-redux";
import Navbar from "../../Common/Navbar";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";


const CartPage = () => {

    const cartData = useSelector((state)=>{return state})
    const dummyData = [
        {
            id: 17,
            title: "Classic Black T-Shirt",
            slug: "classic-black-t-shirt",
            price: 354,
            description: "Elevate your everyday style with our Classic Black T-Shirt. This staple piece is crafted from soft, breathable cotton for all-day comfort. Its versatile design features a classic crew neck and short sleeves, making it perfect for layering or wearing on its own. Durable and easy to care for, it's sure to become a favorite in your wardrobe.",
            images: ["https://i.imgur.com/9DqEOV5.jpeg"],
            quantity: 1
        },
        {
            id: 31,
            title: "Modern Elegance Teal Armchair",
            slug: "modern-elegance-teal-armchair",
            price: 25,
            description: "Elevate your living space with this beautifully crafted armchair, featuring a sleek wooden frame that complements its vibrant teal upholstery. Ideal for adding a pop of color and contemporary style to any room, this chair provides both superb comfort and sophisticated design. Perfect for reading, relaxing, or creating a cozy conversation nook.",
            images: ["https://i.imgur.com/6wkyyIN.jpeg"],
            quantity: 3
        }
    ];

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
                                    return <CartItem data={item} key={item.id} />
                                })
                            }

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