import { Link } from "react-router-dom";

const Category = (props)=>{

    const name = props.data.categoryName;
    const image = props.data.categoryImage;
    const catId = props.data.categoryId;

    return (
        <div className=" col-md-4">
            <div className="card marg-bot-20">
                <div className="card-body text-center">
                    <Link to={`/products`} className="text-dark">
                        <h5 className="card-title">{name}</h5>
                        <img style={{width:"200px", height:"200px"}} src={image}/>
                    </Link>
                    <div className="container" style={{padding:"20px"}}  >
                        <Link className="btn btn-primary text-center" to={`/products/category/${catId}`}>Explore Category</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category;