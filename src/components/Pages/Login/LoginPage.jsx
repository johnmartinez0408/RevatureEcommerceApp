import Navbar from "../../Common/Navbar";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
import {Formik, Form, Field, ErrorMessage} from "formik";

// This page was made using formik tags

const LoginPage = ()=>{
    
    const navigate = useNavigate();

    const initialValues={
        email: "",
        password:""
    }
    
    const [requestResponse, setRequestResponse] = useState({message:"", alertClass:""});

    const onSubmit=(values)=>{
        const payload = {usernameOrEmail: values.email, password:values.password}
        console.log("Form Data: " , payload);
        axios.post("http://localhost:9191/api/auth/login", payload)
            .then(
                 //success
                (response)=>{
                    setRequestResponse({message:"Login Successful!", alertClass:"alert alert-success"})
                    localStorage.setItem("token", response.data);
                    navigate("/")
                }
            ,
                //Error
                (error)=>{
                console.log(error)
                setRequestResponse({message:"Login Failed", alertClass:"alert alert-danger"}) }
            )
            .catch(error=>{console.log(error)});
    }

    const validationSchema = Yup.object({
        email: Yup.string()
            .required("Email is required"),
        password: Yup.string()
            .required("Password is required").min(6,"Password must be at least 6 characters")
    });
    
    return (
        <>
            <Navbar/>
            <div className='container wrapper'>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="card pad-35 shadow">
                            <h1>Login</h1>
                            <hr />
                            <Formik
                                initialValues={initialValues}
                                onSubmit={onSubmit}
                                validationSchema={validationSchema}
                                validationOnMount
                            >
                            {
                                //Create arrow function callback so that we can pass formik object to form
                                (formik)=>{
                                return(
                                    <Form className="form-group" action="">
                                        <div className={requestResponse.alertClass} role="alert">
                                        {requestResponse.message}
                                        </div>
                                        <div className="container marg-top-20">
                                            <label htmlFor="email">Email</label>
                                            <Field 
                                                className={formik.errors.email && formik.touched.email?"form-control is-invalid": "form-control" } 
                                                type="text" 
                                                name="email" 
                                                placeholder="Email or Username"
                                            />
                                            <ErrorMessage name="email">
                                            { 
                                                (errorMessage)=>{
                                                return  <small className=" text-danger">{errorMessage}</small>
                                                }
                                            } 
                                            </ErrorMessage>
                                        </div>
                                        <div className="container marg-top-20">
                                            <label htmlFor="password">Password</label>
                                            <Field 
                                                className={formik.errors.password && formik.touched.password?"form-control is-invalid": "form-control" } 
                                                type="password" 
                                                name="password" 
                                                placeholder="Password"
                                            />
                                            <ErrorMessage name="password">
                                            { 
                                                errorMessage => <small className=" text-danger">{errorMessage}</small>
                                            } 
                                            </ErrorMessage>
                                        </div>
                                        <div className="container text-center">
                                            <input 
                                                type="submit" 
                                                value="Login" 
                                                className="btn btn-primary marg-top-20"
                                                disabled={!formik.isValid}
                                            />
                                            <p className="marg-top-20">Don't have an account? <Link to="/register">Create Account</Link></p>
                                        </div>
                                    </Form>
                                )}
                            }
                                
                            </Formik>
                            
                        </div>

                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </>
        
    )
}

export default LoginPage;