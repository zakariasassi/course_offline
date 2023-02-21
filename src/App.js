import React  from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import { BrowserRouter  , Routes , Route } from 'react-router-dom';



function App() {
  return (
      <>

        
        <BrowserRouter>
        <Navbar />
            <Routes>
                <Route path={'/'} element={<Home />}  />
                <Route path={'/home'} element={<Home />}  />
                <Route path={'/signup'} element={<Signup />}  />

            </Routes>
        </BrowserRouter>



      </>
  );
}

export default App;
