import { useEffect, useState } from "react";
import Category from "./Category";

const CategoryList = ()=>{
    
    const [categories, setCategories] = useState([]);
    const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0b255QGV4YW1wbGUuY29tIiwiaWF0IjoxNzYxODI5MTA1LCJleHAiOjE3NjE5MTU1MDV9.8TJ5ml5OqM7fNGdZ6hIdjQD4wXcw7tk281VadWEc55k1bE5l-RxAPHs7OYCGn87FXvmsjbVSoyCdxPOThTrWMQ";

    const getData = ()=>{
        fetch("http://localhost:9101/api/category", {
            method: 'get',
            headers: new Headers({
                'Authorization': 'Bearer '+token,
            })
        })
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