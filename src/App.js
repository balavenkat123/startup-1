import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';




function App() {
  return (
    <div >   
      <BrowserRouter>
        <Routes>          
          <Route path="/" element={<Contact/>} ></Route>
          <Route path="/Home" element={<Home/>} ></Route>      
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
