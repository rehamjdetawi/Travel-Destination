import Header from "../header/header";
import Footer from "../footer/footer";
import Tours from "../tours/Tours";
import dp from "/home/reham/Travel-Destination/src/data/dp.json"


function Home(){

return(

<>
<Header/>
<Tours data={dp}/>

<Footer/>


</>



)


}
export default Home;