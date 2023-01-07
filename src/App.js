import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Booking from './components/Booking';

import Dashboard from './components/Dashboard';

import { Routes , Route, Router, BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
     <div className="App">
        <Navbar />
        <Sidebar/>    
        <Routes>
         
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/booking" element={<Booking />}></Route>
        </Routes>
      </div>
  </BrowserRouter>
   
     
      
     

  );
}

export default App;
