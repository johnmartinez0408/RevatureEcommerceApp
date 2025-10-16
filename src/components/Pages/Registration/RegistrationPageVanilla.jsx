import { useState } from "react";
import { Link } from "react-router-dom";

const RegistrationPageVanilla = () => {

    const [user,setUser] = useState({
        firstName:"",
        lastName: "",
        email:"",
        password:"",
        phone:""
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
                        <h1>Create Account</h1>
                        <hr />
                        <form className="form-group" action="">
                            <div className="container">
                                {/* <h2>{`${user.firstName} ${user.lastName} ${user.email} ${user.password}`}</h2> */}
                                <label htmlFor="name">First Name</label>
                                <input className="form-control" type="text" name="firstName" value={user.firstName} 
                                    onChange={onChangeHandler} placeholder="First Name"/>
                            </div>
                            <div className="container marg-top-20">
                                <label htmlFor="lastName">Last Name</label>
                                <input className="form-control" type="text" name="lastName" value={user.lastName} 
                                    onChange={onChangeHandler} placeholder="Last Name"/>
                            </div>
                            <div className="container marg-top-20">
                                <label htmlFor="phone">Phone Number</label>
                                <input className="form-control" type="tel" name="phone" value={user.phone} 
                                    onChange={onChangeHandler} placeholder="Phone Number"/>
                            </div>
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
                                <button type="submit" value="register" className="btn btn-primary marg-top-20">Create Account</button>
                                <p className="marg-top-20">Already have an account? <Link to="/login">Login</Link></p>
                            </div>
                            
                        </form>
                    </div>

                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    )
}

export default RegistrationPageVanilla;