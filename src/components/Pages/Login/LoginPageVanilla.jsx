import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPageVanilla = ()=>{
    const [user,setUser] = useState({
            email:"",
            password:"",
        })
    
        const onChangeHandler = (event) => {
            const fieldName = event.target.name;
            setUser({
                ...user,
                [event.target.name]: event.target.value
            })
        }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="wrapper card container pad-35 shadow">
                        <h1>Login</h1>
                        <hr />
                        <form className="form-group" action="">
                            <div className="container marg-top-20">
                                <label htmlFor="email">Email</label>
                                <input className="form-control" type="email" name="email" value={user.email} 
                                    onChange={onChangeHandler} placeholder="Email"/>
                            </div>
                            <div className="container marg-top-20">
                                <label htmlFor="password">Password</label>
                                <input className="form-control" type="password" name="password" value={user.password} 
                                    onChange={onChangeHandler} placeholder="Password"/>
                            </div>
                            <div className="container text-center">
                                <button type="submit" value="register" className="btn btn-primary marg-top-20">Login</button>
                                <p className="marg-top-20">Don't have an account? <Link to="/register">Create Account</Link></p>
                            </div>
                            
                        </form>
                    </div>

                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    )
}

export default LoginPageVanilla;