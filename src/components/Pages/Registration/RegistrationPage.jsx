import { useState } from "react";
import { Link } from "react-router-dom";
import {useFormik} from "formik"
import * as Yup from "yup"

//This page was made using formik without formik tags

const RegistrationPage = () => {

    const initialValues={
        firstName: "",
        lastName:"",
        phone:"",
        password:""

    }
    
    const onSubmit=(values)=>{
        console.log("Form Data: " , values);
    }
    
    //if not using Yup
    const validate = (values)=>{
        // if(!values.firstName){
        //     ErrorMessage.firstName = "first name is required"
        // }
        // if(!values.email){
        //     ErrorMessage.email = "email is required"
        // }
        // if(!values.password){
        //     ErrorMessage.password = "password is required"
        // }
    }

    const validationSchema = Yup.object({
        firstName: Yup.string()
            .required("First name is required"),
        lastName: Yup.string()
            .required("Last name is required"),
        phone: Yup.string()
            .required("Phone number is required").length(10, "Phone number must be 10 digits"),
        email: Yup.string()
            .required("Email is required"),
        password: Yup.string()
            .required("Password is required").min(6,"Password must be at least 6 characters")
    });

    const formik = useFormik({
        
        initialValues,
        onSubmit,
        // validate //if not using Yup
        validationSchema,
        validateOnMount:true

    });


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="wrapper card container pad-35 shadow">
                        <h1>Create Account</h1>
                        <hr />
                        <form className="form-group" action="" onSubmit={formik.handleSubmit}>
                            <div className="container">
                                <label htmlFor="name">First Name</label>
                                <input 
                                    className={formik.errors.firstName && formik.touched.firstName?"form-control is-invalid": "form-control" } 
                                    type="text" name="firstName"  placeholder="First Name" 
                                    value={formik.values.firstName} onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.firstName && formik.touched.firstName? <small className=" text-danger">{formik.errors.firstName}</small>:null}
                            </div>
                            <div className="container marg-top-20">
                                <label htmlFor="lastName">Last Name</label>
                                <input 
                                    className={formik.errors.lastName && formik.touched.lastName?"form-control is-invalid": "form-control" }  
                                    type="text" name="lastName" placeholder="Last Name"
                                    value={formik.values.lastName} onChange={formik.handleChange} 
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.lastName && formik.touched.lastName? <small className=" text-danger">{formik.errors.lastName}</small>:null}
                            </div>
                            <div className="container marg-top-20">
                                <label htmlFor="phone">Phone Number</label>
                                <input 
                                    className={formik.errors.phone && formik.touched.phone?"form-control is-invalid": "form-control" } 
                                    type="tel" name="phone" placeholder="Phone Number" 
                                    value={formik.values.phone} onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.phone && formik.touched.phone? <small className=" text-danger">{formik.errors.phone}</small>:null}
                            </div>
                            <div className="container marg-top-20">
                                <label htmlFor="email">Email</label>
                                <input 
                                    className={formik.errors.email && formik.touched.email?"form-control is-invalid": "form-control" } 
                                    type="text" name="email" placeholder="Email" 
                                    value={formik.values.email} onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.email && formik.touched.email? <small className=" text-danger">{formik.errors.email}</small>:null}
                            </div>
                            <div className="container marg-top-20">
                                <label htmlFor="password">Password</label>
                                <input 
                                    className={formik.errors.password && formik.touched.password?"form-control is-invalid": "form-control" } 
                                    type="password" name="password" placeholder="Password" 
                                    value={formik.values.password} onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.password && formik.touched.password? <small className=" text-danger">{formik.errors.password}</small>:null}
                            </div>

                            <div className="container text-center">
                                <input type="submit" value="Create Account" className="btn btn-primary marg-top-20"
                                    disabled={!formik.isValid}/>
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

export default RegistrationPage;