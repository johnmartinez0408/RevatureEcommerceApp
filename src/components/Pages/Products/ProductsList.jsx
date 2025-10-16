import { useEffect, useState } from "react";
import Product from "./Product";

const ProductsList = ()=>{
    
    const [products, setProducts] = useState([]);

    const getData = ()=>{
        fetch("https://api.escuelajs.co/api/v1/products")
            .then((results)=> results.json())
            .then((data)=> setProducts(data))
            .catch((error)=>console.log(error))
    }
    
    useEffect(()=>{
        getData();
    },[])

    return (
        <div className="card" style={{width: "100%"}}>
            <div className="card-body">
                <h1 className="card-title">Products</h1>
                <p className="card-text">Browse our full list of products</p>
                <div className="row">
                {
                    products.map((productsData)=>{
                        return (
                            <Product data={productsData} key={productsData.id}/>
                        )
                    })
                }
                </div>
                
            </div>
        </div>
    )
}

export default ProductsList;