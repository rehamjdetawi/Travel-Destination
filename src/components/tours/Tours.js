import Tour from "./tour/Tour";
import {Link} from 'react-router-dom';


function Tours(props){
    return(
        <>
           { props.data.map(val=>{
              return(
                   
                <div key= {val.id}>    
                <Link to={`/city/${val.id}`}><Tour city={val}/> </Link>
              </div>

            
    
    
              )
            }

    )
            }    
     </>       
    )
            }     
             

    

export default Tours
