import { Link } from "react-router-dom";

const Navbar = ()=>{
    return (
        <nav className="navbar navbar-dark navbar-expand-lg" style={{backgroundColor:"#471266ff"}}>
            <Link className="navbar-brand" to="/">Ecommerce Site</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
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
        </nav>
    )
}

export default Navbar;