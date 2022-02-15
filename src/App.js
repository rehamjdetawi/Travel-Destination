
import './App.css';
import Home from './components/home/home';
import dp from './data/dp.json';
import TourDetails from './components/TourDetails/TourDetails'
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    
    <>
    
    <Routes>
         <Route path='/' element={<Home data={dp}/>} />
         
         <Route path='/city/:id' element={<TourDetails dp={dp}/>}/>
         
       </Routes>
       
    </>
  );
}

export default App;
