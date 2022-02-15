import React, { useState } from "react";
import { useParams } from "react-router-dom";
import dp from "../../data/dp.json";
import './TourDetails.css'
function TourDetail(){

    const[readMore,setReadMore]=useState(false);

    let {id}=useParams();
    const result=dp.filter((value)=> value.id===id)
    return( 
        <>
        <h2>{result[0].name}</h2>


        <p>
            {readMore ?`Description :${result[0].info}`
            : `Description: ${result[0].info.substring(0,200)}...`}
        
        <button onClick={()=>setReadMore(!readMore)}>
          {readMore? 'show less' :'show more'}  
            </button>
        
        
        </p>
        <p>{result[0].price}</p>
        <img src={result[0].image} alt={result[0].name}/>

       {/* <div className="tour">
       {dp.filter(val => val.id === id).map((val,ind)=>{
           return(
           
           <div key ={val.id} className="TourDetail">
               <h1>City name: {val.name}</h1>
                <p><h3>Description:</h3> {val.info}</p>
                <h3>Price: {val.price}</h3>
           </div>) */}
          </> 
           
       
    
        
        
    )
}
export default TourDetail;