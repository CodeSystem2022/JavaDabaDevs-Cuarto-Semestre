import { Route, Routes } from 'react-router-dom'; // Importa los componentes necesarios de React Router para definir rutas en la aplicación.
import Navbar from "./components/Navbar"; // Importamos el componente "Navbar" desde el archivo "Navbar.js".
import RequireAuth from './components/RequireAuth'; // Importamos el componente "RequireAuth" desde el archivo "RequireAuth.js"
import Login from './routes/Login'; // Importamos el componente "Login" desde el archivo "Login.js".
import Home from './routes/Home'; // Importamos el componente "Home" desde el archivo "Home.js".
import Register from './routes/Register';


const App = () => {
  return (
    <>
      <Navbar /> {/* Renderiza el componente "Navbar", que probablemente representa la barra de navegación de la aplicación */}
      <h1>App</h1> 
      <Routes> {/* Define un conjunto de rutas utilizando el componente "Routes" de React Router. */}
        {" "}
        {/* Definición de una ruta. */}
        <Route
          path="/"
          element={
            <RequireAuth>
              {" "}
              <Home /> {" "}
            </RequireAuth>
          }
        />

        { /* Definición de otra ruta */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>

  )

}


export default App
