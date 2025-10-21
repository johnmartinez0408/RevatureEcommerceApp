import { Link } from "react-router-dom";

const Category = (props)=>{

    const {title, description, price, images, category, id } = props.data;

    return (
        <div className=" col-md-3" style={{marginBottom:"20px"}}>
            <div className="card">
            <div className="card-body text-center">
                <Link to={`/products/${id}`} className="text-dark">
                    <h5 className="card-title">{title}</h5>
                </Link>
                <span className="badge badge-secondary">{category?.name}</span>
                <Link to={`/products/${id}`} className="text-dark">
                    <img style={{width:"200px", height:"200px"}} src={images[0]}/>
                </Link>
                
                <h4>${price}</h4>
                <Link className="btn btn-primary" to={`/products/${id}`}>View Details</Link>
            </div>
            </div>
        </div>
    )
}

export default Category;