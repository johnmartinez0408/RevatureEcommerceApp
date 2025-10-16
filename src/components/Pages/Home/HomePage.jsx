import Navbar from "../../Common/Navbar";
import CategoryList from "./CategoryList";
import Header from "./Header";

const HomePage = ()=>{
    return(
        <div>
            <Navbar/>
            <Header/>
            <CategoryList/>
        </div>
    )
}

export default HomePage;