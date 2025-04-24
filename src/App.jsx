import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Paginas from "./Pages/pages";
import DataProvider from "./Context/Dataprovider";
import Carrito from "./Components/Carrito/carrito";
import Footer from "./Components/Footer/footer";
import NavBar from './Components/Header/Navbar';
import { AuthProvider } from './Context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <div className='App'>
          <NavBar/>
          <Router>
            <Carrito />
            <div>
              <Paginas />
            </div>
            <Footer/>
          </Router>
        </div>
      </DataProvider>
    </AuthProvider>
  );
}

export default App
