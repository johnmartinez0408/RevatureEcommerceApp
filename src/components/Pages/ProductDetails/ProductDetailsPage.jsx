import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../../Common/Navbar";
import { addToCart } from "../../redux/actions/cart-actions";
import { useDispatch } from "react-redux";

const ProductDetailsPage = () => {

    const dispatch = useDispatch();

    let params = useParams();
    const [product, setProduct] = useState({});
    // const productId =40;
    const productId = params.id;
    const getData = () => {
        fetch(`http://localhost:9104/api/product/${productId}`)
            .then((results) => results.json())
            .then((data) => {
                setProduct(data);
                console.log(data);
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        getData();
    }, [productId])

    const onAddToCartHandler = () => {
        dispatch(addToCart(product));
    }

    //For back button
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <div className='container wrapper shadow bg-light'>
                <div className="" style={{ width: "100%" }}>


                    <div className="card-body" style={{ marginBottom: "50px" }}>
                        <div className="row">
                            <div className="col-md-12">
                                <button onClick={() => navigate(-1)} className="btn btn-primary back-btn">Back</button>
                            </div>

                        </div>

                        <div className="text-center">
                            <h1 className="card-title">{product.productName}</h1>
                            <span className="badge badge-secondary">{product.categoryName}</span>
                            <h4>${product.price}</h4>
                            {
                                product.image ? <img className="img-thumbnail" style={{ width: "300px", height: "300px" }} src={product.image} /> : <></>

                            }
                            <h2 className="marg-top-20 h6">Brand: <span className="text-primary h5">{product.brand}</span></h2>
                            <p>{product.quantity} left in stock</p>
                            <p style={{ padding: "20px", fontSize: "20px" }}>{product.productDescription}</p>
                            <button onClick={onAddToCartHandler} className="btn btn-primary marg-bot-40">Add to cart</button>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default ProductDetailsPage;