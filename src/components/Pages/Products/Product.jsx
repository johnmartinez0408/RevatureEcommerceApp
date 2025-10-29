import { Link } from "react-router-dom";

const Category = (props)=>{

    const {productName, categoryName, brand, productDescription, price, image, category, productId } = props.data;

    

    return (
        <div className=" col-md-3" style={{marginBottom:"20px"}}>
            <div className="card">
            <div className="card-body text-center">
                <Link to={`/products/${productId}`} className="text-dark">
                    <h5 className="card-title">{productName}</h5>
                </Link>
                <span className="badge badge-secondary">{categoryName}</span>
                <Link to={`/products/${productId}`} className="text-dark">
                    <img style={{width:"200px", height:"200px"}} src={image}/>
                </Link>
                
                <h4>${price}</h4>
                <Link className="btn btn-primary" to={`/products/${productId}`}>View Details</Link>
            </div>
            </div>
        </div>
    )
}

export default Category;