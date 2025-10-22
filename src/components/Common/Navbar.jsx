import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ()=>{
    
    const cartItemCount = useSelector((state)=>{return state.cartItemCount})
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        let token = localStorage.getItem("token");
        if(token){
            setLoggedIn(true);
        }else{
            setLoggedIn(false);
        }
    },[loggedIn]);


    const onLogoutHandler = ()=>{
        localStorage.clear();
        setLoggedIn(false);
        navigate("/login")
    }

    return (
        <nav className="navbar navbar-dark navbar-expand-lg shadow">
            <Link className="navbar-brand" to="/">Ecommerce Site</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="col-md-9">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <Link className="btn btn-primary float-right" to="/cart">Cart ({cartItemCount})</Link>
                </div>
                <div className="col-md-1">
                    {
                        loggedIn? <Link className="btn btn-danger float-right" to="/login" onClick={onLogoutHandler}>Logout</Link> :<Link to="/login" className="btn btn-primary float-right">Login</Link>

                    }
                </div>
                
                
            </div>
        </nav>
    )
}

export default Navbar;