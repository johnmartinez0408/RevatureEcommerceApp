import { useEffect, useState } from "react";
import Product from "./Product";
import { useNavigate, useParams } from "react-router-dom";

const ProductsList = () => {

    const [products, setProducts] = useState([]);
    let params = useParams();
    const categoryId = params.id;

    //For back button
    const navigate = useNavigate();

    const getData = (token) => {
        fetch(`http://localhost:9191/api/product/category/${categoryId}`, {
            method: 'get',
            headers: new Headers({
                'Authorization': 'Bearer ' + token,
            })
        })
            .then((results) => results.json())
            .then((data) => {
                setProducts(data);
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
                navigate("/login");
            })
    }

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            getData(token);
        } else {
            navigate("/login")
        }

    }, [])

    return (
        <div className="" style={{ width: "100%" }}>
            <div className="card-body">

                <div className="row marg-bot-0">
                    <div className="col-md-12 marg-bot-0">
                        <button onClick={() => navigate(-1)} className="btn btn-primary back-btn">Back</button>
                    </div>

                </div>
                <div className="row marg-bot-20">
                    <div className="col-md-12 text-center">
                        <h1 className="card-title">{products.length > 0 ? products[0].categoryName : "Category"}</h1>
                    </div>
                    <div className="col-md-12 text-center">
                        <p className="card-text">Browse products in category</p>
                    </div>

                </div>

                <div className="row marg-bot-20">
                    <div className="col-md-12">
                        <hr />
                    </div>
                </div>

                <div className="row">
                    {
                        products.map((productsData, index) => {
                            return (
                                <Product data={productsData} key={index} />
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default ProductsList;