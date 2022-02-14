import Header from "../header/header";
import Footer from "../footer/footer";
import Tours from "../tours/Tours";

function Home(props){

return(
<>
<Header/>
<Tours data={props.data}/>
<Footer/>
</>
)
}
export default Home;