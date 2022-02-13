
function Tours(props){
    return(
        <>
            {props.data.map(val => {
                return (
                    <div>
                        <img src={val.image} alt={val.name} />
                        <h3>Name : {val.name}</h3>
                      
                    </div>
                );
            })}
        </>
        
    )
}

export default Tours
