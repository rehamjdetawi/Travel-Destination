import React from 'react';
// import { Link } from 'react-router-dom';
import dp from '../../../data/dp.json';
import TourDetail from '../../TourDetails/TourDetails'

function Tour(props) {
//    let handelClick=()=>{
//         <TourDetail/>
//     }
  
    return (
        <>
        <div key={props.city.id}>
        <img src={props.city.image}alt={dp.name}/>
        <h1>Name:{props.city.name}</h1>


        </div>
            {/* {dp.map(val => {
                return(
                    <div key={val.id}>
                        
                        <h3>Name : {val.name}</h3>
                        <Link to={`/city/${val.id}`}><img onClick={handelClick}  src={val.image} alt={val.name} /> </Link>
                       
                    </div>

                )
            })
            } */}
        </>

    )
}

export default Tour;
