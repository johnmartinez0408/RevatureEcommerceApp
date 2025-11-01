import { useEffect, useState } from "react";
import Category from "./Category";
import { useNavigate } from "react-router-dom";

const CategoryList = ()=>{
    
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    const getData = (token)=>{
        fetch("http://localhost:9191/api/category", {
            method: 'get',
            headers: new Headers({
                'Authorization': 'Bearer '+token,
            })
        })
            .then((results)=> results.json())
            .then((data)=> setCategories(data))
            .catch((error)=>{
                console.log(error);
                navigate("/login");
            })
    }
    
    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(token){
            getData(token);
        }else{
            navigate("/login")
        }
        
    },[])

    return (
        <div className="" style={{width: "100%"}}>
            <div className="card-body">
                <h2 className="card-title">Categories</h2>
                <p className="card-text">Browse product categories</p>
                <div className="row">
                {
                    categories.map((categoryData)=>{
                        return (
                            <Category data={categoryData} key={categoryData.categoryId}/>
                        )
                    })
                }
                </div>
                
            </div>
        </div>
    )
}

export default CategoryList;