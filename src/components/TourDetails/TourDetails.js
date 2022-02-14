import React from "react";
import { useParams } from "react-router-dom";
import dp from "../../data/dp.json"
import './TourDetails.css'
function TourDetail(props){
    let {id}=useParams();
    
    return( 
       <div className="tour">
       {dp.filter(val => val.id === id).map((val,ind)=>{
           return(
           
           <div key ={val.id} className="TourDetail">
               <h1>City name: {val.name}</h1>
                <p><h3>Description:</h3> {val.info}</p>
                <h3>Price: {val.price}</h3>
           </div>)
           
           
       }
       )
       
    }
       </div>
        
        
    )
}
export default TourDetail;