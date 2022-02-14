import Header from "../header/header";
import Footer from "../footer/footer";
import Tours from "../tours/Tours";
import './home.css'


function Home(props){
   
return(
<div className="home">
<Header/>


<Tours data={props.data}/>
<Footer/>

</div>



)
}
export default Home;