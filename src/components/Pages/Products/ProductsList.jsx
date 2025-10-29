import { useEffect, useState } from "react";
import Product from "./Product";
import { useParams } from "react-router-dom";

const ProductsList = ()=>{
    
    const [products, setProducts] = useState([]);
    let params = useParams();
    const categoryId = params.id;

    const getData = ()=>{
        fetch(`http://localhost:9191/api/product/category/${categoryId}`)
            .then((results)=> results.json())
            .then((data)=> {
                setProducts(data);
                console.log(data);
            })
            .catch((error)=>console.log(error))
    }
    
    useEffect(()=>{
        getData();
    },[])

    return (
        <div className="" style={{width: "100%"}}>
            <div className="card-body">
                <h1 className="card-title">Products</h1>
                <p className="card-text">Browse our full list of products</p>
                <div className="row">
                {
                    products.map((productsData, index)=>{
                        return (
                            <Product data={productsData} key={index}/>
                        )
                    })
                }
                </div>
                
            </div>
        </div>
    )
}

export default ProductsList;