
import './App.css';
import Home from './components/home/home';
import dp from './data/dp.json';
import TourDetail from './components/TourDetails/TourDetails'
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    
    <>
    
    <Routes>
         <Route path='/' element={<Home/>} />
         
         <Route path='/city/:id' element={<TourDetail data={dp}/>}/>
         
       </Routes>
       <Home data={dp}/>
    </>
  );
}

export default App;
