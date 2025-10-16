import ProductsList from "./ProductsList";
import Navbar from "../../Common/Navbar";
const ProductsPage = ()=>{
    return(
        <div>
            <Navbar/>
            <div className='container wrapper'>
                <ProductsList/>
            </div>
        </div>
    )
}

export default ProductsPage;