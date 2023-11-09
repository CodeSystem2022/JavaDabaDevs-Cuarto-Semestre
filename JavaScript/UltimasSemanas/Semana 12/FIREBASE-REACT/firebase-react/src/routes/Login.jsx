import { useContext, useState } from "react"; // Importa la función "useContext" de la biblioteca React para acceder a un contecto.
import { UserContext } from "../context/UserProvider"; // Importa el contexto "userContext" desde el archivo "UserProvider.js".
import { useNavigate } from "react-router-dom"; // Importa la función "useNavigate" de React para la navegacion.

/*const Login = () => {
    const { user, setUser } = useContext(UserContext); // Utiliza "userContext" para acceder a "UserContext" y obtener el estado del usuario y la función .
    const navigate = useNavigate(); // Utiliza "useNavigate" para acceder a la función de navegación.

    const handleClickLogin = () => {
        setUser(true); // Establece el estado del usuario "true" {en linea}.
        navigate("/"); // Navega a la ruta "/" despues de hacer click en el botón de acceso.
    };
*/

const Login = () => {

    const [email, setEmail] = useState("prueba@mail.com");
    const [password, setPassword] = useState("123456");

    const { loginUser } = useContext(UserContext);
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            await loginUser(email, password);

            console.log("Usuario logueado");
            navigate("/");
        } catch (error) {
            console.log(error.code);
        }
    };
    
    return (
        <>  
            {/* Renderiza un título que dice "Login" */}
            <h1>Login</h1>
            <from onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Ingrese su email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Ingrese su contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Iniciar sesión</button>
            </from>
        </>
    );
};

export default Login;