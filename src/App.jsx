import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Paginas from "./Pages/pages";
import DataProvider from "./Context/Dataprovider";
import Footer from "./Components/Footer/footer";
import NavBar from './Components/Header/Navbar';
import { AuthProvider } from './Context/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <DataProvider>
          <div className='App'>
            <NavBar/>
            <div>
              <Paginas />
            </div>
            <Footer/>
          </div>
        </DataProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
