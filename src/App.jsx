import React from 'react';
import { BrowserRouter as Router } from "react-router-dom"; // Importamos BrowserRouter como Router
import Paginas from "./Pages/pages";
import DataProvider from "./Context/Dataprovider";
import Carrito from "./Components/Carrito/carrito"; // Asegúrate de que este 'Carrito' no es una ruta de página, sino un componente global (ej. un sidebar o modal de carrito)
import Footer from "./Components/Footer/footer";
import NavBar from './Components/Header/Navbar';
import { AuthProvider } from './Context/AuthContext';

function App() {
  return (
    // ✅ EL BrowserRouter (Router) debe envolver TODO lo que necesite acceso al Router y sus hooks (como useNavigate en NavBar).
    // ✅ AuthProvider y DataProvider deben envolver todo lo que necesite su contexto.
    <Router>
      <AuthProvider>
        <DataProvider>
          <div className='App'>
            <NavBar/> {/* Ahora NavBar está dentro del Router y AuthProvider */}
            {/* Si 'Carrito' es un componente que se muestra en todas las páginas (ej. un carrito flotante), está bien aquí.
                Si es la página del carrito, entonces debe ser una <Route> dentro de <Paginas />. */}
            <Carrito /> 
            <div>
              <Paginas /> {/* Aquí se definen todas tus rutas (<Routes>) */}
            </div>
            <Footer/>
          </div>
        </DataProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;




// import React from 'react';
// import {BrowserRouter as Router} from "react-router-dom";
// import Paginas from "./Pages/pages";
// import DataProvider from "./Context/Dataprovider";
// import Carrito from "./Components/Carrito/carrito";
// import Footer from "./Components/Footer/footer";
// import NavBar from './Components/Header/Navbar';
// import { AuthProvider } from './Context/AuthContext';

// function App() {
//   return (
//     <AuthProvider>
//       <DataProvider>
//         <div className='App'>
//           <NavBar/>
//           <Router>
//             <Carrito />
//             <div>
//               <Paginas />
//             </div>
//             <Footer/>
//           </Router>
//         </div>
//       </DataProvider>
//     </AuthProvider>
//   );
// }

// export default App
