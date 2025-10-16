import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../Common/Navbar";

const ProductDetailsPage = ()=>{
    
    let params = useParams();
    const [product, setProduct] = useState({});
    // const productId =40;
    const productId = params.id;
    const getData = ()=>{
        fetch(`https://api.escuelajs.co/api/v1/products/${productId}`)
            .then((results)=> results.json())
            .then((data)=> {
                setProduct(data);
            })
            .catch((error)=>console.log(error))
    }
    
    useEffect(()=>{
        getData();
    },[productId])
    


    return (
        <>
            <Navbar/>
            <div className="card" style={{width: "100%"}}>
                <div className="card">
                    <div className="container" style={{margin:"20px"}}>
                        <Link to="/products" className="btn btn-primary">Back</Link>
                    </div>
                    <div className="card-body text-center" style={{ marginBottom:"50px"}}>
                        <h1 className="card-title">{product.title}</h1>
                        <span class="badge badge-secondary">{product.category?.name}</span>
                        <h4>${product.price}</h4>
                        {
                            product.images?.map((imageUrl)=>{
                                return(
                                    <img className="img-thumbnail" style={{width:"300px", height:"300px"}} src={imageUrl}/>
                                )
                            })
                        }
                        
                        <p style={{padding:"20px", fontSize:"20px"}}>{product.description}</p>
                        <button className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetailsPage;