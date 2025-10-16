import Navbar from "../../Common/Navbar";
import CategoryList from "./CategoryList";
import Header from "./Header";

const HomePage = ()=>{
    return(
        <div>
            <Navbar/>
            <div className='container wrapper'>
                <Header/>
                <CategoryList/>
            </div>
        </div>
    )
}

export default HomePage;