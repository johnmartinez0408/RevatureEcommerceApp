import { Link } from "react-router-dom";

const Header = ()=>{
    return (
        <div className="jumbotron card bg-light" style={{marginBottom:"0px"}}>
            <h1 className="display-4">Welcome to our shop!</h1>
            <p className="lead">We have prodcuts of several categories. Please browse below.</p>
            <hr className="my-4"/>
            <Link className="btn btn-primary" style={{width:"200px"}} to="about" role="button">Learn more</Link>
        </div>
    )
}

export default Header;