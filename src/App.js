
import './App.css';
import Home from './components/home/home';
import dp from './data/dp.json'

function App() {
  return (
    
    <>
    <Home data={dp}/>
    </>
  );
}

export default App;
