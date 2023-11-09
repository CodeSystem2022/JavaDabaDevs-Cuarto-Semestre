 // Importa las funciones "createContext" y "useState" de la biblioteca React. // Importa la función "createUserWithEmailAndPassword" de la biblioteca de Firebase Authenticator.
import { auth } from "../firebase"; // Importa la instancia de autenticación de Ifrebase desde el archivo "firebase.js".
import{
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
    } from "firebase/auth";
import { createContext,
        useEffect,
        useState } from "react";

export const UserContext = createContext(); // Crea un contexto de usuario llamado "UserContext"

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(false); // Utiliza "useState" para definir el estado del usuario con un valor inicial de "false".


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            // Este método esta pendiente si el usuario esta logueado o no
            console.log(user);
            if(user){
                const { email, photoURL, displayName, uid} = user;
                setUser({ email, photoURl, displayName, uid }); // con esto si existe un usario le pasamos los datos
            } else {
                setUser(null);
            }
        });
        return () => unsubscribe(); // Cancela la suscripcion cuando el componente se desmonta
    }, []);

    const registerUser = ( email, password ) => 
    createUserWithEmailAndPassword(auth, email, password);

    const loginUser = (email, password) => 
    signInWithEmailAndPassword(auth, email, password); // Con este metodo logueamos al usuario

    const signOutUser = () => signOut(auth); // Con este metodo cerramos la sesion del usuario

    return (
        <UserContext.Provider value={{ user, setUser, registerUser, loginUser, signOutUser }}>
            {children} {/* Envuelve os componentes hijos e¡con el contexto "UserContext.Provider" y proporciona el valor del estado del usuario y la función  */}
        </UserContext.Provider>
    );
};

// Agrega la validación de props
//UserProvider.propTypes = {
//        children: PropTypes.node.isRequired // Valida que se pase 'children' como prop
//    };

export default UserProvider;