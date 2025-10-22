import { useEffect, useState } from "react";
import Category from "./Category";

const CategoryList = ()=>{
    
    const [categories, setCategories] = useState([]);

    const getData = ()=>{
        fetch("https://api.escuelajs.co/api/v1/categories")
            .then((results)=> results.json())
            .then((data)=> setCategories(data))
            .catch((error)=>console.log(error))
    }
    
    useEffect(()=>{
        getData();
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
                            <Category data={categoryData} key={categoryData.id}/>
                        )
                    })
                }
                </div>
                
            </div>
        </div>
    )
}

export default CategoryList;